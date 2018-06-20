import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap'


export default class Footer extends Component {
    render() {
        return (
            <footer>
                <Grid>
                    <Row>
                        <Col xs={2} md={2}>
                            Copyright
                        </Col>
                        <Col xs={2} md={2}>
                            Logo
                        </Col>
                        <Col xs={2} md={2}>
                            Twitter
                        </Col>
                        <Col xs={2} md={2}>
                            Facebook
                        </Col>
                    </Row>
                </Grid>
            </footer>
        )
    }
}