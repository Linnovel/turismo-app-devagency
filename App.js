import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Register from './authentication/Register';
import Login from './authentication/Login';
import ForgotPassword from './authentication/ForgotPassword';
import MainIndexScreen from './screens/MainIndexScreen';
import EstablishmentScreen from './screens/EstablishmentScreen'
import CardProduct from './components/CardProduct';
import BlogPost from './screens/BlogPost';
import CalendarScreen from './screens/CalendarScreen';
import ReserveConfirmationScreen from './screens/ReserveConfirmationScreen';

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
            <Stack.Screen name='CardProduct' component={CardProduct} options={({ headerShown: false })} />
            <Stack.Screen name='EstablishmentScreen' component={EstablishmentScreen} options={({ headerShown: false })} />
            <Stack.Screen name='BlogPost' component={BlogPost} options={({ headerShown: false })} />
            <Stack.Screen name='CalendarScreen' component={CalendarScreen} options={({ headerShown: false })} />
            <Stack.Screen name='ReserveConfirmationScreen' component={ReserveConfirmationScreen} options={({ headerShown: false })} />
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