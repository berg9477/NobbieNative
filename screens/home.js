import * as React from 'react';
import { View, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from '../styles/mainStyling';
import InputField from '../components/InputField';
import Search from '../components/Search';
import Welcome from '../components/Welcome';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            buttonDisabled: true,
        };
        this.saveName = this.saveName.bind(this);
    }

    /*Function that is triggered on input of inputfield*/
    saveName(searchItem) {
        this.setState({ name: searchItem });
        // When searchItem is empty the get Results button is disabled
        if (searchItem === '') {
            this.setState({ buttonDisabled: true });
        } else {
            this.setState({ buttonDisabled: false });
        }
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                {/*TouchableWithoutFeedback is used so the keyboard is dismissed when tapping outside of the InputField*/}
                <View style={styles.main}>
                    <View style={styles.searchPanel}>
                        <Welcome />
                        <InputField
                            label="Type in your search..."
                            saveName={this.saveName}
                        />
                        <Search
                            buttonDisabled={this.state.buttonDisabled}
                            name={this.state.name}
                            setRelatedResult={this.saveRelations}
                            setUsageResult={this.saveUsage}
                            setNoResult={this.setNoResult}
                            navigation={this.props.navigation}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
export default Home;
