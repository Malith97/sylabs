import React from 'react'
import { technologyIcons } from '../components/pages/Data/HomeData'
import '../index.css'

const Technologies = () => {
    return (
        <>
            <div className="container">
                <h1 className="text-center text-4xl font-black text-black lg:px-48 md:px-12 lg:mt-20 font-sans">Technologies we are familiar with</h1>
                <div class="grid grid-flow-col grid-rows-2 grid-cols-7 gap-4">
                    {technologyIcons.map((val, key) => {
                        return (
                            <div class={val.animate}>
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
