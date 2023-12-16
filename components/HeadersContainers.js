import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import COLORS from '../styles/colors';

import InputSearchBar from './InputSearchBar';

export default function HeadersContainers({ mainTitle, subTitle }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mainHeader}>
                <Text style={styles.fontStyleMainTitle}>{mainTitle}</Text>
                <View style={styles.secondSubTitle}>
                    <Ionicons name="location-sharp" size={18} color={COLORS.primary} />
                    <Text>Mgta, Ven</Text>
                    <AntDesign name="down" size={18} color={COLORS.primary} />
                </View>
            </View>
            <View style={styles.containerSubTitle}>
                <Text style={styles.subTitleStyle}>{subTitle}</Text>
            </View>
            <InputSearchBar />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 8
    },
    mainHeader: {
        paddingLeft: 18,
        padding: 8
    },
    fontStyleMainTitle: {
        fontSize: 18
    },
    secondSubTitle: {
        flexDirection: 'row',
        position: 'absolute',
        right: 13,
        bottom: 8
    },
    containerSubTitle: {
        paddingLeft: 18,
    },
    subTitleStyle: {
        fontSize: 36,
        fontWeight: 'normal'
    }


})