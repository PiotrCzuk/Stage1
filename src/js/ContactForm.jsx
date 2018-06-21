import React, {Component} from 'react';
import {Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';


export default class ContactForm extends Component {
    constructor(props, context){
        super(props, context);
        this.state = {
            name: '',
            email: '',
            text: '',
            validation: [],
            stateSend: false,
            value: ""
        };

    }



    changeHandler = (event, element) => {
        this.setState({
            [element]: event.target.value
        })
    };

    getValidationName() {
        const length = this.state.name.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }
    getValidationEmail() {
        const email = this.state.email;
        if (email.indexOf("@") === 1) return 'success';
        else if (email.indexOf("@") === -1 && email.length > 0) return 'error';
        return null;
    }
    getValidationTextArea() {
        const length = this.state.text.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }


    render() {
        return (
        <Grid>
            <Row>
                <Col xs={12} md={6}>
                    <Form horizontal onSubmit={this.submit}>
                        <FormGroup
                            controlId="formName"
                            validationState={this.getValidationName()}
                        >
                            <ControlLabel>Podaj swoje imię i nazwisko:</ControlLabel>
                            <FormControl
                                type="text"
                                value={this.state.name}
                                placeholder="Imię i Nazwisko"
                                onChange={e => this.changeHandler(e, "name")}
                            />
                            <FormControl.Feedback />
                        </FormGroup>
                        <FormGroup
                            controlId="formEmail"
                            validationState={this.getValidationEmail()}
                        >
                            <ControlLabel>Podaj swój email</ControlLabel>
                            <FormControl
                                type="email"
                                value={this.state.email}
                                placeholder="email"
                                onChange={e => this.changeHandler(e, "email")}
                            />
                            <FormControl.Feedback />
                        </FormGroup>
                        <FormGroup
                            controlId="formControlsTextarea"
                            validationState={this.getValidationTextArea()}
                        >
                            <ControlLabel>Twoja Wiadomość</ControlLabel>
                            <FormControl
                                componentClass="textarea"
                                value={this.state.text}
                                placeholder="Twoja Wiadmość"
                                onChange={e => this.changeHandler(e, "text")}/>
                        </FormGroup>
                        <input onChange={this.changeHandler} type="submit" value="Skontaktuj się" />
                    </Form>


                </Col>
                <Col xs={12} md={6}>
                    <h2>Skontaktuj się z nami</h2>
                    <p>Chesz zorganizować koncert, imprezę firmową lub mniejszy event?</p>
                    <p>Napisz do nas z chęcią Ci w tym pomożemy!</p>
                </Col>

            </Row>
        </Grid>
    );
    }
}
