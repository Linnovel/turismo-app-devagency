import { Text, View, TouchableOpacity } from 'react-native'
import { ScaledSheet } from "react-native-size-matters";
import COLORS from '../styles/colors'

export default function ReserveConfirmationScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.cardText}>Reservar Confirmada</Text>
                <Text style={styles.agradecimientoText}>Gracias por reservar con nosotros, revisa tu bandeja de recibidos para ver los detalles de tu reserva</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Click me</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.secondaryActionContainer}>
                    <Text style={styles.secondaryActionStyle}>
                        Secondary Action
                    </Text>
                </View>
            </View>
        </View>
    )
}
//arreglar card 
const styles = ScaledSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary
    },
    card: {
        width: '343@ms',
        height: '363@vs',
        backgroundColor: '#fff',
        borderRadius: '10@s',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: '0.15@s',
        shadowRadius: '4@s',
        elevation: '5@s',
        paddingTop: '22@s'
    },
    cardText: {
        fontSize: '30@s',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    agradecimientoText: {
        fontSize: '16@s',
        textAlign: 'center',
        margin: '6@s'
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff', // White text
        fontSize: '16@s',
        fontWeight: 'bold',
        paddingTop: '12@s',
        textAlign: 'center'
    },
    secondaryActionContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: '12@s'
    },
    secondaryActionStyle: {
        fontSize: '16@s',
        fontWeight: 'bold',
        color: COLORS.primary
    },
    button: {
        width: '311@ms',
        height: '51@vs',
        backgroundColor: COLORS.primary,
        borderRadius: '100@s',
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
});