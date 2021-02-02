import * as React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import home from './screens/home';
import resultPage from './screens/resultPage';
import styles from './styles/mainStyling';
import nobbieHeader from './assets/nobbieHeaderGreen.png';

const Stack = createStackNavigator();

function App() {
    return (
        <View style={styles.container}>
            <Image style={styles.header} source={nobbieHeader} />
            <NavigationContainer>
                <Stack.Navigator initialRouteName="home" headerMode="none">
                    <Stack.Screen name="Home" component={home} />
                    <Stack.Screen name="Result" component={resultPage} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}

export default App;
