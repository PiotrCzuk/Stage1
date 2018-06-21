import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';



export default class NavBar extends Component {
    render() {
        return <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/">stage1</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem eventKey={1} href="/equipment" to="/equipment">
                        Sprzet
                    </NavItem>
                    <NavItem eventKey={2} href="/events" to="/events">
                        Realizacje
                    </NavItem>
                    <NavItem eventKey={3} href="/news" to="/news">
                        Wiadomosci
                    </NavItem>
                    <NavItem eventKey={4} href="/about" to="/about">
                        O Nas
                    </NavItem>
                    <NavItem eventKey={5} href="/form" to="/form">
                        Kontakt
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>;


    }
}