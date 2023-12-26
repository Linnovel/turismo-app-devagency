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
                    <Ionicons name="heart" size={24} color={COLORS.primary} />
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
        width: deviceWidth < 365 ? '85%' : 395,
        height: deviceHeight < 365 ? '50%' : 395,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 12,
        paddingHorizontal: 12
    },
    image: {
        maxWidth: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 15,
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
        top: 44
    },
    whiteCircle: {
        width: deviceWidth < 360 ? 15 : 35,
        height: deviceHeight < 360 ? 15 : 35,
        borderRadius: 35 / 2,
        backgroundColor: "white",
        padding: 6
    },
    containerFavorite: {
        position: 'absolute',
        right: 35,
        bottom: 285
    }
});