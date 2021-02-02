import * as React from 'react';
import { View, TextInput } from 'react-native';
import searchStyling from '../styles/searchStyling';
class InputField extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <View>
                <TextInput
                    onChangeText={(name) => this.props.saveName(name)}
                    style={searchStyling.input}
                    placeholder={this.props.label}
                    id={this.props.label}
                    keyboardType="default"
                />
            </View>
        );
    }
}
export default InputField;
