//ForgotPassWord screen
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import AuthButton from '../styles/custom buttons/AuthButton'
import COLORS from '../styles/colors';


function ForgotPassword() {

    return (
        <View style={styles.containerStyle}>
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