//importanciones nativas 
import { View, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../styles/colors'
import { ScaledSheet } from 'react-native-size-matters';

//importanciones de componenetes
import CardProduct from './CardProduct';
import FilterTypesLocation from './FilterTypesLocation';



export default function InputSearchBar() {

    return (
        <>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputStyle} placeholder='Buscar...' placeholderTextColor='#686363' />
                <View style={styles.iconContainer}>
                    <Ionicons name="search-outline" size={24} color="#BCBCBC" />
                </View>
            </View>
            <FilterTypesLocation />
            <CardProduct title="Popular" seeAll="See all" />
        </>
    )
}



const styles = ScaledSheet.create({
    inputContainer: {
        paddingHorizontal: '12@s',
        paddingTop: '8@s'
    },
    inputStyle: {
        width: '294@ms',
        height: '52@vs',
        backgroundColor: COLORS.inputColorPrimary,
        borderRadius: '24@s',
        paddingLeft: '45@vs',
        overflow: 'hidden'
    },
    iconContainer: {
        position: 'absolute',
        top: '23@vs',
        left: '27@vs'
    }
})