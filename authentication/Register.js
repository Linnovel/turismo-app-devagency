import { StyleSheet, Text, View, TextInput, Button, } from 'react-native'
import COLORS from '../styles/colors'
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function Register() {
    return (
        <View style={styles.containerStyle}>
            <TextInput style={styles.inputStyle} placeholder='Name' />
            <TextInput style={styles.inputStyle} placeholder='Email' />
            <TextInput style={styles.inputStyle} placeholder='Password' />
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
    },
    inputStyle: {
        height: 40,
        margin: 12,
        padding: 10,
        borderRadius: 1,
        borderWidth: 1
    }

})