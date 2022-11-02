import CartWidget from './CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';



const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand >Tienda Ropa</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href={`/`}><Button variant="outline-secondary">Inicio</Button>{' '}</Nav.Link>
                        <Nav.Link href={`/category/Remera`}><Button variant="outline-secondary">Remeras</Button>{' '}</Nav.Link>
                        <Nav.Link href={`/category/Chomba`} ><Button variant="outline-secondary">Chombas</Button>{' '}</Nav.Link>
                        <Nav.Link href={`/category/Seleccion`} ><Button variant="outline-secondary">Selección</Button>{' '}</Nav.Link>
                        <Nav.Link href={`/category/Camisa`}><Button variant="outline-secondary">Camisa</Button>{' '}</Nav.Link>
                        <Nav.Link href="#Cart" className='chico'><CartWidget /></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
        </div>

    );
}


export default NavBar;

