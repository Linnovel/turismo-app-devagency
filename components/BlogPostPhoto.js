import { Text, View, Image } from 'react-native';
import BlogUserComments from './BlogUserComments';
import { ScaledSheet } from 'react-native-size-matters';

export default function BlogPostPhoto() {


    return (
        <>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/images/hotelimage.jpeg')}
                    style={styles.image}
                />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.titleStyle}>Hotel de pruebas</Text>
            </View>
            <View style={styles.clientNameContainer}>
                <Text style={styles.clientNameStyle}>Jose Carlos Salazar</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionStyle}>Enim reprehenderit sun do do. Ex fugiat nisi sit anim culpa nisi. Non labore fugiat culpa magna. Commodo esse Lorem ex duis do et</Text>
            </View>
            <BlogUserComments />
        </>
    )
}

const styles = ScaledSheet.create({
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '20@s',
    },
    image: {
        width: '327@ms',
        height: '270@vs',
        resizeMode: 'cover',
        borderRadius: '20@vs',
    },
    titleContainer: {
        paddingHorizontal: '20@s',
        paddingBottom: '8@vs'
    },
    titleStyle: {
        fontSize: '24@s',
        fontWeight: 'bold'
    },
    clientNameContainer: {
        paddingHorizontal: '20@s',
    },
    clientNameStyle: {
        fontSize: '16@s',
        fontWeight: 'bold'
    },
    descriptionContainer: {
        paddingHorizontal: '20@s',
        paddingTop: '16@s'
    },
    descriptionStyle: {
        fontSize: '16@ms'
    },
})