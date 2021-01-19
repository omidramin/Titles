import React from "react";
import Navbar from "react-bootstrap/Navbar";

export const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#Titles">Admin</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
