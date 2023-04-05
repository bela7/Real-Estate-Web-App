import React from 'react';
import { Navbar, NavbarBrand, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as RRNavLink, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Navigation.css';

const Navigation = () => {
  const navigate = useNavigate();

  const handleInchirieriClick = () => {
    navigate('/inchirieri');
  };
  const handleVanzariClick = () => {
    navigate('/vanzari');
  };
  

  return (
    <Navbar color="black" dark expand="md" style={{ padding: '20px' }} className="fixed-top">
      <NavbarBrand style={{ fontSize: '30px' }}>My Dream Home</NavbarBrand>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink tag={RRNavLink} exact to="/">
            Acasă
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/noutati">
            Noutăți
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/despre-noi">
            Despre Noi
          </NavLink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret onClick={handleInchirieriClick}>
            Închirieri
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag={HashLink} to="/inchirieri#apartamente">
              Apartamente
            </DropdownItem>
            <DropdownItem tag={HashLink} to="/inchirieri#garsoniere">
            Garsoniere
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret onClick={handleVanzariClick}>
            Vânzări
          </DropdownToggle>
          <DropdownMenu>
          <DropdownItem tag={HashLink} to="/vanzari#garsoniere">
            Garsoniere
          </DropdownItem>
          <DropdownItem tag={HashLink} to="/vanzari#apartamente">
            Apartamente
          </DropdownItem>

          </DropdownMenu>
        </UncontrolledDropdown>
        <NavItem>
          <NavLink tag={RRNavLink} to="/contact">
            Contact
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Navigation; 