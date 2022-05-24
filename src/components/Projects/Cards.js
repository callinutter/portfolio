import React from 'react';
import { Card } from 'react-bootstrap';
import './Projects.css';

const Cards = ({
    img, title, subtitle, description, linkTitle, alt, link
}) => {
    return (
        <>
            <Card style={{ width: '20rem', marginLeft: '1rem', marginRight: '1rem' }}>
            <Card.Img style={{height: 185}} variant="top" src={img} alt={alt}/>
            <Card.Body style={{backgroundColor: '#f0eeea'}}>
                <Card.Title style={{fontWeight: 700}}>{title}</Card.Title>
                <Card.Subtitle style={{fontWeight: 400, color: '#212529'}} className="mb-2">{subtitle}</Card.Subtitle>
                <Card.Text style={{fontWeight: 200}}>
                {description}
                </Card.Text>
                <Card.Link  style={{color: 'rgb(195 0 107)', fontWeight: 700}} href={link} target="_blank">{linkTitle}</Card.Link>
            </Card.Body>
            </Card>
        </>
    )
}

export default Cards;