import * as React from 'react';
import { Text, View, FlatList } from 'react-native';
import resultsStyles from "../styles/resultsStyling";
import Item from './Item';
import Dashedline from './Dashedline';

class Results extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.renderUsageData = this.renderUsageData.bind(this);
        this.renderGenderData = this.renderGenderData.bind(this);
    }

    /*Functions to calculate the output text based upon search results for general usage*/
    renderUsageData() {
        return this.props.allUsage.usages.map((item, index) => {
            let gen;
            if (item.usage_gender === 'f') {
                gen = 'females';
            } else {
                gen = 'males';
            }
            return (
                <Text style={resultsStyles.resultText} key={index}>
                    the {item.usage_full} use it for {gen}
                </Text>
            );
        });
    }
    renderGenderData(gen) {
        let gender;
        if (gen === 'f') {
            gender = 'This name is only used for naming women';
        } else if (gen === 'm') {
            gender = 'This name is only used for naming men';
        } else {
            /*gender can also be mf or fm*/
            gender = 'This name is used for both men and women';
        }
        return gender;
    }

    render() {
        const renderItem = ({ item }) => <Item title={item} />;

        return (
            <View style={resultsStyles.resultsWrapper}>
                {(this.props.allUsage.gender !== undefined && this.props.noResult === false) && (
                    <View>
                        <View style={resultsStyles.results}>
                            <Text style={resultsStyles.resultText}>
                                {this.renderGenderData(this.props.allUsage.gender)}
                            </Text>
                        </View>
                        <View style={resultsStyles.results}>{this.renderUsageData()}</View>
                        <Dashedline />
                        <View style={resultsStyles.results}>
                            {this.props.allRelated.length > 0 ? (
                                <FlatList
                                    style={resultsStyles.list}
                                    stickyHeaderIndices={[0]}
                                    ListHeaderComponent={() => (
                                        <Text style={resultsStyles.resultHeader}>
                                            This name is related to
                                        </Text>
                                    )}
                                    data={this.props.allRelated}
                                    renderItem={renderItem}
                                    keyExtractor={(item) => item}
                                />
                            ) : (
                                <Text style={resultsStyles.resultText}>
                                    There are no related names found to share
                                </Text>
                            )}
                        </View>
                    </View>
                )}
                {this.props.noResult === true && (
                    <View style={resultsStyles.results}>
                        <Text style={resultsStyles.resultText}>
                            No results found, please try again.
                        </Text>
                    </View>
                )}
            </View>
        );
    }
}
export default Results;
