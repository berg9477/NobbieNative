import * as React from 'react';
import styles from '../styles/styling';
import Dash from "react-native-dash";


class Dashedline extends React.Component
{
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <Dash
                style={styles.dottedRow}
                dashStyle={{borderRadius: 100, overflow: 'hidden'}}
                dashThickness={3}
                dashLength={3}
                dashGap={3}
                dashColor={'#ab999c'}
            />
        )
    }
}
export default Dashedline;