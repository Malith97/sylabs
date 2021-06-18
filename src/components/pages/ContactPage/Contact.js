import React from 'react'

import Header from '../../Header'
import Divider from '../../Divider'

import ContactForm from '../../ContactForm'

const Contact = () => {
    return (
        <>
            <Header heading="Contact Us" desc="Our briefing form is the starting point for all new projects, big or small. It asks for everything we need to give you a provisional quote for design and development projects." />

            <ContactForm />
        </>
    )
}

export default Contact;
