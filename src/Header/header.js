import React from "react";
import { useNavigate,Link } from "react-router-dom";
import { useState,useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css';
function Header1(props) {
    let navigate = useNavigate()
    let token = localStorage.getItem('token')

    const onClickLogout =()=>{
        localStorage.removeItem('token')
        navigate("/login")
    }
//siva
    
    return (
        <div onClick={onClickLogout}>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <img src="https://images-workbench.99static.com/l4Bn-OBR2-oCY1KHiLW8yqDBnsU=/99designs-contests-attachments/58/58834/attachment_58834881" className="logo-1"/>
          <Navbar.Brand href="#home" style={{color:"lightblue"}} >DevHubs</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home" style={{color:"lightblue"}} >My Profile</Nav.Link>
           <button className="btn btn-primary mx-2">LogOut</button>
          </Nav>
        </Container>
      </Navbar>
      </div>
      );
}
export default Header1;