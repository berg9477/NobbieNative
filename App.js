import * as React from 'react';
import { View, Image } from 'react-native';
import styles from './styles/styling';
import InputField from './components/InputField';
import Search from './components/Search';
import Results from './components/Results';
import nobbieHeader from './assets/nobbieHeaderGreen.png'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            name: '',
            allUsage: [],
        };
        this.saveName = this.saveName.bind(this);
        this.saveRelations = this.saveRelations.bind(this);
        this.saveUsage = this.saveUsage.bind(this);
    }

    saveName(searchItem) {
        this.setState({ name: searchItem });
    }

    saveUsage(result) {
        this.setState({ allUsage: result });
    }

    saveRelations(result) {
        this.setState({ data: result });
    }

    render() {

        return (
            <View style={styles.container}>
                <Image style={styles.header} source={nobbieHeader}/>
                <View style={styles.searchPanel}>
                <InputField label="Type in your search..." saveName={this.saveName} />
                <Search
                    name={this.state.name}
                    setRelatedResult={this.saveRelations}
                    setUsageResult={this.saveUsage}
                />
                <Results allUsage={this.state.allUsage} allRelated={this.state.data} />
                </View>
            </View>
        );
    }
}
export default App;
