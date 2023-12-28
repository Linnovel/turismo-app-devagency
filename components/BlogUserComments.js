import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native'
import React from 'react'

const commentData = [
    {
        title: "Piscina",
        comment: "He'll want to use your yacht, and I don't want this thing smelling like fish",
        id: 1
    },
    {
        title: "Bar",
        comment: "He'll want to use your yacht, and I don't want this thing smelling like fish",
        id: 2
    },
    {
        title: "Kiosko",
        comment: "Beautiful things to buy and take home",
        id: 3
    },
    {
        title: "Restaurant",
        comment: "Love the food really good",
        id: 4
    },

]

export default function BlogUserComments() {

    function renderItem({ item }) {
        return (<>
            <View style={styles.container}>
                <View style={styles.rectangularContainer} />
                <View style={styles.textContainer}>
                    <Text>{item.title}</Text>
                    <Text allowFontScaling={true}>{item.comment}</Text>
                </View>
            </View>
        </>)
    }

    return (
        <>
            <FlatList data={commentData}
                key={({ item }) => item.id}
                renderItem={renderItem}
                //refactorizar esta guarandinga y hacerlo un componenete reusable
                ItemSeparatorComponent={() => <View style={{ width: '100%', height: 0.5, backgroundColor: 'black' }} />}
            />

        </>
    )
}

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        padding: deviceWidth < 375 ? 4 : 8,
        flexDirection: 'row',
        gap: 8,
    },
    textContainer: {
        flexWrap: 'nowrap'
    },
    rectangularContainer: {
        backgroundColor: '#F6F6F6',
        width: 50,
        height: 50,
        borderRadius: 15,
    }
})