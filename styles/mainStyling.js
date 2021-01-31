import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


const styles = StyleSheet.create({
    container: {
        flex: 2,
        paddingTop: Constants.statusBarHeight,
        padding: 4,
    },
    header: {
        width: 400,
        resizeMode: 'contain',
    },
    main: {
        flex: 1,
        alignItems: "center",
    },
    searchPanel: {
        flex: 1,
        backgroundColor: 'hsl(54, 100%, 93.5%)',
        padding: 4,
        borderWidth: 0.5,
        borderColor: '#707070',
    },
    dottedRow: {
        margin: 10,
        height: 1,
        width: '95%',
        alignItems: "center",
        justifyContent: 'center',
    }
});

export default styles;
