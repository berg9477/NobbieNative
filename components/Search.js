import * as React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import searchStyling from '../styles/searchStyling';
import mainStyling from '../styles/mainStyling';
import rainbow from '../assets/rainbow.png';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    /*function is triggered upon clicking the get Results button*/
    handleClick() {
        /*Navigation to the resultPage*/
        this.props.navigation.navigate('Result', {
            name: this.props.name,
            navigation: this.props.navigation,
        });
    }

    render() {
        return (
            <View>
                <TouchableOpacity
                    disabled={this.props.buttonDisabled}
                    /*When the button is disabled a different color is used so different style is set*/
                    style={
                        !this.props.buttonDisabled
                            ? mainStyling.button
                            : mainStyling.buttonDisabled
                    }
                    onPress={() => this.handleClick()}>
                    <Text style={mainStyling.buttonText}>Get results</Text>
                </TouchableOpacity>
                {this.state.loading && (
                    <View style={searchStyling.loading}>
                        <Text style={searchStyling.loadingText}>
                            Loading...{' '}
                            <Image style={searchStyling.loadingImg} source={rainbow} />
                        </Text>
                    </View>
                )}
            </View>
        );
    }
}
export default Search;
