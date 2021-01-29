import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from '../styles/styling';
import axios from 'axios';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = async () => {
        try {
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
                    if (usage.data.error === undefined) {
                        usage.data.forEach((item) => {
                            this.props.setUsageResult(item);
                            this.props.setNoResult(false);
                        });
                    } else {
                        this.props.setNoResult(true);
                    }
                }),
                await axios.get(relatedUrl).then((related) => {
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
                    style={!this.props.buttonDisabled ? styles.button : styles.buttonDisabled}
                    onPress={() => this.handleClick()}>
                    <Text style={styles.buttonText}>Get results</Text>
                </TouchableOpacity>
                {this.state.loading &&
                <Text>Loading...</Text>
                }
            </View>
        );
    }
}
export default Search;
