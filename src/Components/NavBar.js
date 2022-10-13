import CartWidget from './CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';



function NavBar() {
    return (
        <div>


            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Sos Magia</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home"><Button variant="outline-secondary">Inicio</Button>{' '}</Nav.Link>
                        <Nav.Link href="#history"><Button variant="outline-secondary">Quienes Somos</Button>{' '}</Nav.Link>
                        <Nav.Link href="#prducts"><Button variant="outline-secondary">Productos</Button>{' '}</Nav.Link>
                        <Nav.Link href="#Cart" className=''><CartWidget /></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
        </div>
    );
}


export default NavBar;

