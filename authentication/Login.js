//Login screen
import { useState } from 'react';
import { Text, View, TextInput, Pressable } from 'react-native'
import AuthButton from '../styles/custom buttons/AuthButton'
import COLORS from '../styles/colors';
import { ScaledSheet } from 'react-native-size-matters';


function Login({ navigation }) {
    const [showPassword, setShowPassword] = useState(false)

    function forgotPasswordNavigateHandler() {
        navigation.navigate('ForgotPassword')
    }
    function mainIndexHandler() {
        navigation.navigate('BottomTabNavigatior')
    }

    return (
        <>
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
        </>
    )
}

const styles = ScaledSheet.create({

    inputStyle: {
        height: '50@vs',
        margin: '8@vs',
        padding: '10@s',
        borderRadius: '8@s',
        borderWidth: '3@s',
        borderColor: '#E8E8E8',
        backgroundColor: '#F6F6F6',
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '12@vs',
        flexDirection: 'row'
    },
    titleStyle: {
        fontSize: '30@s',
        fontWeight: 'bold',
    },
    textColor: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: '16@s'
    },
    showPasswordText: {
        position: 'absolute',
        right: '18@vs',
        bottom: '22@vs',
    },
    checkboxStyle: {
        justifyContent: 'flex-start',
        paddingLeft: '14@vs'
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

export default Login;