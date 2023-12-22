import { StyleSheet, Text, View } from 'react-native';

import EstablishmentPhoto from '../components/EstablishmentPhoto'

export default function EstablishmentScreen() {
    //aca vamos a hacer lo mismo que mainindexScreen. partir el componete en varias partes y montarlo aca 
    return (
        <View>
            <EstablishmentPhoto />
        </View>
    )
}

const styles = StyleSheet.create({})