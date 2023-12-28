import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Pressable } from 'react-native'
import COLORS from '../styles/colors'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

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
                        <AntDesign style={styles.iconStyle} name="wifi" size={34} color="gray" />
                    </Pressable>
                </View>
                <View style={styles.squareContainer}>
                    <Ionicons style={styles.iconStyle} name="ios-fast-food-outline" size={34} color="gray" />
                </View>
                <View style={styles.squareContainer}>
                    <Ionicons style={styles.iconStyle} name="american-football-outline" size={34} color="gray" />
                </View>
                <View style={styles.squareContainer}>
                    <Ionicons style={styles.iconStyle} name="bed-outline" size={34} color="gray" />
                </View>
            </View>
            <View style={styles.priceContainer}>
                <Text>
                    price
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <Text style={styles.priceTextStyle}>$199</Text>
                <TouchableOpacity style={styles.button} onPress={handleCalendarScreen} >
                    <Text style={styles.buttonText}>Reservar</Text>
                    <Ionicons style={styles.styleIcon} name="md-arrow-forward-outline" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </>
    )
}

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    squareContainer: {
        width: deviceWidth < 365 ? 62 : 75,
        height: deviceHeight < 365 ? 62 : 75,
        borderRadius: 13,
        backgroundColor: '#F6F2F5',
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
    },
    iconStyle: {
        alignSelf: 'center',
        paddingTop: 20
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: deviceWidth < 375 ? 8 : 16,
        paddingTop: deviceWidth < 375 ? 7 : 10,
    },
    priceContainer: {
        position: 'absolute',
        bottom: 38,
        paddingHorizontal: 29
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
        fontSize: 16,
        fontWeight: 'bold',
        flexDirection: 'row',
        alignSelf: 'center',
    },
    styleIcon: {
        alignSelf: 'center'
    }
})