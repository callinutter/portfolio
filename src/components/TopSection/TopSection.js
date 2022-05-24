import React from 'react';
import './TopSection.css';
import { Container } from 'react-bootstrap';
// import moon from '../../images/moon2.jpg'
import cat from '../../images/cat-slide.jpg';

function TopSection() {
    return (
        <Container fluid className="top-container" id="home">
        <img className="topImage" src={cat} />
            <Container className="top-section-container" style={{position: 'absolute'}}>
                <h1 style={{justifySelf: 'center'}} className="aboutHeading">Hello World!</h1>
                <h5 className="aboutDescription"> My name is Calli <br/> I am a web developer based in Berlin Germany.</h5>
                <p style={{fontSize: '1.25rem'}} className="aboutDescription2">
                  I have experience creating websites and web apps using HTML, CSS, Bootstrap, React and React Native, PHP and Javascript. <br/><br/>
                  (Yes, I created this site from scratch using ReactJs)
                </p>
            </Container>
        </Container>
    )
}

export default TopSection
