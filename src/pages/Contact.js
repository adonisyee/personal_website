import React from "react"
import {data} from "../data/ContactData"
import useNav from "../hooks/useNav"

export default function Contact() {
    const contactRef = useNav('contact')

    const contactItems = data.map((contact, index) => {
        return (
            <div className="contact-item" key={contact.key}>
                <a href={contact.src} target="_blank" rel="noopener noreferrer">
                    {contact.icon}
                    <p>{contact.name}</p>
                </a>
            </div>
        )
    })

    return (
        <div className="contact-container" ref={contactRef} id="contact-container">
            <h1 className="contact-title">Contact & Links</h1>
            <div className="contact-items">
                {contactItems}
            </div>
        </div>
    )
}
