import * as React from 'react';
import { Text, View, TextInput} from 'react-native';
import Constants from 'expo-constants';
import styles from '../styles/styling';


class InputField extends React.Component
{
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <View>
                <TextInput
                    onChangeText={(name) => this.props.saveName(name)}
                    style={styles.input}
                    placeholder={this.props.label}
                    id={this.props.label}
                />
            </View>
        )
    }
}
export default InputField;
