import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function header() {
    return (
        <>
            <Navbar bg="primary" variant="dark"> 
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        {/* <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                    </Nav> 
            </Navbar>
            <br />
        </>
    );
}

export default header;