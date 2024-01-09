import { Text, View, Image, TouchableOpacity, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../styles/colors';
import EstablishmentDescription from './EstablishmentDescription';
import { ScaledSheet, scale } from 'react-native-size-matters';

export default function EstablishmentPhoto() {
    const navigation = useNavigation()

    function handleEstablishmentScreen() {
        navigation.navigate('BottomTabNavigatior')
    }
    return (
        <>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/images/hotelimage.jpeg')}
                    style={styles.image}
                />
            </View>
            <View style={styles.iconContainer} />
            <Pressable android_ripple={{ color: 'white' }} style={styles.iconStyle} onPress={handleEstablishmentScreen}>
                <MaterialIcons name="keyboard-arrow-left" size={24} color={COLORS.primary} />
            </Pressable>
            <View style={styles.containerFavorite}>
                <View style={styles.whiteCircle}>
                    <Ionicons name="heart" size={23} color={COLORS.primary} style={styles.heartStyle} />
                </View>
            </View>
            <EstablishmentDescription title="Hotel de pruebas" review="4.5(355 Reviews)" />
        </>
    )
}



const styles = ScaledSheet.create({
    imageContainer: {
        paddingTop: '20@s',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: '18@vs'
    },
    image: {
        width: '335@ms',
        height: '340@vs',
        resizeMode: 'cover',
        borderRadius: '15@s',
        alignSelf: 'center'
    },
    iconContainer: {
        backgroundColor: '#fff',
        width: '40@s',
        height: '40@vs',
        borderRadius: '15@s',
        position: 'absolute',
        left: '40@vs',
        top: '36@vs',
        justifyContent: 'center'
    },
    iconStyle: {
        position: 'absolute',
        left: '48@vs',
        top: '44@vs',
    },
    whiteCircle: {
        width: '44@s',
        height: '44@vs',
        borderRadius: scale(44) / 2,
        backgroundColor: "white",
    },
    containerFavorite: {
        position: 'absolute',
        right: '35@s',
        bottom: '310@vs',

    },
    heartStyle: {
        textAlign: 'center',
        paddingVertical: '12@vs'
    }
});