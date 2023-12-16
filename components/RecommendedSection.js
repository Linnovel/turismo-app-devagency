import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import COLORS from '../styles/colors'
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

export default function RecommendedSection({ mainTitle }) {
    return (
        <View style={styles.container}>
            <Text>{mainTitle}</Text>
            <View style={styles.contanerImage}>
                <Image resizeMode='contain' source={require('../assets/images/hotelimage.jpeg')} style={styles.imageContainer} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    imageContainer: {
        width: 90,
        height: 85,
        borderRadius: 15
    },
})