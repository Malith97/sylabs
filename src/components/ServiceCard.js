import React from 'react'
import '../index.css'

const ServiceCard = (cardType) => {
    const result = Object.values(cardType);
    const itemlength = result[0].length;
    return (
        <>
            <div className="container items-center">
                <p className="text-center text-pink-500 font-black lg:mt-12 xs:mt-16">WHAT WE DO</p>
                <h1 className="text-center xs:mt-6 xs:text-2xl lg:text-4xl font-black mb-12 text-blue-900 lg:px-48 md:px-12 font-sans">Creative and results driven technical solutions for your business</h1>
                <div className={itemlength === 4 ? 'grid lg:grid-cols-4 sm:grid-cols-2 lg:gap-4 sm:gap-3 xs:grid-cols-2 md:grid-cols-2 md:gap-4 xs:gap-4' : 'grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-4 sm:gap-3 xs:grid-cols-2 md:grid-cols-2 md:gap-4 xs:gap-4'}>
                    {result[0].map((val, key) => {
                        return (
                            <div className="shadow-xl bg-white rounded-lg px-6 py-6 lg:my-8 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105" key={key}>
                                {val.cardIcon}
                                <h4 className="xs:text-sm md:text-2xl lg:text-2xl font-black mb-3">{val.cardHeading}</h4>
                                <p className="text-left font-normal font-sans xs:text-xs">{val.cardDesc}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default ServiceCard
