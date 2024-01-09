import { Text, View, FlatList, Image, Pressable } from 'react-native'
import COLORS from '../styles/colors'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { hotel } from '../assets/images/hotelimage.jpeg'
import { useNavigation } from '@react-navigation/native';
import { ScaledSheet, scale } from 'react-native-size-matters';

const categoriesHotels = [
    {
        id: 1,
        title: "Hotel Grande",
        image: hotel,
        reviews: 4.1
    },
    {
        id: 2,
        title: "Hotel Maldonado",
        image: hotel,
        reviews: 4.8
    },
    {
        id: 3,
        title: "Hotel LeGrand",
        image: hotel,
        reviews: 4.7
    },
    {
        id: 4,
        title: "Hotel Festivo",
        image: hotel,
        reviews: 3.8
    },
    {
        id: 5,
        title: "Hotel McDonald",
        image: hotel,
        reviews: 4.9
    },
];

export default function CardProduct({ title, seeAll }) {

    const navigation = useNavigation()

    function handleEstablishmentScreen() {
        navigation.navigate('EstablishmentScreen')
    }

    //renderitem for the flatlist
    const renderItem = ({ item }) => {
        return (
            <>
                <Pressable onPress={handleEstablishmentScreen}>
                    <View style={styles.contanerImage}>
                        <Image source={require('../assets/images/hotelimage.jpeg')} style={styles.imageContainer} />
                    </View>
                </Pressable>
                <View style={styles.containerTitleCard}>
                    <View style={styles.ovalContainer}>
                        <Text style={styles.ovalTextStyle}>{item.title}</Text>
                    </View>
                </View>
                <View style={styles.secondOval}>
                    <View style={styles.circleContainer}>
                        <AntDesign name="star" size={16} color="yellow" />
                        <Text style={styles.ovalTextStyle}>{item.reviews}</Text>
                    </View>
                </View>
                <View style={styles.containerFavorite}>
                    <View style={styles.whiteCircle}>
                        <Ionicons name="heart" size={16} color={COLORS.primary} />
                    </View>
                </View>
            </>
        );
    };

    return (
        <>
            <View style={styles.containerMainTitle}>
                <Text style={styles.mainTitle}>{title}</Text>
                <Text style={styles.subTitleStyle}>{seeAll}</Text>
            </View>
            <FlatList
                data={categoriesHotels}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                horizontal
            />
        </>
    )
}



const styles = ScaledSheet.create({
    containerMainTitle: {
        paddingHorizontal: '18@s',
        paddingBottom: '10@s',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    mainTitle: {
        fontSize: '18@s',
        fontWeight: 'bold'
    },
    contanerImage: {
        paddingLeft: '25@vs',
    },
    subTitleStyle: {
        color: COLORS.primary,
        fontWeight: 'bold'
    },
    imageContainer: {
        width: '188@ms',
        height: '230@vs',
        borderRadius: '18@ms',
        overflow: 'hidden',
        resizeMode: 'cover'
    },
    containerTitleCard: {
        position: 'absolute',
        top: '140@vs',
        left: '32@vs'
    },
    ovalContainer: {
        borderRadius: '45@s',
        backgroundColor: '#4D5652',
        padding: '8@vs',
    },
    ovalTextStyle: {
        color: 'white'
    },
    circleContainer: {
        flexDirection: 'row',
        borderRadius: '45@s',
        backgroundColor: '#4D5652',
        padding: '8@s',
        margin: '6@vs',
        gap: '2@vs'
    },
    secondOval: {
        position: 'absolute',
        top: '175@vs',
        left: '28@vs',
    },
    whiteCircle: {
        width: '28@ms',
        height: '28@vs',
        borderRadius: scale(30) / 2,
        backgroundColor: "white",
        padding: '6@s'
    },
    containerFavorite: {
        position: 'absolute',
        right: '20@vs',
        bottom: '16@vs'
    }
})