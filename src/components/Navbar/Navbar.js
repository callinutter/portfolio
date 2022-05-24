import React, {useState} from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Navbar.css';
import {GiCat} from 'react-icons/gi';
import cat from '../../images/cat.gif';
import {useTransition, animated} from 'react-spring'



function Navigation(){
    const [showMenu, setShowMenu] = useState(false);

    const maskTransitions = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        })

    const menuTransitions = useTransition(showMenu, null, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
        })
    

    return(
        <nav>
            <div style={{fontSize: 30, marginTop: '-10', color: 'pink', position: 'absolute', right: 20, display: 'flex', cursor: 'pointer'}} onClick={() => setShowMenu(!showMenu)}>
                <GiCat
                 />
                <p style={{fontSize: 14, marginLeft: 3, marginTop: 4, cursor: 'pointer'}}>Click!</p>
            </div>

            {
                maskTransitions.map(({ item, key, props }) =>
                    item && 
                    <animated.div 
                        key={key} 
                        style={props}
                        className="menu-mask"
                        onClick={() => setShowMenu(false)}
                    >
                    </animated.div>
                )
            }

            {
                menuTransitions.map(({ item, key, props }) =>
                    item && 
                    <animated.div 
                        key={key} 
                        style={props}
                        className="menu"
                    >
                        <Navbar className="navbar" variant="dark">
                            <Navbar.Brand href="#home" style={{fontWeight: 700}}>Calli Nutter</Navbar.Brand>
                            <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                            </Nav>
                            <div className="cat">
                                <img className="cat-img" src={cat} alt="cat-gif" />
                            </div>
                        </Navbar>
                    </animated.div>
                )
            }
            
       </nav>
    )
}

function NavbarTop() {
    return (
        <>
             <header 
                style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#000'}}
                    className="border-b p-3 flex justify-between items-center">
                    {/* <h3 className="name">
                        
                    </h3> */}
                        <Navigation />
            </header>
        </>
    )
}

export default NavbarTop;
