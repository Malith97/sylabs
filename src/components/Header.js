import React from 'react'

const Header = ({ heading, desc }) => {
    return (
        <>
            <div className="bg-background-img2 bg-contain bg-center h-60">
                <div className="lg:my-20 md:my-14 sm:my-4 sm:pt-16 xs:pt-14">
                    <h1 className="text-center font-sans xs:text-5xl xs:mb-4 lg:text-6xl font-bold text-sylab-blue lg:px-48 md:px-12">{heading}</h1>
                    <p className="text-center font-sans text-blue-900 font-medium mb-12 lg:px-32 xs:px-6 sm:px-6">{desc}</p>
                </div>
            </div>
        </>
    )
}

export default Header;
