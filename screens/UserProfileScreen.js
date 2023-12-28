import { StyleSheet, Text, View, Image } from 'react-native'
import COLORS from '../styles/colors'

export default function UserProfileScreen() {
    return (
        <>
            <View style={styles.titleContainer}>
                <Text style={styles.configuartionTitleStyle}>Configuracion</Text>
                <Text style={styles.perfilTitleStyle}>Perfil</Text>
                <Text style={styles.logoutTitleStyle}>Logout</Text>
            </View>
            <View style={styles.circleContainer}>
                <Image style={styles.circleImage} source={{ uri: 'https://images.pexels.com/photos/910143/pexels-photo-910143.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} />
                <Text style={styles.subTitleTextStyle}>Jose Perez</Text>
                <Text>texto dummm</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        backgroundColor: COLORS.primary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    configuartionTitleStyle: {
        color: 'white'
    },
    perfilTitleStyle: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold'
    },
    logoutTitleStyle: {
        color: 'white'
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    subTitleTextStyle: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    circleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleImage: {
        width: 200,
        height: 200,
        borderRadius: 200 / 2
    },
})