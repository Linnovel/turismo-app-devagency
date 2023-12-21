import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import COLORS from '../styles/colors'

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
                    <Pressable>
                        <View style={styles.container}>
                            <View style={styles.ovalContainer}>
                                <Text style={styles.textStyles}>{item.title}</Text>
                            </View>
                        </View>
                    </Pressable>
                )}
                horizontal
            />
        </>
    )
}

const styles = StyleSheet.create({

    ovalContainer: {
        borderRadius: 45,
        backgroundColor: COLORS.inputColorPrimary,
        paddingTop: 16,
        paddingBottom: 14,
        paddingHorizontal: 16
    },
    textStyles: {
        color: COLORS.primary
    },
    container: {
        padding: 12
    }
});