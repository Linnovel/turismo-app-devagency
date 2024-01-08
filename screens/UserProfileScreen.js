import { Text, View, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import COLORS from '../styles/colors'
import { ScaledSheet } from "react-native-size-matters";
import { useNavigation } from '@react-navigation/native';

const userRecords = [

    {
        id: 1,
        title: 'Header',
        text: 'Hell want to use your yacht, and I don want this thing smelling like fish'
    },
    {
        id: 2,
        title: 'Header',
        text: 'Hell want to use your yacht, and I don want this thing smelling like fish'
    },
    {
        id: 3,
        title: 'Header',
        text: 'Hell want to use your yacht, and I don want this thing smelling like fish'
    },
]
export default function UserProfileScreen() {
    const navigation = useNavigation();
    // const renderUserHistory = ({ item }) => {
    //     return <>
    //         <View style={styles.container}>
    //             <View style={styles.rectangularContainer} />
    //             <View style={styles.textContainer}>
    //                 <Text >{item.title}</Text>
    //                 <Text >{item.text}</Text>
    //             </View>
    //         </View>
    //     </>
    // }
    function ratedOurAppPage() {
        navigation.navigate('RatedOurAppScreen')
    }
    return (
        <>
            <View style={styles.titleContainer}>
                <Text style={styles.configuartionTitleStyle}>Configuracion</Text>
                <Text style={styles.perfilTitleStyle}>Perfil</Text>
                <Text style={styles.logoutTitleStyle}>Logout</Text>
            </View>
            {/* <FlatList
                data={userRecords}
                key={({ item }) => item.id}
                renderItem={renderUserHistory}
                ItemSeparatorComponent={() => <View style={{ width: '100%', height: 0.5, backgroundColor: 'black' }} />}
            /> */}
            <View style={styles.circleContainer}>
                <TouchableOpacity onPress={ratedOurAppPage}>
                    <Image style={styles.circleImage} source={{ uri: 'https://images.pexels.com/photos/910143/pexels-photo-910143.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} />
                </TouchableOpacity>
                <Text style={styles.subTitleTextStyle}>Jose Perez</Text>
                <Text style={styles.dumTextStyle}>Texto dumm</Text>
            </View>
        </>
    )
}

const styles = ScaledSheet.create({
    titleContainer: {
        flex: 0.3,
        backgroundColor: COLORS.primary,
        flexDirection: 'row',
        alignItems: 'center',
        padding: '8@s'
    },
    configuartionTitleStyle: {
        color: 'white',
        fontSize: '16@s',
        flex: 1,
    },
    perfilTitleStyle: {
        color: 'white',
        fontSize: '30@s',
        fontWeight: 'bold',
        flex: 1,
    },
    logoutTitleStyle: {
        color: 'white',
        flex: 0.5,
        textAlign: 'right',
        fontSize: '16@s'
    },
    subTitleTextStyle: {
        fontSize: '30@s',
        fontWeight: 'bold'
    },
    circleContainer: {
        position: 'absolute',
        right: '86@vs',
        alignItems: 'center',
        top: '135@vs',
    },
    circleImage: {
        width: '158@s',
        height: '158@vs',
        borderWidth: '2@s',
        borderColor: '#fff',
        borderRadius: 158 / 2
    },
    dumTextStyle: {
        fontSize: '16@s'
    },
    // container: {
    //     flexDirection: 'row',
    //     padding: '8@s',
    //     gap: '8@vs',
    //     margin: '2@s',
    // },
    // textContainer: {
    //     flexWrap: 'nowrap',

    // },
    // rectangularContainer: {
    //     backgroundColor: '#F6F6F6',
    //     width: '40@s',
    //     height: '40@s',
    //     borderRadius: '8@s',
    //     elevation: 6,
    //     shadowColor: '#000',
    //     shadowOffset: { width: '0@s', height: '2@vs' },
    //     shadowOpacity: '0.4@s',
    //     shadowRadius: '4@s',
    // }
})