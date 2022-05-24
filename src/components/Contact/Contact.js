import React from 'react';
import { Container } from 'react-bootstrap';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Contact.css';

function Contact() {
    return (
        <Container fluid style={{paddingTop: 50, paddingBottom: 50, backgroundColor: '#050E13'}} id="contact">
           <h1 style={{textAlign: 'center', color: 'white', fontWeight: 700}}>Let's get in touch!</h1>
           <div className="icons">
                <div className="mail-icon">
                    <MailIcon/>
                    <a href="mailto:calli.c.nutter@gmail.com">Email</a>
                </div>
                <div className="linkedin-icon">
                    <LinkedInIcon/>
                    <a href="https://www.linkedin.com/in/calli-nutter/">LinkedIn</a>
                </div>
                <div className="github-icon">
                    <GitHubIcon/>
                    <a href="https://github.com/callinutter">Github</a>
                </div>
           </div>
        </Container>
    )
}

export default Contact;
