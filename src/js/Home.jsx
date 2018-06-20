import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {Jumbotron, Grid, Button, Row, Col, Image} from 'react-bootstrap';
import logo from '../images/download.png';
import '../sass/main.css';
import Particles from 'react-particles-js';
import note from '../images/note-24.jpg'



const particlesParams = {
    particles: {
        number: {
            value:50
        },
        color: {
            value: '#fff'
        },
        shape: {
            type: 'image',
            image: {
                src: note,
                width: 100,
                height: 100,
            }
        }
    }
};



export default class Home extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                   <Particles params={particlesParams}/>
                       <h2>Stage1</h2>
                       <p>Lorem ipsum dolor sit amet.</p>
                       <Link to="/about">
                           <Button bsStyle="primary">O Nas</Button>
                       </Link>
                </Jumbotron>
                <Row className="home-news">
                    <Col xs={12} md={8}>
                        <Image src={logo} responsive className="home-news-image"/>
                    </Col>
                    <Col xs={6} md={4}>
                        <h2>Wiadomosci</h2>
                        <p>Zobacz Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Adipisci aut consequuntur dolores ipsa nesciunt quasi vel vitae.
                            Quae, reiciendis, veritatis!</p>
                        <Link to="/news">
                            <Button bsStyle="primary">Wiadomosci</Button>
                        </Link>
                    </Col>
                </Row>
                <Row className="home-equipment">
                    <Col xs={12} md={8}>
                        <h2>Nasz Sprzet</h2>
                        <p>Zobacz Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Adipisci aut consequuntur dolores ipsa nesciunt quasi vel vitae.
                            Quae, reiciendis, veritatis!</p>
                        <Link to="/equipment">
                            <Button bsStyle="primary">Sprzet</Button>
                        </Link>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={logo} responsive className="home-news-image"/>
                    </Col>
                </Row>
                <Row className="home-events">
                    <Col xs={12} md={8}>
                        <Image src={logo} responsive className="home-news-image"/>
                    </Col>
                    <Col xs={6} md={4}>
                        <h2>Nasze Realizacje</h2>
                        <p>Zobacz Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Adipisci aut consequuntur dolores ipsa nesciunt quasi vel vitae.
                            Quae, reiciendis, veritatis!</p>
                        <Link to="/events">
                            <Button bsStyle="primary">Realizacje</Button>
                        </Link>
                    </Col>
                </Row>
                <Row className="home-form">
                    <Col xs={12} md={8}>
                        <Image src={logo} responsive className="home-news-image"/>
                    </Col>
                    <Col xs={6} md={4}>
                        <h2>Kontakt</h2>
                        <p>Zobacz Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Adipisci aut consequuntur dolores ipsa nesciunt quasi vel vitae.
                            Quae, reiciendis, veritatis!</p>
                        <Link to="/form">
                            <Button bsStyle="primary">Form</Button>
                        </Link>
                    </Col>
                </Row>
            </Grid>
        )
    }
}