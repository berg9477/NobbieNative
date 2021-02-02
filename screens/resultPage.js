import * as React from 'react';
import axios from 'axios';
import Results from '../components/Results';

class resultPage extends React.Component {
    constructor() {
        super();
        this.state = {
            allUsage: [],
            relations: [],
            noResult: false,
        };
        this.getData = this.getData.bind(this);
    }

    /*function is triggerd upon loading this page*/
    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        try {
            /*reset values for new search*/
            this.setState({ noResult: false });
            this.setState({ allUsage: [] });
            this.setState({ relations: [] });
            /*shows laoding.. when restAPI is called*/
            this.setState({ loading: true });
            /*There are 2 restAPI urls used, first is for getting basic usage data,
                                second is for finding names that are related to the search input*/
            const usageUrl =
                'https://www.behindthename.com/api/lookup.json?name=' +
                this.props.route.params.name +
                '&key=sa583307807';
            const relatedUrl =
                'https://www.behindthename.com/api/related.json?name=' +
                this.props.route.params.name +
                '&key=sa583307807';
            axios.all([
                await axios.get(usageUrl).then((usage) => {
                    /*When a non existing name is entered the restAPI will return an error.
                                                      This is why we only save the results unless there is no error message*/
                    if (usage.data.error === undefined) {
                        usage.data.forEach((item) => {
                            this.setState({ allUsage: item });
                            this.setState({ noResult: false });
                            // this.setState({ loading: false });
                        });
                    } else {
                        this.setState({ noResult: true });
                        // this.setState({ loading: false });
                    }
                }),
                await axios.get(relatedUrl).then((related) => {
                    /*When a non existing name is entered the restAPI will return an error.
                                                      This is why we only save the results unless there is no error message*/
                    if (related.data.error === undefined) {
                        this.setState({ relations: related.data.names });
                    }
                }),
            ]);
        } catch (error) {
            console.error(error);
        }
    };

    render() {
        return (
            <Results
                allUsage={this.state.allUsage}
                allRelated={this.state.relations}
                noResult={this.state.noResult}
                navigation={this.props.route.params.navigation}
            />
        );
    }
}
export default resultPage;
