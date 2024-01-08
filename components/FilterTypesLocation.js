import { FlatList, Pressable, Text, View, TouchableOpacity } from 'react-native'
import COLORS from '../styles/colors'
import { ScaledSheet, scale } from 'react-native-size-matters';


const categoriesTypes = [
    {
        id: 1,
        title: "Ubicación",
    },
    {
        id: 2,
        title: "Hoteles",
    },
    {
        id: 3,
        title: "Comida",
    },
    {
        id: 4,
        title: "Aventura",
    },
    {
        id: 5,
        title: "Promociones",
    },
];


export default function FilterTypesLocation() {
    return (
        <>
            <FlatList
                data={categoriesTypes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.container}>
                        <TouchableOpacity >
                            <View style={styles.ovalContainer}>
                                <Text style={styles.textStyles}>{item.title}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
                horizontal
            />
        </>
    )
}

const styles = ScaledSheet.create({

    ovalContainer: {
        borderRadius: '33@s',
        backgroundColor: COLORS.inputColorPrimary,
        paddingTop: '16@s',
        paddingBottom: '14@s',
        paddingHorizontal: '16@vs'
    },
    textStyles: {
        color: COLORS.primary
    },
    container: {
        padding: '12@s'
    }
});