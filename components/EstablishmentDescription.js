import { Text, View } from 'react-native'
import COLORS from '../styles/colors'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { ScaledSheet } from 'react-native-size-matters';

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



const styles = ScaledSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '18@s',
        paddingTop: '18@s',
        alignItems: 'center'
    },
    titleStyle: {
        fontSize: '22@s',
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    subtitleStyle: {
        fontSize: '18@s',
        color: COLORS.primary,
        fontWeight: 'bold',
    },
    reviewContainer: {
        flexDirection: 'row',
        paddingHorizontal: '22@vs',
        gap: '8@vs'
    },
    descriptionContainer: {
        paddingHorizontal: '18@s',
        paddingTop: '8@s'
    },
    iconContainer: {
        flexDirection: 'row',
        paddingHorizontal: '18@s',
        paddingTop: '8@s',
        gap: '9@vs',
    },
    seeMoreStyle: {
        color: COLORS.primary
    },
    comodidadesContainer: {
        paddingHorizontal: '18@s'
    },
    comidadesStyle: {
        fontSize: '18@s',
        fontWeight: 'bold'
    }
})