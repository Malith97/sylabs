import React from 'react'

import img1 from '../images/cover.png'

const OurFewWorks = () => {
    return (
        <>
            <div className="container mx-auto mt-24 lg:mb-24">
                <p className="text-center text-pink-500 font-black mt-12">exclusive</p>
                <h1 className="text-center lg:text-5xl xs:text-4xl font-black mb-5 text-blue-900 lg:px-48 sm:px-8 font-sans">Our Few Works</h1>
                <h4 className="text-center lg:text-xl xs:text-sm font-light mb-12 font-sans">From prototype to full-scale platform, we provide you with a dedicated, full-scale technology team that is specific to your business goals and technical needs</h4>
                <div className="text-center justify-center">
                    <img src={img1} alt='our few works' className="m-auto" />
                </div>
            </div>

        </>
    )
}

export default OurFewWorks;
