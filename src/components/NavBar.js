import React from "react";
import CartWidget from "./CartWidget";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import "./Nav.css"

const NavBar = () => {
	return (
		<div className="container">
			<Navbar bg="dark" variant="dark" className="navBar">
			<Navbar.Brand>Tienda de Ropa</Navbar.Brand>
				<Nav className="nav">
					<Link to="/"><Button variant="outline-secondary">Inicio</Button>{' '}</Link>
					<Link to="/categoria/remera"><Button variant="outline-secondary">Remeras</Button></Link>
					<Link to="/categoria/chomba"><Button variant="outline-secondary">Chombas</Button></Link>
					<Link to="/categoria/camiseta"><Button variant="outline-secondary">Camiseta</Button></Link>
					<Link to="/categoria/camisa"><Button variant="outline-secondary">Camisa</Button></Link>
					<Link to="/cart"><CartWidget /></Link>
				</Nav>
			</Navbar>
		</div>
	);
};

export default NavBar;