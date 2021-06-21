import React from 'react'
import Logo from '../images/weblogo.png'
import { FaFacebookSquare, FaGithub, FaLinkedin, FaDribbble } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <div className="bg-sylab-blue">
                <div class="border-t border-solid border-gray-900 mt-4 py-4">
                    <div class="container px-4 mx-auto">

                        <div class="md:flex md:-mx-4 md:items-center">
                            <div class="md:flex-1 md:px-4 text-center md:text-left">
                                <img src={Logo} alt="Sy Labs" className="xs:my-4 md:visible xs:h-8 xs:w-30 xs:hidden md:block" />
                            </div>
                            <div class="md:flex-1 sm:flex-1 md:px-4 text-center md:text-right xs:mb-4 xs:gap-1">
                                <a href="https://www.facebook.com/synnlabz">
                                    <FaFacebookSquare className="text-xl text-blue-50 inline-block lg:mx-4 md:mx-4 sm:mx-4 xs:mx-4 hover:text-blue-500" />
                                </a>
                                <a href="https://www.github.com/malith97">
                                    <FaGithub className="text-xl text-blue-50 inline-block lg:mx-4 md:mx-4 sm:mx-4 xs:mx-4 hover:text-black" />
                                </a>
                                <a href="https://www.linkedin.com/synnlabz">
                                    <FaLinkedin className="text-xl text-blue-50 inline-block lg:mx-4 md:mx-4 sm:mx-4 xs:mx-4 hover:text-blue-400" />
                                </a>
                                <a href="https://https://www.linkedin.com/in/malith-ileperuma-8a6a97167/">
                                    <FaDribbble className="text-xl text-blue-50 inline-block lg:mx-4 md:mx-4 sm:mx-4 xs:mx-4 hover:text-pink-600" />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
