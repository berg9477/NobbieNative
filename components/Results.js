import * as React from 'react';
import { Text, View, FlatList } from 'react-native';
import styles from '../styles/styling';
import Item from './Item';
import Dashedline from './Dashedline';

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
            if (item.usage_gender === 'f') {
                gen = 'females';
            } else {
                gen = 'males';
            }
            return (
                <Text style={styles.resultText} key={index}>
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
            //gender can also be mf or fm
            gender = 'This name is used for both men and women';
        }
        return gender;
    }

    render() {
        const renderItem = ({ item }) => <Item title={item} />;

        return (
            <View style={styles.resultsWrapper}>
                {(this.props.allUsage.gender !== undefined && this.props.noResult === false) && (
                    <View>
                        <View style={styles.results}>
                            <Text style={styles.resultText}>
                                {this.renderGenderData(this.props.allUsage.gender)}
                            </Text>
                        </View>
                        <View style={styles.results}>{this.renderUsageData()}</View>
                        <Dashedline />
                        <View style={styles.results}>
                            {this.props.allRelated.length > 0 ? (
                                <FlatList
                                    style={styles.list}
                                    stickyHeaderIndices={[0]}
                                    ListHeaderComponent={() => (
                                        <Text style={styles.resultHeader}>
                                            This name is related to
                                        </Text>
                                    )}
                                    data={this.props.allRelated}
                                    renderItem={renderItem}
                                    keyExtractor={(item) => item}
                                />
                            ) : (
                                <Text style={styles.resultText}>
                                    There are no related names found to share
                                </Text>
                            )}
                        </View>
                    </View>
                )}
                {this.props.noResult === true && (
                    <View style={styles.results}>
                        <Text style={styles.resultText}>
                            No results found, please try again.
                        </Text>
                    </View>
                )}
            </View>
        );
    }
}
export default Results;
