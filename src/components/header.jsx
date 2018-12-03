import React from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';

export default function Header(props) {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">Pretoria Load Shedding</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="http://www.tshwane.gov.za/sites/Departments/Public-works-and-infrastructure/Pages/Load-Shedding.aspx">
            Official schedule
          </NavItem>
        </Nav>
      </Navbar>
    );
}