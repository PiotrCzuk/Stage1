import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap'


export default class Footer extends Component {
    render() {
        return (
            <footer>
                <Grid>
                    <Row>
                        <Col xs={12} md={3}>
                            Copyright
                        </Col>
                        <Col xs={12} md={3}>
                            Logo
                        </Col>
                        <Col xs={12} md={3}>
                            Twitter
                        </Col>
                        <Col xs={12} md={3}>
                            Facebook
                        </Col>
                    </Row>
                </Grid>
            </footer>
        )
    }
}