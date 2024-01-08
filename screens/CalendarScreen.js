import { Text, View, TouchableOpacity } from "react-native";
import { Calendar, stylesheet } from "react-native-calendars";
import { ScaledSheet } from "react-native-size-matters";
import COLORS from "../styles/colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

//refactorizar y poner valores dinamicos

export default function CalendarScreen() {
    const navigation = useNavigation();
    function reservationHandler() {
        navigation.navigate("PaymentScreen");
    }

    return (
        <>
            <View style={{ flex: 1 }}>
                <Calendar style={styles.calendarStyle}
                    hideArrows={true}
                />
            </View>
            <View style={styles.priceContainer}>
                <Text style={styles.priceStyle}>Precio </Text>
            </View>
            <View style={styles.buttonContainer}>
                <Text style={styles.priceTextStyle}>$199</Text>
                <TouchableOpacity style={styles.button} onPress={reservationHandler}>
                    <Text style={styles.buttonText}>Reservar</Text>
                    <Ionicons
                        style={styles.styleIcon}
                        name="md-arrow-forward-outline"
                        size={24}
                        color="white"
                    />
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = ScaledSheet.create({
    calendarStyle: {
        backgroundColor: COLORS.primary,
        height: "70@vs",
    },
    priceContainer: {
        paddingHorizontal: "20@vs",
        paddingTop: "12@s",
    },
    priceStyle: {
        fontSize: "12@s",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: "18@vs",
        paddingBottom: "16@s",
    },
    priceTextStyle: {
        fontSize: "24@s",
        color: "#2DD7A4",
        fontWeight: "bold",
    },
    button: {
        flexDirection: "row",
        justifyContent: "center",
        gap: "5@vs",
        width: "223@s",
        height: "56@vs",
        backgroundColor: COLORS.primary,
        borderRadius: "15@s",
        ...Platform.select({
            ios: {
                shadowColor: "#000",
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
        color: "#fff",
        fontSize: "18@s",
        fontWeight: "bold",
        flexDirection: "row",
        alignSelf: "center",
    },
    styleIcon: {
        alignSelf: "center",
    },
});
