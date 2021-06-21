import React from 'react'
import {
    Link
} from "react-router-dom";


const HeroSection = ({ topLine, headLine, description, buttonLabel, img, alt, imgStart, isBtn, isDesc, topicIcon, topicHead, topicDesc }) => {
    return (
        <>
            <div className="bg-background-img5">
                <div className="container mx-auto h-full lg:max-w-full d sm:max-w-xl lg:mx-14 md:mx-48 lg:my-20 xs:max-w-full">
                    <div className={imgStart === 'start' ? 'flex lg:flex-row-reverse md:flex-row-reverse items-center md:py-12 xs:flex-col-reverse sm:flex-col-reverse xs:mt-8' : 'flex md:flex-row lg:flex-row items-center md:py-12 xs:flex-col-reverse xs:mt-8 sm:flex-col-reverse'}>
                        <div className="lg:w-1/2 md:w-1/2" data-aos="fade-right">
                            <div className="font-sans text-red-500 font-bold mb-4">
                                {topLine}
                            </div>
                            <h1 className="lg:text-5xl font-black mb-8 text-blue-900 font-sans xs:text-4xl">{headLine}</h1>
                            <p className="text-md mb-8 text-black font-sans">{description}</p>
                            <Link to='/services'>
                                <button className={isBtn === false ? 'hidden' : 'bg-sylab-blue text-white py-3 px-14 rounded-lg text-xl font-medium hover:bg-red-500'}>{buttonLabel}</button>
                            </Link>
                            <div className={isDesc === false ? 'hidden' : 'flex flex-row'}>
                                <div className="xs:pt-4 sm:pt-4 md:pt-4 lg:pt-4">
                                    <div className="lg:text-6xl xs:text-3xl mr-8">
                                        {topicIcon}
                                    </div>
                                </div>
                                <div>
                                    <h5 className="lg:text-2xl md:text-xl xs:text-md font-black text-blue-900">{topicHead}</h5>
                                    <p className="lg:text-lg md:text-sm mb-8 text-black font-sans xs:text-xs">{topicDesc}</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 md:w-1/2" data-aos="fade-left">
                            <div className="">
                                <img src={img} alt={alt} className="lg:h-42 lg:w-18 lg:px-14 xs:pb-16" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection;
