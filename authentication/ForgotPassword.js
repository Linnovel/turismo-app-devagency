//ForgotPassWord screen
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import COLORS from '../styles/colors';
import AuthButton from '../styles/custom buttons/AuthButton';
import { ScaledSheet } from 'react-native-size-matters';


function ForgotPassword() {

    return (
        <>
            <View style={styles.titleContainer}>
                <Text style={styles.titleStyle}>Olvide mi password</Text>
            </View>
            <TextInput style={styles.inputStyle} placeholder='Email' />
            <AuthButton>
                Enviar
            </AuthButton>
            <Pressable >
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
        margin: '12@vs',
        padding: '10@s',
        borderRadius: '8@s',
        borderWidth: '2@s',
        borderColor: '#F0F0F0',
        backgroundColor: '#F6F6F6'
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '16@s',
        flexDirection: 'row'
    },
    titleStyle: {
        fontSize: '30@s',
        fontWeight: 'bold',
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

export default ForgotPassword;