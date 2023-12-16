import { StyleSheet, Text, View, FlatList, Image, Pressable } from 'react-native'
import COLORS from '../styles/colors'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { hotel } from '../assets/images/hotelimage.jpeg'

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

export default function CardProduct() {
    //renderitem for the flatlist
    const renderItem = ({ item }) => {
        return (
            <>
                <Pressable>
                    <View style={styles.contanerImage}>
                        <Image source={require('../assets/images/hotelimage.jpeg')} style={styles.imageContainer} />
                    </View>
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
                </Pressable>
            </>
        );
    };

    return (
        <>
            <View >
                <View>
                    <Text style={styles.mainTitle}>Popular</Text>
                </View>
                <View style={styles.moreExampleStyle}>
                    <Text style={styles.subTitleStyle}>See all</Text>
                </View>
                <FlatList
                    data={categoriesHotels}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    horizontal
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    mainTitle: {
        fontSize: 26,
        fontWeight: 'bold'
    },
    contanerImage: {
        margin: 10
    },
    moreExampleStyle: {
        position: 'absolute',
        right: 8,
        top: 13,
    },
    subTitleStyle: {
        color: COLORS.primary
    },
    imageContainer: {
        width: 190,
        height: 225,
        borderRadius: 15
    },
    containerTitleCard: {
        position: 'absolute',
        top: 140,
        left: 16
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
        left: 16,
    },
    whiteCircle: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        backgroundColor: "white",
        padding: 6
    },
    containerFavorite: {
        position: 'absolute',
        right: 20,
        bottom: 26
    }
})