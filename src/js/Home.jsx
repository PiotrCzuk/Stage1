import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {Jumbotron, Grid, Button, Row, Col, Image} from 'react-bootstrap';
import logo from '../images/download.png';
import '../sass/main.css';
import Particles from 'react-particles-js';
import note from '../images/note-24.jpg';
import Config from '../particles';



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
            }
        }
    }
};



export default class Home extends Component {
    render() {
        console.log(Config);
        return (
            <div>
            <Grid>
                <Jumbotron>
                   <Particles params={particlesParams}/>
                       <h2>Stage1</h2>
                       <p>Lorem ipsum dolor sit amet.</p>
                       <Link to="/about">
                           <Button bsStyle="primary">O Nas</Button>
                       </Link>
                </Jumbotron>
            </Grid>
            <main>
            <Grid>
                <Row className="home-news">
                    <Col xs={12} md={8} className="home-news-image">
                        <Image src={logo} responsive />
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
                <Row>
                    <Col xs={6} md={4} className="home-equipment">
                        <h2>Nasz Sprzet</h2>
                        <p>Zobacz Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Adipisci aut consequuntur dolores ipsa nesciunt quasi vel vitae.
                            Quae, reiciendis, veritatis!</p>
                        <Link to="/equipment">
                            <Button bsStyle="primary">Sprzet</Button>
                        </Link>
                    </Col>
                    <Col xs={12} md={8} className="home-news-image">
                        <Image src={logo} responsive />
                    </Col>
                </Row>
                <Row className="home-events">
                    <Col xs={12} md={8} className="home-news-image">
                        <Image src={logo} responsive/>
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
                    <Col xs={6} md={4}>
                        <h2>Kontakt</h2>
                        <p>Zobacz Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Adipisci aut consequuntur dolores ipsa nesciunt quasi vel vitae.
                            Quae, reiciendis, veritatis!</p>
                        <Link to="/form">
                            <Button bsStyle="primary">Form</Button>
                        </Link>
                    </Col>
                    <Col xs={12} md={8} className="home-news-image">
                        <Image src={logo} responsive />
                    </Col>
                </Row>
            </Grid>
        </main>
            </div>
        )
    }
}