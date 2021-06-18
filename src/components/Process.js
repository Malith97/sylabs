import React from 'react'
import { processcards } from '../components/pages/Data/HomeData'

const Process = () => {
    return (
        <>
            <div className="container">
                <h1 className="text-center md:text-5xl sm:text-3xl xs:text-4xl lg:text-6xl font-black text-blue-900 lg:px-48 md:px-12 font-sans xs:mt-20">Our Process</h1>
                <p className="text-center text-black font-medium lg:my-4 xs:mx-12 xs:my-4 font-sans">Develop software that gives you a competitive edge using the latest technologies</p>
                <div className="grid lg:grid-cols-3 sm:grid-cols-3 lg:gap-4 sm:gap-3 xs:grid-cols-3 md:grid-cols-3 md:gap-4 xs:gap-4">
                    {processcards.map((val, key) => {
                        return (
                            <div className="bg-white rounded-lg px-6 py-6 lg:my-8 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 static" key={key}>
                                <div className="static">
                                    <h1 className="font-black lg:text-9xl md:text-9xl text-black text-bold absolute top-16 left-16 opacity-10 sm:text-7xl xs:text-7xl">{val.No}</h1>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-900 mb-6 mt-4 hover:text-pink-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={val.cardIcon} />
                                </svg>
                                <h4 className="text-2xl font-black mb-3 lg:text-4xl xs:text-xl font-sans md:text-2xl">{val.cardHeading}</h4>
                                <p className="text-left xs:text-xs sm:text-sm md:text-lg font-sans lg:text-md">{val.cardDesc}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Process;
