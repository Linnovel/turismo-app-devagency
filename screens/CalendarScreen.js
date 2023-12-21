import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Calendar } from 'react-native-calendars'
import BottomTabs from '../components/BottomTabs'
import COLORS from '../styles/colors'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



export default function CalendarScreen() {

    const navigation = useNavigation()

    function reservationHandler() {
        navigation.navigate('ReserveConfirmationScreen')
    }


    return (
        <>
            <View>
                <Calendar />
            </View>
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Text>Precio $199</Text>
                    <TouchableOpacity style={styles.button} onPress={reservationHandler} >
                        <Text style={styles.buttonText}>Reservar</Text>
                        <Ionicons style={styles.styleIcon} name="md-arrow-forward-outline" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <BottomTabs />
        </>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 18,
        paddingTop: 310,
    },
    button: {
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
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    styleIcon: {
        alignSelf: 'center'
    }
})