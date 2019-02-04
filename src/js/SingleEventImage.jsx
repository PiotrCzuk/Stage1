import React, {Component} from 'react';
import {Carousel, Image} from 'react-bootstrap';

export default class SingleEventImage extends Component {

    render() {
        return (
            <Carousel>
                {this.props.event.photos.map(photo => <Carousel.Item key={photo.id}>
                    <Image responsive src={photo.url}/>
                    <Carousel.Caption>
                        <h5>{this.props.event.title}</h5>
                    </Carousel.Caption>
                </Carousel.Item>)}
            </Carousel>
        )
    }
}