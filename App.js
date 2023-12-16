import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Register from './authentication/Register';
import Login from './authentication/Login';
import ForgotPassword from './authentication/ForgotPassword';
import MainIndexScreen from './screens/MainIndexScreen';

const Stack = createNativeStackNavigator();

export default function App() {



  return (
    <>
      <SafeAreaView style={styles.containerSafeAreaView}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Register' >
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
            <Stack.Screen name='MainIndexScreen' component={MainIndexScreen} options={({ headerShown: false })} />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      </SafeAreaView>
    </>

  );
}

const styles = StyleSheet.create({
  containerSafeAreaView: {
    flex: 1,
  }
})