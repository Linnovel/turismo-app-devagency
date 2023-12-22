import { Text, View, ScrollView, StyleSheet } from 'react-native'
import HeadersContainers from '../components/HeadersContainers';
import RecommendedSection from '../components/RecommendedSection';

export default function HomeScreen() {
    return (
        <>
            <HeadersContainers mainTitle="Explora" subTitle="Margarita" />
            <RecommendedSection mainTitle="Recommended" />
        </>
    )
}

