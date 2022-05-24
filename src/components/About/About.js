import React from 'react';
import './About.css';
import { Col, Container, Row } from 'react-bootstrap';
import me from '../../images/me.jpg';

function About() {
    return (
        <Container className="about-section" id="about">
        <Row>
          <Col>
            <img height={350} width={'auto'} className="myImage" src={me} alt='meeee'/>
          </Col>
          <Col>
            <h1 style={{justifySelf: 'center'}} className="about-text-top">A little bit about me...</h1>
            <h5 className="about-text"> My name is Calli <br/> I am a 26 year young web developer based in Berlin Germany.</h5>
            <p style={{fontSize: '1.25rem'}} className="about-text2">
              I am currently partaking in an apprenticeship focused in application development at Grün Software Group GmbH. 
              The programming language I work with is PHP and Javascript/Jquery, however, I still enjoy creating my own projects using the Javascript library, ReactJs.
              <br/>
              In 2020-2021 I was an intern at Audienz, now known as Voiyal. I created both of their landing pages and had an intoduction into the world of mobile development using React Native.

            </p>
          </Col>
        </Row>
        
            <Container className="about-section">
                
            </Container>
        </Container>
    )
}

export default About;