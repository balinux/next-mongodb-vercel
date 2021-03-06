import Head from 'next/head';
import { useState, useEffect } from 'react';

import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button, Carousel, Image, Card, Breadcrumb, Tabs, Tab, Modal } from 'react-bootstrap'
import FooterWeb from '../../components/FooterWeb'
import NavCustom from '../../components/NavCustom'
import MoneyFormat from '../../components/MoneyFormat'


import { useCount, useDispatchCount } from '../../components/Counter';
const Checkout = () => {
    const count = useCount()
    const dispatch = useDispatchCount()

    const [amount, setAmount] = useState(0)
    const [calculate, setCalculate] = useState(true)

    useEffect(() => {
        calculateAmount()
    }, [calculate]);

    function calculateAmount(params) {
        var sum = count.reduce(function (a, b) {
            let jumlah = a + (b.product.qty * b.product.price)
            // console.log("amount",jumlah);
            return jumlah;
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
                    <Breadcrumb.Item active>Checkout</Breadcrumb.Item>
                </Breadcrumb>
            </Container>
            {/* breadcrumb */}

            {/* cart main */}
            <Container className="mt-5 mb-3">
                <Row className="justify-content-md-start">
                    <Col className="product-detail col-12 col-md-7">
                        <Form>
                            <Form.Group controlId="formBasicText">
                                <Form.Label>Nama Lengkap</Form.Label>
                                <Form.Control type="Text" placeholder="Masukkan nama anda" />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Alamat Lengkap</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>

                            <Form.Group controlId="formBasicText">
                                <Form.Label>Nomor HP</Form.Label>
                                <Form.Control type="Text" placeholder="Masukkan nomor hp anda" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Alamat Email </Form.Label>
                                <Form.Control type="email" placeholder="Masukkan email" />
                                <Form.Text className="text-muted">jangan pernah membagikan email anda ke roang lain.</Form.Text>
                            </Form.Group>

                            {/* <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group> */}

                            {/* <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                             */}
                            <Button variant="primary" type="submit">Order</Button>
                        </Form>
                    </Col>
                    <Col className="product-detail col-12 col-md-5 bg-grey bg-light pt-3 h-100">
                        <h5 className="font-weight-bold">Ringkasan belanja</h5>
                        <hr />
                        <p className="font-weight-bold"> Produk</p>
                        {count.map((order, idx) => (
                            <Row className="justify-content-between px-3">
                                <p >{order.product.product_name}</p>
                                <p>{order.product.qty}</p>
                                <p>{<MoneyFormat value={order.product.price * order.product.qty} />}</p>
                            </Row>
                        ))}
                        {/* <Row className="justify-content-between px-3">
                            <p >Orange Airsuit</p>
                            <p>2</p>
                            <p>Rp.200.000</p>
                        </Row> */}
                        <hr />
                        <Row className="justify-content-between px-3">
                            <p className="font-weight-bold">Total Belanja:</p>
                            <p>{<MoneyFormat value={amount} />}</p>
                        </Row>
                    </Col>
                </Row>
            </Container>

            {/* cart main */}

            <FooterWeb />
        </div>
    );
}

export default Checkout;