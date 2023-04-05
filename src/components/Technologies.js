import React from 'react'
import { technologyIcons } from '../components/pages/Data/HomeData'
import '../index.css'

const Technologies = () => {
    return (
        <>
            <div className="container">
                <h1 className="xs:hidden md:block text-center text-4xl font-black text-sylab-blue lg:px-48 md:px-12 lg:mt-20 font-sans md:my-14">Technologies we are familiar with</h1>
                <div className="md:mt-6 grid lg:grid-flow-col md:grid-flow-col sm:grid-flow-col md:grid-rows-2 lg:grid-rows-2 sm:grid-rows-3 md:grid-cols-7 lg:grid-cols-7 sm:grid-cols-5 md:gap-8 sm:gap-8 lg:gap-4">
                    {technologyIcons.map((val, key) => {
                        return (
                            <div className={val.animate} key={key}>
                                <img className="lg:h-14 lg:w-14" src={val.icon} alt='' />
                            </div>
                        )
                    })}
                </div>
            </div>

        </>
    )
}

export default Technologies;
