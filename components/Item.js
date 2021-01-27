import * as React from 'react';
import { Text, View } from 'react-native';
import Constants from 'expo-constants';
import styles from '../styles/styling';

class Item extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <View style={styles.item}>
                <Text style={styles.resultText}>{this.props.title}</Text>
            </View>
        );
    }
}
export default Item;
