import React, {Component} from 'react';
import SingleEventImage from './SingleEventImage';
import {Grid, Row, Col,} from 'react-bootstrap';


const API = 'http://localhost:3000/events';



export default class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            isLoaded: false,
        }
    }
    handleExpand() {
        console.log("It was clicked")
    }

    componentDidMount() {

        fetch(API)
            .then(res => res.json())
            .then(data => this.setState({
                events: data,
                isLoaded: true})
            );
    }

    render() {
        const {events, isLoaded} = this.state;
        if (!isLoaded) {
            return <p>Loading...</p>
        } else {
            return (
                <Grid>
                    <Row>
                        <ul>
                            {events.map(event => <li key={event.id}>
                                <Col xs={12} md={6}>
                                    <SingleEventImage event={event} onClick={this.handleExpand()}/>
                                </Col>
                                <Col xs={12} md={6}>
                                    <h3>{event.data} {event.title}</h3>
                                    <p>{event.description}</p>
                                </Col>
                            </li>)}
                        </ul>
                    </Row>
                </Grid>
            )
        }

    }
}