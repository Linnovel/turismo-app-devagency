import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import COLORS from '../styles/colors'

export default function ReserveConfirmationScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.cardText}>Reservar Confirmada</Text>
                <Text style={styles.agradecimientoText}>Gracias por reservar con nosotros, revisa tu bandeja de recibidos para ver los detalles de tu reserva</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}  >
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
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary
    },
    card: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 5,
    },
    cardText: {
        fontSize: 26,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    agradecimientoText: {
        fontSize: 18,
        textAlign: 'center'
    },
    buttonContainer: {
        paddingRight: 18,
        paddingTop: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff', // White text
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center',
        padding: 12
    },
    secondaryActionContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8
    },
    secondaryActionStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.primary
    },
    button: {
        width: 285,
        height: 50,
        backgroundColor: COLORS.primary,
        borderRadius: 25,
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