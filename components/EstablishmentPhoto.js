import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../styles/colors';
import EstablishmentDescription from './EstablishmentDescription';

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
                    <Ionicons name="heart" size={24} color={COLORS.primary} style={styles.heartStyle} />
                </View>
            </View>
            <EstablishmentDescription title="Hotel de pruebas" review="4.5(355 Reviews)" />
        </>
    )
}

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    imageContainer: {
        width: deviceWidth < 375 ? 245 : 365,
        height: deviceHeight < 375 ? 240 : 365,
        paddingTop: deviceWidth < 375 ? 8 : 20,
        paddingLeft: 10,
        paddingHorizontal: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        maxWidth: '95%',
        height: '95%',
        resizeMode: 'cover',
        borderRadius: 15,
        alignSelf: 'center'
    },
    iconContainer: {
        backgroundColor: '#fff',
        width: 40,
        height: 40,
        borderRadius: 15,
        position: 'absolute',
        left: 40,
        top: 36
    },
    iconStyle: {
        position: 'absolute',
        left: 48,
        top: 44,
    },
    whiteCircle: {
        width: deviceWidth < 375 ? 15 : 35,
        height: deviceHeight < 375 ? 15 : 35,
        borderRadius: 35 / 2,
        backgroundColor: "white",
    },
    containerFavorite: {
        position: 'absolute',
        right: deviceWidth < 375 ? 15 : 35,
        bottom: deviceHeight < 375 ? 145 : 310,

    },
    heartStyle: {
        textAlign: 'center',
        paddingVertical: 5
    }
});