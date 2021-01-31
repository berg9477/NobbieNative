import { StyleSheet } from 'react-native';


const searchStyling = StyleSheet.create({
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
    loading: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        paddingTop: 30,
    },
    loadingImg: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
        margin: -7,
    },
    loadingText: {
        fontSize: 20,
        fontFamily: 'Avenir-Medium',
        color: 'black',
    }
});

export default searchStyling;
