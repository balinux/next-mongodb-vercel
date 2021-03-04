import Head from 'next/head';
import Link from 'next/link'
import { useState, useEffect } from 'react';

import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button, Carousel, Image, Card, Breadcrumb, Tabs, Tab, Modal } from 'react-bootstrap'
import FooterWeb from '../../components/FooterWeb'
import NavCustom from '../../components/NavCustom'
import MoneyFormat from '../../components/MoneyFormat'

import { useCount, useDispatchCount } from '../../components/Counter';


const Cart = () => {
    const count = useCount()
    const dispatch = useDispatchCount()
    console.log(count);

    const [amount, setAmount] = useState(0)

    useEffect(() => {
        calculateAmount()
    }, []);

    function calculateAmount(params) {
        var sum = count.reduce(function (a, b) {
            return a + b.product.price;
        }, 0);
        setAmount(sum)
    }

    return (
        <div>
            <Head>
                <title>detail</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavCustom />

            {/* breadcrumb */}
            <Container>
                <Breadcrumb className="pb-2 pt-3 breadcrumb-custom" style={{ background: '#e9ecef' }}>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                        Produk
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Keranjang</Breadcrumb.Item>
                </Breadcrumb>
            </Container>
            {/* breadcrumb */}

            {/* cart main */}
            <Container className="mt-5 mb-3">
                <Row className="justify-content-md-start">
                    <Col className="product-detail col-12 col-md-9">
                        <Row >
                            <Col className="col-md-2">
                                <Image src="https://onea.qodeinteractive.com/wp-content/uploads/2018/08/h-1-list-product-2-600x800.jpg" rounded fluid />
                            </Col>
                            <Col className="col-md-4">
                                <h4>Orange Airsuit</h4>
                                <p>$225.00</p>
                            </Col>
                            <Col className="col-md-4">
                                <p>Quantity: 2</p>
                            </Col>
                            <Col className="col-md-2">
                                <h4>X</h4>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="product-detail col-12 col-md-3 bg-grey bg-light pt-3 h-100">
                        <h5 className="font-weight-bold">Ringkasan belanja</h5>
                        <hr />
                        <Row className="justify-content-between px-3">
                            <p className="font-weight-bold">Total Belanja:</p>
                            {/* <p>Rp.200.000</p> */}
                            <p>{<MoneyFormat value={amount} />}</p>
                        </Row>

                        <hr />
                        <Link href="/product/checkout">
                            {/* <Button variant="primary">Check Out</Button> */}
                            <Button variant="primary my-1" block>Beli</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>

            {/* cart main */}

            <FooterWeb />
        </div>
    );
}

export default Cart;