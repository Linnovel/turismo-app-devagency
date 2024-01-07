//CustomButton
import { StyleSheet, View, Text, Pressable } from 'react-native'
import COLORS from '../../styles/colors'
import { scale, verticalScale, moderateScale, ScaledSheet } from 'react-native-size-matters';


function AuthButton({ children, onPress, }) {

    return (
        <View style={styles.button}>
            <Pressable onPress={onPress} >
                <View style={styles.container}>
                    <Text style={styles.buttonContainer}>{children}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = ScaledSheet.create({
    button: {
        alignItems: 'center'
    },
    container: {
        backgroundColor: COLORS.primary,
        borderRadius: '30@s',
        width: '343@ms',
        height: '51@vs',
        justifyContent: 'center',
    },
    buttonContainer: {
        color: 'white',
        textAlign: 'center',
        fontSize: '16@s'
    }
})

export default AuthButton;