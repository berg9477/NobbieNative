import * as React from 'react';
import { Text, View } from 'react-native';
import welcomeStyles from '../styles/welcomeStyling';
import Dashedline from './Dashedline';

class Welcome extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <View>
                <Text style={welcomeStyles.welcomeTitle}>
                    Welcome to Nobbie, your personal name finder!
                </Text>
                <Text style={welcomeStyles.welcome}>
                    Looking for a name for your baby? Then nobbie is the place that can
                    help you! Search for a name, find out its origin and to which other
                    names it is related.
                </Text>
                <Dashedline />
            </View>
        );
    }
}
export default Welcome;
