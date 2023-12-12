import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import COLORS from '../../styles/colors'

function AuthButton({ children }) {

    return (
        <TouchableOpacity >
            <View style={styles.container}>
                <Text style={styles.buttonContainer}>{children}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primary,
        borderRadius: 30,
        padding: 22,
        paddingHorizontal: 16,
        elevation: 2,
        margin: 4,
    },
    buttonContainer: {
        color: 'white',
        textAlign: 'center'
    }
})

export default AuthButton;