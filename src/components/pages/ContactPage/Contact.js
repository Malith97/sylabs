import React , {useEffect} from 'react'

import Header from '../../Header'

import ContactForm from '../../ContactForm'

const Contact = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    return (
        <>
            <Header heading="Contact Us" desc="Our briefing form is the starting point for all new projects, big or small. It asks for everything we need to give you a provisional quote for design and development projects." />

            <ContactForm />
        </>
    )
}

export default Contact;
