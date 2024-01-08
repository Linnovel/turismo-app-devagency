import { Text, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import React from 'react'
import COLORS from '../styles/colors'
import { Entypo } from '@expo/vector-icons';

export default function RatedOurAppScreen() {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.starContainer}>
                        <Entypo name="star" size={32} color="#FFB84E" />
                        <Entypo name="star" size={32} color="#FFB84E" />
                        <Entypo name="star" size={32} color="#FFB84E" />
                        <Entypo name="star" size={32} color="#FFB84E" />
                        <Entypo name="star" size={32} color="#FFB84E" />
                    </View>
                    <Text style={styles.cardText}>Califica nuestra app</Text>
                    <Text style={styles.agradecimientoText}>Consequat velit qui adipiscing sunt do reprehenderit ad laborum tempor ullamco exercitation. Ullamco tempor adipiscing et volupatate duis sit esse aliqua esse ex dolore esse. Consequact velit qui adipiciving sunt</Text>
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Enviar</Text>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary
    },
    card: {
        width: '343@ms',
        height: '427@vs',
        backgroundColor: '#fff',
        borderRadius: '10@s',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: '0.15@s',
        shadowRadius: '4@s',
        elevation: '5@s',
        paddingTop: '22@s'
    },
    starContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8@vs',
        paddingBottom: '8@s'
    },
    cardText: {
        fontSize: '30@s',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: '8@s'
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
        paddingBottom: '28@vs'
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
})