import * as React from 'react';
import {View, Image, TouchableWithoutFeedback, Keyboard} from 'react-native';
import styles from './styles/styling';
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

    saveName(searchItem) {
        this.setState({ name: searchItem });
        console.log(searchItem)
        if(searchItem === ""){
            this.setState({buttonDisabled: true});
        } else {
            this.setState({buttonDisabled: false});
        }
    }

    saveUsage(result) {
        this.setState({ allUsage: result });
    }

    setNoResult(result){
        this.setState({noResult: result})
    }

    saveRelations(result) {
        this.setState({ data: result });
    }

    render() {

        return (
            <View style={styles.container}>
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
