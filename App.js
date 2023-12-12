import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import Register from './authentication/Register';
import Login from './authentication/Login';
import ForgotPassword from './authentication/ForgotPassword';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* <Register /> */}
        {/* <Login /> */}
        <ForgotPassword />
        <StatusBar style="auto" />
      </SafeAreaView>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentWeight
  },

});
