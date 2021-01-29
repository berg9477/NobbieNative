import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


const styles = StyleSheet.create({
    container: {
        flex: 2,
        paddingTop: Constants.statusBarHeight,
        padding: 4,
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
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8,
        backgroundColor: 'hsl(123, 31%, 73%)',
        padding: 10,
        borderRadius: 12,
    },
    buttonDisabled: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8,
        backgroundColor: 'hsl(123, 31%, 90%)',
        padding: 10,
        borderRadius: 12,
    },
    buttonText: {
        fontSize: 20,
        fontFamily: 'Avenir-Medium',
        color: 'white',
    },
    input: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 16,
        backgroundColor: 'white',
        height: 50,
        fontFamily: 'Courier New',
        borderRadius: 12,
        fontSize: 20,
        padding: 6,
    },
    header: {
        width: 400,
        resizeMode: 'contain',
    },
    resultText: {
        fontSize: 15,
        fontFamily: 'Courier New',
    },
    resultHeader:{
        backgroundColor:  'hsl(123, 31%, 73%)',
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        padding: 8,
        fontFamily: 'Avenir-Medium',
    },
    resultsWrapper: {
        flex: 0.7,
    },
    results: {
        padding: 10,
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#707070',
        marginVertical: 3,
        marginHorizontal: 3,
        alignItems: 'center',
    },
    list: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: 'white',
    },
    welcome: {
        fontSize: 13,
        fontFamily: 'Avenir-Medium',
        color: '#ab999c',
        textAlign: "center",
        margin: 10,
    },
    welcomeTitle: {
        fontSize: 16,
        fontFamily: 'Avenir-Medium',
        color: 'black',
        fontWeight: "bold",
        textAlign: "center",
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
