import { ScrollView, } from 'react-native'
import HeadersContainers from '../components/HeadersContainers';
import RecommendedSection from '../components/RecommendedSection';

export default function HomeScreen() {
    return (
        <>
            <HeadersContainers mainTitle="Explora" subTitle="Margarita" />
            <ScrollView >
                <RecommendedSection mainTitle="Recommended" />
            </ScrollView>
        </>
    )
}

