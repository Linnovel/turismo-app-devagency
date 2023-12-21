import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function UserProfileScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Name</Text>
        </View>
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
    }
})