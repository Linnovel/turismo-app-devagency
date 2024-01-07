import { Text, View, FlatList } from 'react-native'
import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'

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
    {
        title: "Restaurant",
        comment: "Love the food really good",
        id: 5
    },

]

export default function BlogUserComments() {

    function renderItem({ item }) {
        return (<>
            <View style={styles.container}>
                <View style={styles.rectangularContainer} />
                <View style={styles.textContainer}>
                    <Text  >{item.title}</Text>
                    <Text >{item.comment}</Text>
                </View>
            </View>
        </>)
    }

    return (
        <>
            <FlatList data={commentData}
                key={({ item }) => item.id}
                renderItem={renderItem}
                ItemSeparatorComponent={() => <View style={{ width: '100%', height: 0.5, backgroundColor: 'black' }} />}
            />

        </>
    )
}


const styles = ScaledSheet.create({
    container: {
        padding: '8@s',
        flexDirection: 'row',
        gap: '8@vs',
    },
    textContainer: {
        flexWrap: 'nowrap'
    },
    rectangularContainer: {
        backgroundColor: '#f6f6f6',
        width: '50@s',
        height: '50@s',
        borderRadius: '8@s',
    }
})