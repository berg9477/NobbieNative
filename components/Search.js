import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from '../styles/styling';
import axios from 'axios';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {};
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
                        });
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
                    style={styles.button}
                    onPress={() => this.handleClick()}>
                    <Text style={styles.buttonText}>Get results</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default Search;
