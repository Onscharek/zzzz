
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import './nav.css'
import Contact from '../../pages/Contact';
import { Button } from 'react-bootstrap';

function NavScroll() {
  return (
    <div>
                {/* // notification bar */}
    <div style={{marginBottom:'1px'}} className="notification-bar">
    <p>Free Shipping on Orders Over $100!</p>
    <p>Free Shipping on Orders Over $100!</p>
  </div>

<div  >

<Navbar
  style={{
    paddingLeft: '3%',
    paddingRight: '3%',
    marginTop: '2%',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '0px 0'
  }}
  expand="lg"
  
>
  <Container fluid>
    <Navbar.Brand style={{ paddingRight: '2%' }}>
      <Nav.Link href="/Home">
        <b>Chark-Garment</b>
      </Nav.Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
        <Navbar.Brand>
          <NavDropdown title="Men's Wear" id="navbarScrollingDropdown">
            <NavDropdown.Item href="/Shirts">Shirts</NavDropdown.Item>
            <NavDropdown.Item href="/Shorts">Shorts</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/Pants">Pants</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Brand>
        <Navbar.Brand style={{ paddingRight: '145%' }}>
          <NavDropdown title="Women's Wear" id="navbarScrollingDropdown">
            <NavDropdown.Item href="/Dresses">Dresses</NavDropdown.Item>
            <NavDropdown.Item href="/Tops">Tops</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/Skirts">Skirts & Shorts</NavDropdown.Item>
            <NavDropdown.Item href="/WomensPants">Pants</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Brand>
        <Navbar.Brand>
                              {/* contact  */}
          <Nav.Link > <Contact/> </Nav.Link>

        </Navbar.Brand>
        <Navbar.Brand>
          <Nav.Link href="/ShCart">

          <Button style={{ backgroundColor:'black' ,borderColor:'black',color:'white'}}>
            <ShoppingCartOutlined style={{fontSize:'20px'}}/>
            </Button>
            
          </Nav.Link>
        </Navbar.Brand>
      </Nav>

      <Form style={{paddingRight:'5%'}} className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Nav.Link>
          <b style={{display:'flex', paddingTop:'3%'}}>Search <SearchOutlined /></b>
        </Nav.Link>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>

    </div>
    </div>
  );
}

export default NavScroll;