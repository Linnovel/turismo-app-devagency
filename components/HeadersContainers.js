import { Text, View, SafeAreaView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import COLORS from '../styles/colors';

import InputSearchBar from './InputSearchBar';
import { ScaledSheet } from 'react-native-size-matters';

export default function HeadersContainers({ mainTitle, subTitle }) {
    return (
        <>
            <SafeAreaView >
                <View style={styles.mainHeader}>
                    <Text style={styles.fontStyleMainTitle}>{mainTitle}</Text>
                    <View style={styles.secondSubTitle}>
                        <Ionicons name="location-sharp" size={18} color={COLORS.primary} />
                        <Text style={styles.locationTextStyle}>Mgta, Ven</Text>
                        <AntDesign name="down" size={18} color={COLORS.primary} />
                    </View>
                </View>
                <View style={styles.containerSubTitle}>
                    <Text style={styles.subTitleStyle}>{subTitle}</Text>
                </View>
                <InputSearchBar />
            </SafeAreaView>
        </>
    )
}

const styles = ScaledSheet.create({
    mainHeader: {
        paddingTop: '19@ms',
        paddingHorizontal: '18@vs'
    },
    fontStyleMainTitle: {
        fontSize: '14@s',
    },
    secondSubTitle: {
        flexDirection: 'row',
        position: 'absolute',
        right: '13@vs',
        top: '23@vs',
        gap: '8@vs'
    },
    locationTextStyle: {
        fontSize: '12@s'
    },
    containerSubTitle: {
        paddingLeft: '18@vs',
    },
    subTitleStyle: {
        fontSize: '32@s',
        fontWeight: 'normal'
    }


})