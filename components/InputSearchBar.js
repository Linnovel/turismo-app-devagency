import { StyleSheet, View, TextInput, } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../styles/colors'

import CardProduct from './CardProduct';
import FilterTypesLocation from './FilterTypesLocation';



export default function InputSearchBar() {


    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.inputStyle} placeholder='Buscar...' />
            <View style={styles.iconContainer}>
                <Ionicons name="search-outline" size={24} color="black" />
            </View>
            <FilterTypesLocation />
            <CardProduct />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        padding: 16
    },
    inputStyle: {
        width: '90%',
        height: 45,
        backgroundColor: COLORS.inputColorPrimary,
        borderRadius: 40,
        borderWidth: 0.1,
        paddingLeft: 40
    },
    iconContainer: {
        position: 'absolute',
        top: 26,
        left: 27
    }
})