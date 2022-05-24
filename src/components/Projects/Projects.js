import React from 'react';
import { Container } from 'react-bootstrap';
import Cards from './Cards';
import { ObjOne, ObjTwo, ObjThree, ObjFour, ObjFive, ObjSix } from './Data';
import './Projects.css';



const Projects = () => {
    return (
        <>
            <Container fluid style={{textAlign: 'center', paddingTop: 50, backgroundColor: '#E2D7CF', borderRadius: .25}}>
                <h1 style={{fontWeight: 700}}>Projects</h1>
                <Container className="projects-container" id="projects">
                    <div className="project-cards">
                    <Cards {...ObjSix}/>
                    <Cards {...ObjOne}/>
                    <Cards {...ObjFive}/>
                    <Cards {...ObjFour} />
                    <Cards {...ObjThree}/>
                    <Cards {...ObjTwo}/>
                    </div>
                </Container>
            </Container>
        </>
    )
}

export default Projects;
