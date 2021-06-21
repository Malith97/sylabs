import React, { useState } from 'react'
import img1 from '../images/work3.png'
import emailjs from 'emailjs-com'
import { HashLoader } from 'react-spinners';

const ContactForm = () => {

    let [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.sendForm('service_akgjg0h', 'template_urmbimh', e.target, 'user_C4MYMqA8kKLMFSJUu6qBK').then(
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

                <div class="max-w-screen-xl mt-16 px-4 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-10 xl:px-32 py-16 mx-auto bg-white text-gray-900 rounded-lg">
                    <div class="flex flex-col justify-between">
                        <div>
                            <h2 class="text-4xl lg:text-5xl font-bold leading-tight text-sylab-blue">Lets talk about everything!</h2>
                            <div class="text-gray-700 mt-8">
                                We’re passionate about innovation, brilliant ideas and the execution that brings it all together in one beautiful experience. If you are too, call or send us an email to get started.
                            </div>
                            <img src={img1} alt="Team Sy Labs" className="lg:pr-12 lg:pt-10" />
                        </div>
                    </div>

                    <div className={loading ? 'flex lg:ml-14 justify-center items-center' : 'hidden'}>
                        <HashLoader color="#021940" loading={loading} size={150} />
                    </div>

                    <form className={loading ? 'hidden' : 'lg:ml-14'} onSubmit={sendEmail} id="create-course-form">
                        <div>
                            <span class="uppercase text-sm text-gray-600 font-bold">Full Name</span>
                            <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text" placeholder="" name="name" />
                        </div>
                        <div class="mt-8">
                            <span class="uppercase text-sm text-gray-600 font-bold">Email</span>
                            <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text" name="user_email" />
                        </div>

                        <div class="mt-8">
                            <span class="uppercase text-sm text-gray-600 font-bold">Message</span>
                            <textarea
                                class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" name="message"></textarea>
                        </div>
                        <div class="mt-8">
                            <button
                                type="submit"
                                class="uppercase text-sm font-bold tracking-wide bg-sylab-blue text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline hover:bg-sylab-orange">
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
