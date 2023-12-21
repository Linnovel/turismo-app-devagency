import { StyleSheet, Text, View, FlatList, Image, Pressable, Dimensions } from 'react-native'
import COLORS from '../styles/colors'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { hotel } from '../assets/images/hotelimage.jpeg'
import { useNavigation } from '@react-navigation/native';

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

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    containerMainTitle: {
        paddingHorizontal: 18,
        paddingBottom: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    mainTitle: {
        fontSize: 26,
        fontWeight: 'bold'
    },
    contanerImage: {
        width: deviceWidth < 365 ? 150 : 225,
        height: deviceHeight < 365 ? 180 : 230,
        paddingLeft: 30,
        gap: 2,
    },
    subTitleStyle: {
        color: COLORS.primary,
        fontWeight: 'bold'
    },
    imageContainer: {
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: deviceWidth < 365 ? 7 : 18,
        overflow: 'hidden',
        resizeMode: 'cover'
    },
    containerTitleCard: {
        position: 'absolute',
        top: 140,
        left: 32
    },
    ovalContainer: {
        borderRadius: 45,
        backgroundColor: '#4D5652',
        padding: 8,
        margin: 4,
    },
    ovalTextStyle: {
        color: 'white'
    },
    ovalReview: {
        borderRadius: 45,
        margin: 4,
        backgroundColor: '#4D5652',
        width: 64,
        padding: 4
    },
    containerOvalReview: {
        position: 'absolute',
        top: 185,
        left: 16
    },
    circleContainer: {
        flexDirection: 'row',
        borderRadius: 45,
        backgroundColor: '#4D5652',
        padding: 8,
        margin: 6,
        gap: 4
    },
    secondOval: {
        position: 'absolute',
        top: 180,
        left: 32,
    },
    whiteCircle: {
        width: deviceWidth < 360 ? 15 : 30,
        height: deviceHeight < 360 ? 15 : 30,
        borderRadius: 30 / 2,
        backgroundColor: "white",
        padding: 6
    },
    containerFavorite: {
        position: 'absolute',
        right: 20,
        bottom: 12
    }
})