import { StyleSheet, Text, View, Dimensions, Button, TouchableOpacity, Pressable } from 'react-native'
import COLORS from '../styles/colors'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import AuthButton from '../styles/custom buttons/AuthButton';
import { useNavigation } from '@react-navigation/native';
import BlogPost from '../screens/BlogPost';

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
            <View style={styles.buttonContainer}>
                <Text>Precio $199</Text>
                <TouchableOpacity style={styles.button} onPress={handleCalendarScreen} >
                    <Text style={styles.buttonText}>Reservar</Text>
                    <Ionicons style={styles.styleIcon} name="md-arrow-forward-outline" size={24} color="black" />
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
        justifyContent: 'flex-end',
        paddingRight: 18,
        paddingTop: 16
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
})