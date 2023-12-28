import { StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native'
import COLORS from '../styles/colors'
import { useNavigation } from '@react-navigation/native';


export default function HomeLoginScreen() {
    const navigation = useNavigation()
    function loginButtonApp() {
        navigation.navigate('Register')
    }
    return (
        <>
            <ImageBackground style={styles.imageBackgroundContainer} source={require('../assets/images/imageplaya.jpg')}>
                <Text style={styles.loginTextStyle}>Turismo App</Text>
                <Text style={styles.subTitleStyle}>
                    Planea tus proximas vacaiones
                </Text>
                <TouchableOpacity style={styles.buttonContainer} onPress={loginButtonApp}>
                    <Text style={styles.textStyle}>Login</Text>
                </TouchableOpacity>
            </ImageBackground>
        </>

    )
}

const styles = StyleSheet.create({
    imageBackgroundContainer: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center'
    },
    subTitleStyle: {
        fontSize: 34,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    loginTextStyle: {
        fontSize: 38,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    buttonContainer: {
        width: 255,
        height: 50,
        borderRadius: 15,
        backgroundColor: COLORS.primary,
        justifyContent: 'center'
    },
    textStyle: {
        color: 'white',
        fontSize: 18,
        alignSelf: 'center',
    }
})