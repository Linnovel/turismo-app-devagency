import { StyleSheet, View, TextInput, Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../styles/colors'

import CardProduct from './CardProduct';
import FilterTypesLocation from './FilterTypesLocation';



export default function InputSearchBar() {


    return (
        <>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputStyle} placeholder='Buscar...' />
                <View style={styles.iconContainer}>
                    <Ionicons name="search-outline" size={24} color="black" />
                </View>
            </View>
            <FilterTypesLocation />
            <CardProduct title="Popular" seeAll="See all" />
        </>
    )
}

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    inputContainer: {
        width: deviceWidth < 360 ? 150 : 325,
        height: deviceHeight < 360 ? 35 : 50,
        paddingStart: 12,
        paddingTop: 8
    },
    inputStyle: {
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.inputColorPrimary,
        borderRadius: deviceWidth < 360 ? 75 : 187,
        paddingLeft: 45,
        overflow: 'hidden'
    },
    iconContainer: {
        position: 'absolute',
        top: 17,
        left: 27
    }
})