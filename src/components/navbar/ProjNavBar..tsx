import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

 export const Pnavbar = (props:any) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div> 
      <Navbar color="faded" light>
        <NavItem>
          <NavbarBrand to="/" className="mr-auto">Employee Reimbursement</NavbarBrand>
        </NavItem>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <Link to='/login'>LOGIN</Link>
            </NavItem>
            <NavItem>
              <Link to='/users/display'>Users</Link>
            </NavItem>
            <NavItem>
              <Link to='/reimbursements/status/'>Reimbursements</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Pnavbar;