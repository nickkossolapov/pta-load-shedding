import React from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';

export default function Header(props) {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Pretoria Load Shedding</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <NavItem eventKey={1} href="http://www.tshwane.gov.za/sites/Departments/Public-works-and-infrastructure/Pages/Load-Shedding.aspx" target="_blank">
          Official schedule
        </NavItem>
        <NavItem eventKey={1} href="http://www.tshwane.gov.za/sites/Departments/Public-works-and-infrastructure/Pages/Load-Shedding.aspx#suburblist" target="_blank">
          Suburb list
        </NavItem>
      </Nav>
    </Navbar>
  );
}