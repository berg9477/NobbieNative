import * as React from 'react';
import {View, Image, TouchableWithoutFeedback, Keyboard} from 'react-native';
import styles from './styles/mainStyling';
import InputField from './components/InputField';
import Search from './components/Search';
import Results from './components/Results';
import nobbieHeader from './assets/nobbieHeaderGreen.png';
import Welcome from './components/Welcome';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            name: '',
            allUsage: [],
            buttonDisabled: true,
            noResult: false
        };
        this.saveName = this.saveName.bind(this);
        this.saveRelations = this.saveRelations.bind(this);
        this.saveUsage = this.saveUsage.bind(this);
        this.setNoResult = this.setNoResult.bind(this);
    }

    /*Function that is triggered on input of inputfield*/
    saveName(searchItem) {
        this.setState({ name: searchItem });
        // When searchItem is empty the get Results button is disabled
        if(searchItem === ""){
            this.setState({buttonDisabled: true});
        } else {
            this.setState({buttonDisabled: false});
        }
    }

    /*Functions to save results triggered on search*/
    saveUsage(result) {
        this.setState({ allUsage: result });
    }
    saveRelations(result) {
        this.setState({ data: result });
    }

    /*Function that is triggered if the restApi didn't find any results on search*/
    setNoResult(result){
        this.setState({noResult: result})
    }

    render() {

        return (
            <View style={styles.container}>
                {/*TouchableWithoutFeedback is used so the keyboard is dismissed when tapping outside of the InputField*/}
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View style={styles.main}>
                        <Image style={styles.header} source={nobbieHeader} />
                        <View style={styles.searchPanel}>
                            <Welcome />
                            <InputField label="Type in your search..." saveName={this.saveName} />
                            <Search
                                buttonDisabled={this.state.buttonDisabled}
                                name={this.state.name}
                                setRelatedResult={this.saveRelations}
                                setUsageResult={this.saveUsage}
                                setNoResult={this.setNoResult}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <Results
                    allUsage={this.state.allUsage}
                    allRelated={this.state.data}
                    noResult={this.state.noResult}
                />
            </View>
        );
    }
}
export default App;
