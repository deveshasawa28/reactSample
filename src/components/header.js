import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function header () {
  return (
    <>
      <Navbar bg='primary' variant='dark'>
        <Navbar.Brand href='/'>Logo</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href='/list'>List Data</Nav.Link>
          <Nav.Link href='/menu2'>Menu-2</Nav.Link>
        </Nav>
      </Navbar>
      <br />
    </>
  )
}

export default header
