import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#707070',
        marginVertical: 3,
        marginHorizontal: 3,
        alignItems: 'center',
    },
    resultText: {
        fontSize: 15,
        fontFamily: 'Courier New',
    },
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        padding: 8,
    },
    searchPanel: {
        flex: 1,
        backgroundColor: 'hsl(54, 100%, 93.5%)',
        padding: 8,
        borderWidth: 0.5,
        borderColor: '#707070',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        backgroundColor: 'hsl(123, 31%, 73%)',
        padding: 15,
        borderRadius: 12,

    },
    buttonText: {
        fontSize: 20,
        fontFamily: 'Gadugi',
        color: 'white',
    },
    input: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        backgroundColor: 'white',
        height: 50,
        fontFamily: 'Courier New',
        borderRadius: 12,
        fontSize: 20,
        padding: 8,
    },
    header: {
        width: 400,
        resizeMode: 'contain',
    },
    resultHeader:{
        backgroundColor:  'hsl(123, 31%, 73%)',
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        padding: 8,
    },
    results: {
        padding: 20,
    },
    list: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: 'white',
    }
});

export default styles;
