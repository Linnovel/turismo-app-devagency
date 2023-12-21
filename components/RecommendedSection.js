import { StyleSheet, Text, View, FlatList, Image, Dimensions, Platform } from 'react-native'
import COLORS from '../styles/colors'

const categoriesHotels = [
    {
        id: 1,
        title: "Hotel Grande",
        image: require('../assets/images/hoteleuropeo.jpg'),
        reviews: 4.1
    },
    {
        id: 2,
        title: "Hotel Maldonado",
        image: require('../assets/images/hoteleuropeo.jpg'),
        reviews: 4.8
    },
    {
        id: 3,
        title: "Hotel LeGrand",
        image: require('../assets/images/hoteleuropeo.jpg'),
        reviews: 4.7
    },
    {
        id: 4,
        title: "Hotel Festivo",
        image: require('../assets/images/hoteleuropeo.jpg'),
        reviews: 3.8
    },
    {
        id: 5,
        title: "Hotel McDonald",
        image: require('../assets/images/hoteleuropeo.jpg'),
        reviews: 4.9
    },
];

export default function RecommendedSection({ mainTitle }) {

    const renderItem = ({ item }) => {
        return <>
            <View >
                <View style={styles.cardContainer}>
                    <View style={styles.styleCard} >
                        <Text>{item.title}</Text>
                    </View>

                </View>
                <View style={styles.imageContainer}>
                    <Image resizeMode='cover' source={item.image} style={styles.styleImageContainer} />
                </View>
            </View>
        </>
    }



    return (
        <>
            <View style={styles.container}>
                <Text style={styles.textContainer}>{mainTitle}</Text>
            </View>
            <FlatList data={categoriesHotels}
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
    container: {
        paddingHorizontal: deviceWidth < 375 ? 12 : 18,
        paddingTop: deviceWidth < 375 ? 3 : 6,
        paddingBottom: deviceWidth < 375 ? 3 : 6,
    },
    textContainer: {
        fontSize: deviceWidth < 375 ? 12 : 24,
        fontWeight: 'bold'
    },
    imageContainer: {
        paddingLeft: deviceWidth < 375 ? 12 : 18,
        width: deviceWidth < 375 ? 60 : 200,
        height: deviceHeight < 375 ? 50 : 100,
        paddingHorizontal: 2,
        position: 'absolute',
        top: 10,
        right: 10
    },
    styleImageContainer: {
        borderRadius: deviceWidth < 375 ? 7 : 15,
        maxWidth: '100%',
        height: '100%',
        resizeMode: 'cover',
    },

    cardContainer: {
        width: deviceWidth < 375 ? 60 : 190,
        height: deviceHeight < 375 ? 50 : 145,
        backgroundColor: '#EEF2F7',
        borderRadius: 15,
        margin: 5,
        elevation: 1,
        paddingHorizontal: 8,
        paddingTop: 115,
        shadowColor: '#000', // Shadow color
        shadowOffset: { width: 0, height: 2 }, // Horizontal and vertical offset
        shadowOpacity: 0.4, // Shadow opacity (0-1)
        shadowRadius: 2, // Shadow blur radius

    },
    styleCard: {
        maxWidth: '100%',
        maxHeight: '100%',
        paddingHorizontal: 8
    }
})