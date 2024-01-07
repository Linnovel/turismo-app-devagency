//register screen
import { useState } from 'react';
import { Text, View, TextInput, Pressable } from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import AuthButton from '../styles/custom buttons/AuthButton'
import COLORS from '../styles/colors';
import { Ionicons } from '@expo/vector-icons';
import { scale, verticalScale, moderateScale, ScaledSheet } from 'react-native-size-matters';


export default function Register({ navigation }) {
    const [showPassword, setShowPassword] = useState(false);
    const navigationHandlers = {
        navigateToLogin: () => navigation.navigate('Login'),
        navigateToForgotPassword: () => navigation.navigate('ForgotPassword'),
        navigateToHomeScreen: () => navigation.navigate('HomeLoginScreen'),
        navigationLoginHandler: () => navigation.navigate('Login')
    };

    return (
        <>
            <View style={styles.titleContainer}>
                <Pressable onPress={navigationHandlers.navigateToHomeScreen}>
                    <Ionicons name="close-sharp" size={22} color='#BDBDBD' />
                </Pressable>
                <Text style={styles.titleStyle}>Registro</Text>
                <Pressable onPress={navigationHandlers.navigateToLogin}>
                    <Text style={styles.loginStyle}>Login</Text>
                </Pressable>
            </View>
            <TextInput style={styles.inputStyle} placeholder='Name' />
            <TextInput style={styles.inputStyle} placeholder='Email' />
            <View>
                <TextInput style={styles.inputStyle} placeholder='Password' secureTextEntry={!showPassword} />
                <Pressable style={styles.showPasswordText} >
                    <Text style={styles.textColor} title={showPassword ? 'Hide Password' : 'Show Password'}
                        onPress={() => setShowPassword(!showPassword)} > Show </Text>
                </Pressable>
            </View>
            <View style={styles.checkboxStyle}>
                <BouncyCheckbox text='Me gustaria recibir emails de la aplicacion' fillColor="#F6F6F6" />
            </View>
            <AuthButton onPress={navigationHandlers.navigationLoginHandler}>
                Registrate
            </AuthButton>
            <Pressable onPress={navigationHandlers.navigateToForgotPassword}>
                <View style={styles.passwordContainer}>
                    <Text style={styles.passwordStyle}>Olvidaste tu password?</Text>
                </View>
            </Pressable>
        </>
    )
}

const styles = ScaledSheet.create({
    titleContainer: {
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: '12@s',
        flexDirection: 'row'
    },
    titleStyle: {
        fontSize: '30@s',
        fontWeight: 'bold',
    },
    loginStyle: {
        color: COLORS.primary,
        fontWeight: 'bold',
        fontSize: '16@s'
    },
    inputStyle: {
        height: '50@vs',
        margin: '12@vs',
        padding: '10@s',
        borderRadius: '8@s',
        borderWidth: '3@s',
        borderColor: '#E8E8E8',
        backgroundColor: '#F6F6F6'
    },
    textColor: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: '16@s'
    },
    showPasswordText: {
        position: 'absolute',
        right: '18@vs',
        bottom: '26@vs',
    },
    checkboxStyle: {
        paddingLeft: '14@s'
    },
    passwordContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    passwordStyle: {
        color: COLORS.primary,
        fontWeight: 'bold',
        fontSize: '16@s'
    },

})