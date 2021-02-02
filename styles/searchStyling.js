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
