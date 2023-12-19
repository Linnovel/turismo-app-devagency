import { ScrollView } from 'react-native'
import React from 'react'
import BottomTabs from '../components/BottomTabs';
import HeadersContainers from '../components/HeadersContainers';
import RecommendedSection from '../components/RecommendedSection';


//Distribuye entre index en pequeños componentes. 
//agregarle el botom tabs completado
// Agregar buscador,(terminado) cards de lugares,(terminado) seccion de recomendados(faltante)

function MainIndexScreen() {

    return (
        <>
            <HeadersContainers mainTitle="Explora" subTitle="Margarita" />
            <RecommendedSection mainTitle="Recommended" />
            <BottomTabs />
        </>
    )
}



export default MainIndexScreen;