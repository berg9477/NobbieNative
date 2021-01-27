import * as React from 'react';
import { Text, View, TextInput, FlatList, Button } from 'react-native';
import Constants from 'expo-constants';
import styles from '../styles/styling';
import Item from './Item';

class Results extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.renderUsageData = this.renderUsageData.bind(this);
        this.renderGenderData = this.renderGenderData.bind(this);
    }

    renderUsageData() {
        return this.props.allUsage.usages.map((item, index) => {
            let gen;
            if(item.usage_gender === 'f'){
                gen = 'females';
            } else{
                gen = 'males'
            }
            return (
                <Text style={styles.resultText} key={index}>the {item.usage_full} use it for {gen}</Text>
            )
        })
    }

    renderGenderData(gen) {
        let gender;
        if (gen === 'f') {
            gender = 'This name is only used for naming women';
        } else if (gen === 'm') {
            gender = 'This name is only used for naming men';
        } else {
            //gender can also be mf or fm
            gender = 'This name is used for both men and women';
        }
        return gender;
    }

    render() {
        const renderItem = ({ item }) => <Item title={item} />;

        return (
            <View>
                {this.props.allUsage.gender !== undefined &&
                <View>
                    <Text style={styles.resultText}>{this.renderGenderData(this.props.allUsage.gender)}</Text>
                    <View>{this.renderUsageData()}</View>
                    <View style={styles.results}>
                        {this.props.allRelated.length > 0 &&
                        <FlatList
                            style={styles.list}
                            stickyHeaderIndices={[0]}
                            ListHeaderComponent={()=><Text style={styles.resultHeader}>This name is related to</Text>}
                            data={this.props.allRelated}
                            renderItem={renderItem}
                            keyExtractor={(item) => item}
                        />}
                    </View>
                </View>}
            </View>
        );
    }
}
export default Results;
