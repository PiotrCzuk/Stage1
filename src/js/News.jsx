import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';


export default class News extends Component {
    render() {
        return (
            <section className="news-news">
                <Grid>
                    <Row>
                        <Col>
                            <h2>Wiadmosci</h2>
                        </Col>
                    </Row>
                </Grid>
            </section>
        )
    }
}