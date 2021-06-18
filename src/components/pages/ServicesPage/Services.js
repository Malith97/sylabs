import React from 'react'

import Header from '../../Header'
import Card from '../../ServiceCard'
import HeroSection from '../../HeroSection'
import Technologies from '../../Technologies'
import Divider
    from '../../Divider'
import { serviceObjOne, serviceObjTwo, fullservicecards } from '../Data/HomeData'

const Services = () => {
    return (
        <>
            <Header heading="Our Services" desc="provides high quality, cost-effective and reliable software development services that match your specifictechnical needs, budget and timeframe." />
            <Card cardType={fullservicecards} />
            <HeroSection {...serviceObjOne} />
            <Divider />
            <Technologies />
            <HeroSection {...serviceObjTwo} />
        </>
    )
}

export default Services;
