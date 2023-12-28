import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Calendar } from 'react-native-calendars'
import COLORS from '../styles/colors'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

//refactorizar y poner valores dinamicos

export default function CalendarScreen() {
    const navigation = useNavigation()
    function reservationHandler() {
        navigation.navigate('PaymentScreen')
    }

    return (
        <>
            <View>
                <Calendar />
            </View>
            <View style={styles.priceContainer}>
                <Text>Precio </Text>
            </View>
            <View style={styles.buttonContainer}>
                <Text style={styles.priceTextStyle}>$199</Text>
                <TouchableOpacity style={styles.button} onPress={reservationHandler} >
                    <Text style={styles.buttonText}>Reservar</Text>
                    <Ionicons style={styles.styleIcon} name="md-arrow-forward-outline" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 18,
    },
    priceContainer: {
        paddingHorizontal: 20,
        paddingTop: 8
    },
    priceTextStyle: {
        fontSize: 28,
        color: '#2DD7A4',
        fontWeight: 'bold'
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 5,
        width: 235,
        height: 50,
        backgroundColor: COLORS.primary,
        borderRadius: 15,
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
        fontSize: 18,
        fontWeight: 'bold',
        flexDirection: 'row',
        alignSelf: 'center'
    },
    styleIcon: {
        alignSelf: 'center'
    }
})