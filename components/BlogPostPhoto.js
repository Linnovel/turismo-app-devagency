import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

//pasar pros con titulos y refactorizar las imagenes 

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
        </>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: '52%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 12,
        paddingHorizontal: 12
    },
    image: {
        maxWidth: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 15,
    },
    titleContainer: {
        paddingHorizontal: 12
    },
    titleStyle: {
        fontSize: 26,
        fontWeight: 'bold'
    },
    clientNameContainer: {
        paddingHorizontal: 12
    },
    clientNameStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    descriptionContainer: {
        paddingHorizontal: 12,
        paddingTop: 16
    },
    descriptionStyle: {
        fontSize: 17
    },
})