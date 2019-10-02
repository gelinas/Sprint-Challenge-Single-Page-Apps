import React from "react";
import { Nav, NavItem, NavLink as StrapLink } from 'reactstrap';


export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Nav tabs>
        <NavItem><StrapLink href="/">Welcome Page</StrapLink></NavItem>
        <NavItem><StrapLink href="/characters">Character List</StrapLink></NavItem>
      </Nav>
      {/* <Nav tabs>
        <NavItem>
          <NavLink to="/">Welcome Page</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/characters">Character List</NavLink>
        </NavItem>
      </Nav> */}
    </header>
  );
}
