import React from 'react'
import { Link } from 'react-router-dom';
import { ourteamDetails } from '../components/pages/Data/HomeData'
import { FaFacebookSquare, FaGithub, FaLinkedin, FaDribbble } from 'react-icons/fa'

const OurTeam = () => {
    return (
        <>
            <div className="container mx-auto mt-24 lg:mb-24">
                <p className="text-center text-pink-500 font-black">TEAM MEMBERS</p>
                <h1 className="text-center lg:text-5xl xs:text-3xl font-black lg:mb-5 text-blue-900 lg:px-48 sm:px-8 ">The Brains Behind</h1>
                <h4 className="text-center lg:text-xl xs:text-md font-light mb-12">We are creative people with big dreams</h4>
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 lg:gap-4 sm:gap-2 xs:grid-cols-1">
                    {ourteamDetails.map((val, key) => {
                        return (
                            <div class="wrapper antialiased text-gray-900 xs:m-4">
                                <div>
                                    <img src={val.teamPicture} alt=" random imgee" className="lg:w-full sm:w-full object-cover object-center rounded-lg shadow-md" />
                                    <div className="relative lg:px-4 lg:-mt-16 xs:-mt-4 xs:p-1">
                                        <div className="bg-white lg:p-6 xs:p-4 rounded-lg xs:justify-center xs:text-center shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                                            <h4 className="mt-1 md:flex xs:flex md:justify-center xs:justify-center lg:text-center font-bold leading-tight text-blue-900 lg:text-xl xs:text-sm md:text-xl">{val.teamName}</h4>
                                            <div className="mt-4">
                                                <span className="xs:flex xs:justify-center sm:justify-center xs:text-center lg:text-center xs:text-xs text-gray-600">{val.teamPosition}</span>
                                            </div>
                                            <div className="flex lg:space-x-4 xs:space-x-2 xs:justify-center md:space-x-4 md:justify-center mt-4">
                                                <Link to="/any-url">
                                                    <FaFacebookSquare className="hover:text-blue-600 xs:text-sm lg:text-xl" />
                                                </Link>
                                                <Link to="/any-url">
                                                    <FaGithub className="hover:text-black xs:text-sm lg:text-xl" />
                                                </Link>
                                                <Link to="/any-url">
                                                    <FaLinkedin className="hover:text-blue-400 xs:text-sm lg:text-xl" />
                                                </Link>
                                                <Link to="/any-url">
                                                    <FaDribbble className="hover:text-pink-500 xs:text-sm lg:text-xl" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default OurTeam;
