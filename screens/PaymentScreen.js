import { Text, View, TextInput, Pressable, Platform, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';
import { ScaledSheet } from "react-native-size-matters";
import COLORS from "../styles/colors";


export default function PaymentScreen() {
    const navigation = useNavigation();
    function handlePayment() {
        navigation.navigate('ReserveConfirmationScreen')
    }
    function goBackHandle() {
        navigation.navigate('CalendarScreen')
    }
    return (
        <>
            <View style={styles.titleContainer}>
                <Pressable onPress={goBackHandle} >
                    <MaterialIcons name="keyboard-arrow-left" size={24} color='black' />
                </Pressable>
                <Text style={styles.titleStyle}>Credit / Debit Card</Text>
            </View>
            <View style={styles.cardContainer}>
                <View style={styles.cardImage}>
                    <Text style={styles.cardTitle}>Alexandra Smith</Text>
                </View>
            </View>
            <View style={styles.nameCardContainer}>
                <Text>Name of Card</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputStyle} placeholder="Alexandra Smith" />
            </View>
            <View style={styles.nameCardContainer}>
                <Text>Card number</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputStyle} placeholder="47 47 47 47 47 47" />
            </View>
            <View style={styles.bottomCardText}>
                <Text>Expiry Date</Text>
                <Text>CVC</Text>
            </View>
            <View style={styles.bottomInputContainer}>
                <TextInput style={styles.inputBottomStyle} placeholder="07/21" />
                <TextInput style={styles.secondInputBottomStyle} placeholder="474" />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handlePayment} >
                    <Text style={styles.buttonText}>Pagar</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

//refactorizar y hacer custom inputs para esta seccion 
const styles = ScaledSheet.create({
    titleContainer: {
        justifyContent: "flex-start",
        paddingHorizontal: '8@s',
        padding: '42@s',
    },
    titleStyle: {
        fontSize: '28@s',
    },
    cardContainer: {
        backgroundColor: "#AB99D7",
        borderWidth: '1@s',
        borderColor: "#E2DBEA",
        borderRadius: '10@s',
        padding: '15@s',
        margin: '5@vs'
    },
    cardImage: {
        width: '100@s',
        height: '150@vs',
        flexWrap: "wrap",
        margin: '5@vs'
    },
    cardTitle: {
        fontSize: '22@s',
        color: 'white'
    },
    nameCardContainer: {
        paddingHorizontal: '18@s',
        paddingTop: '2@s',
    },
    inputContainer: {
        paddingHorizontal: '6@s'
    },
    inputStyle: {
        width: '335@s',
        height: '48@vs',
        paddingHorizontal: '18@s',
        borderRadius: '8@s',
        borderWidth: '2@s',
        borderColor: "#E7E2EC",
        backgroundColor: '#ffff',
        fontSize: '18@s',
        fontWeight: "bold",
    },
    bottomInputContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingHorizontal: '8@vs',
    },
    bottomCardText: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: '18@vs',
        paddingBottom: '4@s'
    },
    inputBottomStyle: {
        width: '176@s',
        height: '48@vs',
        padding: '10@s',
        borderRadius: '8@s',
        borderWidth: '2@s',
        borderColor: "#D9D0E3",
        backgroundColor: "#ffff",
        fontSize: '17@s',
        paddingHorizontal: '18@s'
    },
    secondInputBottomStyle: {
        width: '120@s',
        height: '48@vs',
        padding: '5@s',
        borderRadius: '8@s',
        borderWidth: '2@s',
        borderColor: "#D9D0E3",
        backgroundColor: "#ffff",
        fontSize: '17@s',
        paddingHorizontal: '18@s'
    },
    //button
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '16@s'
    },
    button: {
        justifyContent: 'center',
        width: '335@s',
        height: '56@vs',
        backgroundColor: COLORS.primary,
        borderRadius: '8@s',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android: {
                elevation: 9,
            },
        }),
    },
    buttonText: {
        color: '#fff',
        fontSize: '15@s',
        fontWeight: 'bold',
        flexDirection: 'row',
        alignSelf: 'center'
    },
});
