import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AuthButton from "../styles/custom buttons/AuthButton";
import { MaterialIcons } from '@expo/vector-icons';


export default function PaymentScreen() {
    const navigation = useNavigation();
    function handlePayment() {
        navigation.navigate('ReserveConfirmationScreen')
    }
    function goBackHandle() {
        navigation.navigate('CalendarScreen')
    }
    //hacer icono de regreso
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
            <View>
                <TextInput style={styles.inputStyle} placeholder="Alexandra Smith" />
            </View>
            <View style={styles.nameCardContainer}>
                <Text>Card number</Text>
            </View>
            <View>
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
            <AuthButton onPress={handlePayment} >
                <Text>Pagar</Text>
            </AuthButton>
        </>
    );
}

//refactorizar y hacer custom inputs para esta seccion 
const styles = StyleSheet.create({
    titleContainer: {
        justifyContent: "flex-start",
        paddingHorizontal: 8,
        padding: 42,
    },
    titleStyle: {
        fontSize: 28,
    },
    cardContainer: {
        backgroundColor: "#AB99D7",
        borderWidth: 1,
        borderColor: "#E2DBEA",
        borderRadius: 15,
        padding: 15,
        marginBottom: 10,
        margin: 5,
    },
    cardImage: {
        width: 100,
        height: 150,
        borderRadius: 5,
        marginBottom: 10,
        flexWrap: "wrap",
    },
    cardTitle: {
        fontSize: 22,
    },
    nameCardContainer: {
        paddingHorizontal: 8,
    },
    inputStyle: {
        height: 50,
        margin: 12,
        padding: 10,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: "#F0F0F0",
        backgroundColor: "#f6f6f6",
        fontSize: 18,
        fontWeight: "bold",
    },
    bottomInputContainer: {
        flexDirection: "row",
    },
    bottomCardText: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 12,
    },
    inputBottomStyle: {
        height: 55,
        width: "55%",
        margin: 12,
        padding: 10,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: "#F0F0F0",
        backgroundColor: "#f6f6f6",
    },
    secondInputBottomStyle: {
        height: 55,
        width: "33%",
        margin: 12,
        padding: 5,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: "#f0f0f0",
        backgroundColor: "#f6f6f6",
    },
});
