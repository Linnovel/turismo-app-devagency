import { StyleSheet, Text, View, Dimensions } from 'react-native'
import COLORS from '../styles/colors'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import ComodidadesIcons from './ComodidadesIcons';

export default function EstablishmentDescription({ title, review }) {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.titleStyle}>{title}</Text>
                <Text style={styles.subtitleStyle}>Mostrar mapa</Text>
            </View>
            <View style={styles.reviewContainer}>
                <FontAwesome name="star" size={16} color="orange" />
                <Text>{review}</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text>Ven a disfrutar en nuestros grandiosos hotel 5 estrellas para todas las edades y con todo incluido.</Text>
            </View>
            <View style={styles.iconContainer}>
                <Text style={styles.seeMoreStyle}>Ver mas</Text>
                <AntDesign name="down" size={18} color={COLORS.primary} />
            </View>
            <View style={styles.comodidadesContainer}>
                <Text style={styles.comidadesStyle}>Comodidades</Text>
            </View>
            <ComodidadesIcons />
        </>
    )
}

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    subtitleStyle: {
        fontSize: 18,
        color: COLORS.primary,
        fontWeight: 'bold',
    },
    reviewContainer: {
        flexDirection: 'row',
        paddingHorizontal: 12,
        gap: 12
    },
    descriptionContainer: {
        paddingHorizontal: 8,
        padding: 2
    },
    iconContainer: {
        flexDirection: 'row',
        padding: 12,
        gap: 9,
    },
    seeMoreStyle: {
        color: COLORS.primary
    },
    comodidadesContainer: {
        paddingHorizontal: 12
    },
    comidadesStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})