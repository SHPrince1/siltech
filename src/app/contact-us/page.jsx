import React from 'react'
import Contact from '../components/home-page/contact'
import ContactBanner from '../components/contact-us/contact-banner'
import Footer from "../components/footer"
const ContactUs = () => {
  return (
    <div>
        <ContactBanner />
        <Contact />

        <Footer />
    </div>
  )
}

export default ContactUs