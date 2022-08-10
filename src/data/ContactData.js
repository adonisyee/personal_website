import React from "react"
import {AiFillGithub, AiFillLinkedin, AiOutlineMail} from "react-icons/ai"

export const data = [
    {
        'key': 0,
        'src': "https://github.com/adonisyee",
        'name': 'github.com/adonisyee',
        'icon': <AiFillGithub className="contact-logo"/>
    },
    {
        'key': 1,
        'src': "https://www.linkedin.com/in/adonisyee",
        'name': 'linkedin.com/in/adonisyee',
        'icon': <AiFillLinkedin className="contact-logo"/>
    },
    {
        'key': 2,
        'src': "mailto:adonisyee@berkeley.edu",
        'name': 'adonisyee@berkeley.edu',
        'icon': <AiOutlineMail className="contact-logo"/>
    }
]
