import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button, Carousel, Image, Card } from 'react-bootstrap'


const FooterWeb = () => {
    return (
        <Container className="container-fluid border-top mt-5">
            <Row className="mt-1 pt-5 pb-5">
                <Col className="col-12 col-md ">
                    <Image src="https://getbootstrap.com/docs/4.1/assets/brand/bootstrap-solid.svg" width="24px" height="24px" />
                    <small className="d-block mb-3 text-muted">© 2017-2018</small>
                </Col>

                <Col className="col-12 col-md">
                    <h5>Features</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="#">Cool stuff</a></li>
                        <li><a className="text-muted" href="#">Random feature</a></li>
                        <li><a className="text-muted" href="#">Team feature</a></li>
                        <li><a className="text-muted" href="#">Stuff for developers</a></li>
                        <li><a className="text-muted" href="#">Another one</a></li>
                        <li><a className="text-muted" href="#">Last time</a></li>
                    </ul>
                </Col>
                <Col className="col-12 col-md">
                    <h5>Features</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="#">Cool stuff</a></li>
                        <li><a className="text-muted" href="#">Random feature</a></li>
                        <li><a className="text-muted" href="#">Team feature</a></li>
                        <li><a className="text-muted" href="#">Stuff for developers</a></li>
                        <li><a className="text-muted" href="#">Another one</a></li>
                        <li><a className="text-muted" href="#">Last time</a></li>
                    </ul>
                </Col>
                <Col className="col-12 col-md">
                    <h5>Features</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="#">Cool stuff</a></li>
                        <li><a className="text-muted" href="#">Random feature</a></li>
                        <li><a className="text-muted" href="#">Team feature</a></li>
                        <li><a className="text-muted" href="#">Stuff for developers</a></li>
                        <li><a className="text-muted" href="#">Another one</a></li>
                        <li><a className="text-muted" href="#">Last time</a></li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default FooterWeb