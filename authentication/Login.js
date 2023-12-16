//Login screen
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import AuthButton from '../styles/custom buttons/AuthButton'
import COLORS from '../styles/colors';


function Login({ navigation }) {
    const [showPassword, setShowPassword] = useState(false)

    function forgotPasswordNavigateHandler() {
        navigation.navigate('ForgotPassword')
    }
    function mainIndexHandler() {
        navigation.navigate('MainIndexScreen')
    }

    return (
        <View style={styles.containerStyle}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleStyle}>Login</Text>
            </View>

            <TextInput style={styles.inputStyle} placeholder='Email' />
            <View>
                <TextInput style={styles.inputStyle} placeholder='Password' secureTextEntry={!showPassword} />
                <Pressable style={styles.showPasswordText} >
                    <Text style={styles.textColor} title={showPassword ? 'Hide Password' : 'Show Password'}
                        onPress={() => setShowPassword(!showPassword)} > Show </Text>
                </Pressable>
            </View>
            <AuthButton onPress={mainIndexHandler}>
                Login
            </AuthButton>
            <Pressable onPress={forgotPasswordNavigateHandler}>
                <View style={styles.passwordContainer}>
                    <Text style={styles.passwordStyle}>Olvidaste tu password?</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
    },
    inputStyle: {
        height: 50,
        margin: 12,
        padding: 10,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#F0F0F0',
        backgroundColor: '#F6F6F6'
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 12,
        flexDirection: 'row'
    },
    titleStyle: {
        fontSize: 36,
        fontWeight: 'bold',
    },
    textColor: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 18
    },
    showPasswordText: {
        position: 'absolute',
        right: 18,
        bottom: 26,
    },
    checkboxStyle: {
        justifyContent: 'flex-start',
        paddingLeft: 14
    },
    passwordContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    passwordStyle: {
        color: COLORS.primary,
        fontWeight: 'bold'
    },


})

export default Login;