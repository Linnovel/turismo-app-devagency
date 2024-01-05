import { StyleSheet, Text, ImageBackground, TouchableOpacity, View } from 'react-native'
import COLORS from '../styles/colors'
import { useNavigation } from '@react-navigation/native';
import { scale, verticalScale, moderateScale, ScaledSheet } from 'react-native-size-matters';

export default function HomeLoginScreen() {
    const navigation = useNavigation()
    function loginButtonApp() {
        navigation.navigate('Register')
    }
    return (
        <>
            <ImageBackground style={styles.imageBackgroundContainer} source={require('../assets/images/imageplaya.jpg')}>
                <View style={styles.titleContainer}>
                    <Text style={styles.loginTextStyle}>TURISMO APP</Text>
                </View>
                <View style={styles.subtitleContainer}>
                    <Text style={styles.subTitleStyle}>
                        Planea tus
                        proximas vacaiones
                    </Text>
                    <TouchableOpacity style={styles.buttonContainer} onPress={loginButtonApp}>
                        <Text style={styles.textStyle}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </>
    )
}

const styles = ScaledSheet.create({
    imageBackgroundContainer: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleContainer: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subtitleContainer: {
        flex: 0.5,
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        paddingHorizontal: '42@vs'
    },
    loginTextStyle: {
        fontSize: '38@s',
        fontWeight: 'bold',
        color: '#ffff',
    },
    subTitleStyle: {
        fontSize: '39@s',
        color: 'white',
        textAlign: 'left',
        fontWeight: 'bold',
    },
    buttonContainer: {
        width: '280@ms',
        height: '50@vs',
        borderRadius: '25@s',
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
    },
    textStyle: {
        color: 'white',
        fontSize: '18@ms',
        alignSelf: 'center',
    }
})