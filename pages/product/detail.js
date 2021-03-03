import Head from 'next/head';
import Link from 'next/link'

import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button, Carousel, Image, Card, Breadcrumb, Tabs, Tab, Modal } from 'react-bootstrap'
import FooterWeb from '../../components/FooterWeb'
import NavCustom from '../../components/NavCustom'
import { useState } from 'react'

import { useCount, useDispatchCount } from '../../components/Counter';

const Detail = () => {

    const count = useCount()
    const dispatch = useDispatchCount()

    // modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const storeProduct = (event) => {
        dispatch({
            type: 'STORE_PRODUCT',
            product: { id: 123213, prdocut_name: "12321" }
        })
        handleShow()
    }


    return (
        <div>
            <Head>
                <title>detail</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavCustom />

            <Container>
                <Breadcrumb className="pb-2 pt-3 breadcrumb-custom" style={{ background: '#e9ecef' }}>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                        Produk
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Detail - Celana keren</Breadcrumb.Item>
                </Breadcrumb>
            </Container>

            <Container className="mt-5 mb-3">
                <Row className="justify-content-md-start">
                    <Carousel className="col-12 col-md-7">
                        <Carousel.Item >
                            <img
                                className="d-block w-100"
                                src="https://eigeradventure.com/media/weltpixel/owlcarouselslider/images/w/e/web_banner_cw_1366_x_630_1_.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img
                                className="d-block w-100"
                                src="https://eigeradventure.com/media/weltpixel/owlcarouselslider/images/w/e/web_banner_cw_1366_x_630_1_.jpg"
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://eigeradventure.com/media/weltpixel/owlcarouselslider/images/w/e/web_banner_cw_1366_x_630_1_.jpg"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                    <Col className="product-detail col-12 col-md-5">
                        <h2 className="font-weight-bold">Celana Keren</h2>
                        <p className="font-weight-bold">Rp. 200.000</p>
                        <p className="font-weight-light"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        <Button variant="outline-primary my-5 " onClick={storeProduct} >Belanja</Button>
                        <p className="font-weight-light" style={{ fontSize: 13 }}>SKU:033</p>
                        <p className="font-weight-light" style={{ fontSize: 13 }}>Category: Clothes</p>
                        <p className="font-weight-light" style={{ fontSize: 13 }} >Tags: Clothes, Lifestyle</p>
                        {/* <p className="font-weight-light" style={{ fontSize: 13 }} >Count: {count}</p> */}
                        <p className="font-weight-light" style={{ fontSize: 13 }} >Count: {JSON.stringify(count.length)}</p>
                        <Row>
                            {/* <Button variant="outline-primary my-5 mr-2" onClick={handleIncrease} >add</Button>
                            <Button variant="outline-primary my-5 " onClick={handleIncrease15}>remove</Button> */}
                            <Button variant="outline-primary my-5 " onClick={storeProduct}>storeProduct</Button>
                        </Row>
                    </Col>
                </Row>
            </Container>

            {/* tabs */}
            <Container className="mt-5 mb-3" >
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Home">
                        <p>Lorem ipsum dolor sit amet, saepe vitae gubergren pro cu, sit eros animal invidunt ei, ex nec munere legere incorrupte. Eum an vocent commodo referrentur, no veniam maiestatis vim. Est verear nusquam delicata id, mea natum movet eripuit at. Eu quot virtute usu, nonumy eruditi suscipit duo et. Nam eu dicta tamquam apeirian, has ei verear periculis vituperatoribus. Est summo nemore ne. Nam ex posse argumentum eloquentiam, saepe similique interpretaris nec ex, ridens suscipit scriptorem ex mel.</p>
                    </Tab>
                    <Tab eventKey="profile" title="Profile">
                        <p>Weight 	2 kg
                        Dimensions 	20 × 10 × 5 cm</p>
                    </Tab>
                </Tabs>
            </Container>
            {/* end tabs */}

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Barang berhasil ditambah</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    I will not close if you click outside me. Don't even try to press
                    escape key.
        </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                    <Link href="/product/cart">
                        <Button variant="primary">Check Out</Button>
                    </Link>
                </Modal.Footer>
            </Modal>

            <FooterWeb />
        </div>
    )
}

export default Detail