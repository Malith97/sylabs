import React, { useState } from 'react'
import img1 from '../images/work3.png'
import emailjs from 'emailjs-com'
import { HashLoader } from 'react-spinners';

const ContactForm = () => {

    let [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.sendForm('service_nlie6bd', 'template_diwqsrb', e.target, 'user_Oj3zK2EEVuSKW0kVQXYr4').then(
            res => {
                setLoading(false);
                document.getElementById("create-course-form").reset();
            }).catch(
                err => console.log(err)
            );
    }

    return (
        <>
            <div className="container">

                <div className="max-w-screen-xl mt-16 px-4 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-10 xl:px-32 py-16 mx-auto bg-white text-gray-900 rounded-lg">
                    <div className="flex flex-col justify-between">
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-sylab-blue">Lets talk about everything!</h2>
                            <div className="text-gray-700 mt-8">
                                We’re passionate about innovation, brilliant ideas and the execution that brings it all together in one beautiful experience. If you are too, call or send us an email to get started.
                                <br></br>
                                <br></br>
                                info@sylab.tech
                            </div>
                            <img src={img1} alt="Team Sy Labs" className="lg:pr-12 lg:pt-10" />
                        </div>
                    </div>

                    <div className={loading ? 'flex lg:ml-14 justify-center items-center' : 'hidden'}>
                        <HashLoader color="#021940" loading={loading} size={150} />
                    </div>

                    <form className={loading ? 'hidden' : 'lg:ml-14'} onSubmit={sendEmail} id="create-course-form">
                        <div>
                            <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
                            <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text" placeholder="" name="user_name" />
                        </div>
                        <div className="mt-8">
                            <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
                            <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text" name="user_email" />
                        </div>

                        <div className="mt-8">
                            <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
                            <textarea
                                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" name="message"></textarea>
                        </div>
                        <div className="mt-8">
                            <button
                                type="submit"
                                className="uppercase text-sm font-bold tracking-wide bg-sylab-blue text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline hover:bg-sylab-orange">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default ContactForm
