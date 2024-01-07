import { Text, View, Dimensions, TouchableOpacity, Pressable } from 'react-native'
import COLORS from '../styles/colors'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ScaledSheet } from 'react-native-size-matters';

export default function ComodidadesIcons() {
    const navigation = useNavigation()

    function handleEstablishmentScreen() {
        navigation.navigate('BlogPost')
    }

    function handleCalendarScreen() {
        navigation.navigate('CalendarScreen')
    }
    return (
        <>
            <View style={styles.iconContainer}>
                <View style={styles.squareContainer}>
                    <Pressable onPress={handleEstablishmentScreen}>
                        <AntDesign style={styles.iconStyle} name="wifi" size={34} color="#B8B8B8" />
                        <Text style={styles.nameIconDescription}>1 Heater</Text>
                    </Pressable>
                </View>
                <View style={styles.squareContainer}>
                    <Ionicons style={styles.iconStyle} name="ios-fast-food-outline" size={34} color="#B8B8B8" />
                    <Text style={styles.nameIconDescription}>Dinner</Text>
                </View>
                <View style={styles.squareContainer}>
                    <Ionicons style={styles.iconStyle} name="american-football-outline" size={34} color="#B8B8B8" />
                    <Text style={styles.nameIconDescription}>1 Tub</Text>
                </View>
                <View style={styles.squareContainer}>
                    <Ionicons style={styles.iconStyle} name="bed-outline" size={34} color="#B8B8B8" />
                    <Text style={styles.nameIconDescription}>Pool </Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.priceContainer}>
                    <Text style={styles.priceStyle}>
                        price
                    </Text>
                </View>
                <Text style={styles.priceTextStyle}>$199</Text>
                <TouchableOpacity style={styles.button} onPress={handleCalendarScreen} >
                    <Text style={styles.buttonText}>Reservar</Text>
                    <Ionicons style={styles.styleIcon} name="md-arrow-forward-outline" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = ScaledSheet.create({
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    squareContainer: {
        width: '74@ms',
        height: '75@vs',
        borderRadius: '13@s',
        backgroundColor: '#F6F2F5',
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: '0@s', height: '2@vs' },
        shadowOpacity: '0.4@s',
        shadowRadius: '4@s',
    },
    iconStyle: {
        alignSelf: 'center',
        paddingTop: 20
    },
    nameIconDescription: {
        alignSelf: 'center',
        color: '#D7D5D6'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingHorizontal: '16@s',
        paddingTop: '10@s',
    },
    priceContainer: {
        position: 'absolute',
        bottom: '48@vs',
        paddingHorizontal: '29@s'
    },
    priceStyle: {
        fontSize: '12@s'
    },
    priceTextStyle: {
        fontSize: '28@s',
        color: '#2DD7A4',
        fontWeight: 'bold'
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: '8@vs',
        width: '223@s',
        height: '56@vs',
        backgroundColor: COLORS.primary,
        borderRadius: '16@s',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    buttonText: {
        color: '#fff',
        fontSize: '16@s',
        fontWeight: 'bold',
        flexDirection: 'row',
        alignSelf: 'center',
    },
    styleIcon: {
        alignSelf: 'center'
    }
})