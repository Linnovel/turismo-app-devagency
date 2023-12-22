import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function UserProfileScreen() {
    return (
        <>
            <View style={styles.container}>
                <Image source={{ uri: 'https://images.pexels.com/photos/910143/pexels-photo-910143.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} style={{ width: 400, height: 400 }} />
                <Text style={styles.textStyle}>Perfil</Text>
                <Text style={styles.subTitleTextStyle}>Jose Perez</Text>
                <Text >Lorem Ipsum</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    subTitleTextStyle: {
        fontSize: 28,
        fontWeight: 'bold'
    }

})