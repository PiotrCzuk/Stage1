import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <NavBar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Stage1</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass={Link} to="/">Home</NavItem>
                        <NavItem eventKey={2} componentClass={Link} to="/about">Home</NavItem>
                        <NavItem eventKey={3} componentClass={Link} to="/news">Home</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </NavBar>
        )
    }
}