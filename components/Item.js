import * as React from 'react';
import { Text, View } from 'react-native';
import resultsStyles from "../styles/resultsStyling";

class Item extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <View style={resultsStyles.item}>
                <Text style={resultsStyles.resultText}>{this.props.title}</Text>
            </View>
        );
    }
}
export default Item;
