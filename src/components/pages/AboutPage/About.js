import React from 'react'

import Header from '../../Header'
import HeroSection from '../../HeroSection'
import Team from '../../OurTeam'
import Process from '../../Process'
import Divider from '../../Divider'

import { aboutObjOne, aboutObjTwo, aboutObjThree } from '../Data/HomeData'

const About = () => {
    return (
        <>
            <Header heading="About Us" desc="Our team are experts in finding new ways to make customers sit up and take notice." />
            <HeroSection {...aboutObjOne} />
            <Process />
            <HeroSection {...aboutObjTwo} />
            <Divider />
            <Team />
            <HeroSection {...aboutObjThree} />
        </>
    )
}

export default About;
