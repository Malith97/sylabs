import React from 'react'
import { countryList } from '../components/pages/Data/HomeData'
import '../index.css'

const Countries = () => {
    return <>
        <div className="bg-white my-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h1 className="text-center xs:mt-6 xs:text-2xl lg:text-4xl font-black mb-12 text-blue-900 lg:px-48 md:px-12 font-sans">Serving Clients Over Many Countries</h1>
                <dl className="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-4">
                    {countryList.map((val,key) => {
                        return(
                            <div className="mx-auto flex max-w-xs flex-col gap-y-4" key={key}>
                                <div className="max-w-sm rounded overflow-hidden shadow-lg m-8">
                                    <img className="w-full" src={val.flag} alt="Sunset in the mountains"/>
                                </div>
                                <dt className="text-base leading-7 text-gray-600">{val.countryName}</dt>
                            </div>
                        )
                    })}
                </dl>
            </div>
        </div>
    </>
}

export default Countries;