import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import Register from './authentication/Register';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Register />
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
