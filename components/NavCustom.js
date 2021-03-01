import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';

const NavCustom = () => {
    return (
        <Navbar bg="white" className="py-4" expand="lg">
            <Container className="container-fluid">
                <Navbar.Brand href="#home" className="mr-4">YTShop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {/* <Nav.Link href="#home">Home</Nav.Link> */}
                        {/* <Nav.Link href="#link">Product</Nav.Link> */}
                        <NavDropdown title="Product" className="mr-3">
                            <NavDropdown.Item href="#template" > Template Mikrotik</NavDropdown.Item>
                            <NavDropdown.Item href="#baju"> Baju</NavDropdown.Item>
                            <NavDropdown.Item href="#hijab"> Hijab</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Cari" className="mr-sm-2" />
                        <Button variant="outline-primary">Cari</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavCustom;