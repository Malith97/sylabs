import React from 'react'
import {
    Link
} from "react-router-dom";

const Divider = () => {
    return (
        <>
            <div className="bg-sylab-blue">
                <div className="bg-background-img4 bg-center bg-no-repeat bg-cover">
                    <div className="h-full lg:max-w-full d sm:max-w-xl md:mx-48 lg:py-4">
                        <div className='flex lg:flex-row-reverse md:flex-row-reverse items-center md:py-12 xs:flex-col-reverse sm:flex-col-reverse xs:mt-8 lg:my-auto xs:py-12 xs:items-center'>
                            <div className="lg:w-1/4">
                                <Link to='/'>
                                    <button className="font-sans bg-sylab-orange text-white py-4 px-8 rounded-lg text-xl font-light hover:animate-bounce">Learn More</button>
                                </Link>
                            </div>
                            <div className="lg:w-3/4 lg:mx-10">
                                <h1 className="font-sans text-4xl font-black mb-8 text-white">Proven design, development and <br></br>creative partner
                                </h1>
                                <p className="text-lg mb-8 text-white font-sans">Accelerating transformation for new-age enterprises, we help businesses turn disruption into growth through our development capabilities</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Divider;
