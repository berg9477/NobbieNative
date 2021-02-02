import { StyleSheet } from 'react-native';

const resultsStyles = StyleSheet.create({
    resultText: {
        fontSize: 15,
        fontFamily: 'Courier New',
        textAlign: 'center',
        paddingTop: 10,
    },
    resultHeader:{
        backgroundColor:  'hsl(123, 31%, 73%)',
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        padding: 8,
        fontFamily: 'Avenir-Medium',
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
        height: 250,
    },
});


export default resultsStyles;
