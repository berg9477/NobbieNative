import * as React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import searchStyling from "../styles/searchStyling";
import axios from 'axios';
import rainbow from "../assets/rainbow.png";

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    /*function is triggered upon clicking the get Results button*/
    handleClick = async () => {
        try {
            /*reset values for new search*/
            this.props.setNoResult(false);
            this.props.setUsageResult([]);
            this.props.setRelatedResult([]);
            /*shows laoding.. when restAPI is called*/
            this.setState({loading: true});
            /*There are 2 restAPI urls used, first is for getting basic usage data,
            second is for finding names that are related to the search input*/
            const usageUrl =
                'https://www.behindthename.com/api/lookup.json?name=' +
                this.props.name +
                '&key=sa583307807';
            const relatedUrl =
                'https://www.behindthename.com/api/related.json?name=' +
                this.props.name +
                '&key=sa583307807';
            axios.all([
                await axios.get(usageUrl).then((usage) => {
                    /*When a non existing name is entered the restAPI will return an error.
                      This is why we only save the results unless there is no error message*/
                    if (usage.data.error === undefined) {
                        usage.data.forEach((item) => {
                            this.props.setUsageResult(item);
                            this.props.setNoResult(false);
                            this.setState({loading: false});
                        });
                    } else {
                        this.props.setNoResult(true);
                        this.setState({loading: false});
                    }
                }),
                await axios.get(relatedUrl).then((related) => {
                    /*When a non existing name is entered the restAPI will return an error.
                      This is why we only save the results unless there is no error message*/
                    if (related.data.error === undefined) {
                        this.props.setRelatedResult(related.data.names);
                    }
                }),
            ]);
        } catch (error) {
            console.error(error);
        }
    };

    render() {
        return (
            <View>
                <TouchableOpacity
                    disabled={this.props.buttonDisabled}
                    /*When the button is disabled a different color is used so different style is set*/
                    style={!this.props.buttonDisabled ? searchStyling.button : searchStyling.buttonDisabled}
                    onPress={() => this.handleClick()}>
                    <Text style={searchStyling.buttonText}>Get results</Text>
                </TouchableOpacity>
                {this.state.loading &&
                    <View style={searchStyling.loading}>
                        <Text style={searchStyling.loadingText}>Loading...  <Image style={searchStyling.loadingImg} source={rainbow}/></Text>
                    </View>
                        }
            </View>
        );
    }
}
export default Search;
