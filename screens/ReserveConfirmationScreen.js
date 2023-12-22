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
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // Fill the entire screen
        justifyContent: 'center', // Center content vertically
        alignItems: 'center', // Center content horizontally
        backgroundColor: COLORS.primary
    },
    card: {
        backgroundColor: '#fff', // White background
        padding: 20, // Add padding
        borderRadius: 10, // Rounded corners
        shadowColor: '#000', // Shadow color
        shadowOffset: { width: 0, height: 2 }, // Shadow offset
        shadowOpacity: 0.15, // Shadow opacity
        shadowRadius: 4, // Shadow blur radius
        elevation: 5, // Android elevation
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
        alignItems: 'center'
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
        color: '#fff', // White text
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    styleIcon: {
        alignSelf: 'center'
    }
});