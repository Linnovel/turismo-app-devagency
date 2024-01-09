import { Text, View, FlatList, Image, Dimensions } from 'react-native'
import COLORS from '../styles/colors'
import { ScaledSheet } from 'react-native-size-matters';

const categoriesHotels = [
    {
        id: 1,
        title: "Hotel Grande",
        image: require('../assets/images/hoteleuropeo.jpg'),
        combo: "4N/5D"
    },
    {
        id: 2,
        title: "Hotel Maldonado",
        image: require('../assets/images/hoteleuropeo.jpg'),
        combo: "2N/3D"
    },
    {
        id: 3,
        title: "Hotel LeGrand",
        image: require('../assets/images/hoteleuropeo.jpg'),
        combo: "2N/1D"
    },
    {
        id: 4,
        title: "Hotel Festivo",
        image: require('../assets/images/hoteleuropeo.jpg'),
        combo: "4N/4D"
    },
    {
        id: 5,
        title: "Hotel McDonald",
        image: require('../assets/images/hoteleuropeo.jpg'),
        combo: "4N/5D"
    },
];

export default function RecommendedSection({ mainTitle }) {

    const renderItem = ({ item }) => {
        return <>
            <View style={styles.cardContainer}>
                <Text>{item.title}</Text>
                <View style={styles.imageContainer}>
                    <Image resizeMode='cover' source={item.image} style={styles.styleImageContainer} />
                </View>
                <View style={styles.ovalCombo}>
                    <Text style={styles.ovalText}>{item.combo}</Text>
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

const styles = ScaledSheet.create({
    container: {
        paddingHorizontal: '18@s',
        paddingTop: '2@ms',
    },
    textContainer: {
        fontSize: '18@s',
        fontWeight: 'bold'
    },
    imageContainer: {
        paddingLeft: '18@s',
        paddingHorizontal: '2@s',
        position: 'absolute',
        top: '2@vs',
        right: '2@vs'
    },
    styleImageContainer: {
        borderRadius: '12@s',
        width: '166@ms',
        height: '102@vs',
        resizeMode: 'cover',
    },
    //contenedor de estilos flatlist
    cardContainer: {
        width: '174@ms',
        height: '144@vs',
        backgroundColor: '#ECF0F5',
        borderRadius: '16@s',
        margin: '8@vs',
        elevation: 2,
        paddingHorizontal: '6@vs',
        paddingTop: '108@vs',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
    },
    ovalCombo: {
        width: '60@ms',
        height: '30@vs',
        borderRadius: '15@s',
        borderWidth: '3@s',
        borderColor: 'white',
        backgroundColor: '#3A5450',
        justifyContent: 'center',
        position: 'absolute',
        right: '16@vs',
        bottom: '32@vs'
    },
    ovalText: {
        color: 'white',
        textAlign: 'center'
    }
})