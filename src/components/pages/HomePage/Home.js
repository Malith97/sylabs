import React from 'react'
import HeroSection from '../../HeroSection'
import Card from '../../ServiceCard'
import HowitWorks from '../../HowitWorks'
import OurFewWorks from '../../OurFewWorks'
import Countries from '../../Countries'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, servicecards } from '../Data/HomeData'


const Home = () => {
    return (
        <>
            <HeroSection {...homeObjOne} />
            <Card cardType={servicecards} />
            <HeroSection {...homeObjTwo} />
            <Countries/>
            <HowitWorks />
            <HeroSection {...homeObjThree} />
            <OurFewWorks />
            <HeroSection {...homeObjFour} />
        </>
    );
}

export default Home;
