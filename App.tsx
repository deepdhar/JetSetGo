import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import FindFlightScreen from './screens/FindFlightScreen';
import BookTicketScreen from './screens/BookTicketScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TicketScreen from './screens/TicketScreen';

const Stack = createStackNavigator();

function App(): React.JSX.Element {

    return (
        <SafeAreaView style={{flex: 1}}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen options={{headerShown: false}} name="HomeScreen" component={HomeScreen} />
                    <Stack.Screen options={{headerShown: false}} name="FindFlightScreen" component={FindFlightScreen} />
                    <Stack.Screen options={{headerShown: false}} name="BookTicketScreen" component={BookTicketScreen} />
                    <Stack.Screen options={{headerShown: false}} name="TicketScreen" component={TicketScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  
});

export default App;
