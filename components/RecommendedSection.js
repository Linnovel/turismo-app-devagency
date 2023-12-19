import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import COLORS from '../styles/colors'

const categoriesHotels = [
    {
        id: 1,
        title: "Hotel Grande",
        image: require('../assets/images/europa.jpeg'),
        reviews: 4.1
    },
    {
        id: 2,
        title: "Hotel Maldonado",
        image: require('../assets/images/europa.jpeg'),
        reviews: 4.8
    },
    {
        id: 3,
        title: "Hotel LeGrand",
        image: require('../assets/images/europa.jpeg'),
        reviews: 4.7
    },
    {
        id: 4,
        title: "Hotel Festivo",
        image: require('../assets/images/europa.jpeg'),
        reviews: 3.8
    },
    {
        id: 5,
        title: "Hotel McDonald",
        image: require('../assets/images/europa.jpeg'),
        reviews: 4.9
    },
];

export default function RecommendedSection({ mainTitle }) {

    const renderItem = ({ item }) => {
        return <>
            <View >
                <View style={styles.cardConatiner}>
                    <View style={styles.cardDesign}>
                        <Text style={styles.styleTitleCard}>{item.title}</Text>
                    </View>
                </View>
                <View style={styles.imageContainer}>
                    <Image resizeMode='contain' source={item.image} style={styles.styleImageContainer} />
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

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
    },
    cardConatiner: {
        position: 'absolute',
        right: 2,
    }
    ,
    cardDesign: {
        width: 195,
        height: 155,
        backgroundColor: '#ECF1F6',
        zIndex: 0,
        borderRadius: 15,
        elevation: 1,
        paddingTop: 125,
    },
    styleTitleCard: {
        paddingHorizontal: 8,
        fontSize: 16
    },
    textContainer: {
        fontSize: 26,
        fontWeight: 'bold'
    },
    imageContainer: {
        paddingLeft: 18,
        margin: 4

    },
    styleImageContainer: {
        width: 190,
        height: 120,
        borderRadius: 15,
        zIndex: 1
    },

})