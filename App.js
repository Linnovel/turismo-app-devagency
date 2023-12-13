import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Register from './authentication/Register';
import Login from './authentication/Login';
import ForgotPassword from './authentication/ForgotPassword';

export default function App() {
  return (
    <>
      <NavigationContainer>
        {/* <Register /> */}
        {/* <Login /> */}
        <ForgotPassword />
        <StatusBar style="auto" />
      </NavigationContainer>
    </>

  );
}

