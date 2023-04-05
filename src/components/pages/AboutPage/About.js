import React, {useEffect} from 'react'

import Header from '../../Header'
import HeroSection from '../../HeroSection'
import Team from '../../OurTeam'
import Process from '../../Process'
import Divider from '../../Divider'

import { aboutObjOne, aboutObjTwo, aboutObjThree } from '../Data/HomeData'

const About = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

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
