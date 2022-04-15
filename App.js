import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Confetti from './screens/Confetti';
import {NavigationContainer} from "@react-navigation/native"
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./redux/reducers";
const Stack = createStackNavigator();

const store = configureStore({
  reducer:rootReducer
})
export default function App() {

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen options={{
            headerShown:false
          }}  name='Home' component={Home}/>
          <Stack.Screen name="Confetti" component={Confetti} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
