import React from 'react'
import {
    Link
} from "react-router-dom";

const Divider = () => {
    return (
        <>
            <div className="bg-sylab-blue">
                <div className="bg-background-img4 bg-center bg-no-repeat bg-cover">
                    <div className="h-full lg:max-w-full md:max-w-full d sm:max-w-xl lg:py-2 xs:m-12 md:mx-20">
                        <div className='flex lg:flex-row-reverse md:flex-row-reverse items-center md:py-12 xs:flex-col-reverse sm:flex-col-reverse xs:mt-8 lg:my-auto xs:py-12 xs:items-center'>
                            <div className="lg:w-1/4 md:w-1/4">
                                <Link to='/'>
                                    <button className="font-sans bg-sylab-orange text-white lg:py-4 xs:py-2 lg:px-8 xs:p-4 rounded-lg lg;text-xl font-light hover:animate-bounce">Learn More</button>
                                </Link>
                            </div>
                            <div className="lg:w-3/4 lg:mx-10 md:w-3/4">
                                <h1 className="font-sans lg:text-4xl xs:text-2xl font-black mb-8 text-white">Proven design, development and <br></br>creative partner
                                </h1>
                                <p className="lg:text-lg xs:text-xs mb-8 text-white font-sans">Accelerating transformation for new-age enterprises, we help businesses turn disruption into growth through our development capabilities</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Divider;
