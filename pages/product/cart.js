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

    function removeProduct(product_id, idx) {
        console.log("idx", idx);
        setCalculate(false)
        dispatch({
            type: 'DELETE_PRODUCT',
            product: { id: product_id, idx: idx }
        })
    }

    function updateProduct(product_id, idx) {
        setCalculate(!calculate)
        dispatch({
            type: 'UPDATE_PRODUCT',
            product: { id: product_id, idx: idx }
        })
    }

    function updateProductDecrement(product_id, idx) {
        setCalculate(!calculate)
        dispatch({
            type: 'UPDATE_PRODUCT_DECREMENT',
            product: { id: product_id, idx: idx }
        })
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
                    <Col className="product-detail col-12 col-md-8">
                        {count.map((order, idx) => (
                            <Row className="mb-5" key={idx}>
                                <Col className="col-md-2 col-2">
                                    <Image src={order.product.attachments} rounded fluid />
                                </Col>
                                <Col className="col-md-4 col-5">
                                    <h5>{order.product.product_name} </h5>
                                    <p className="font-weight-light">{<MoneyFormat value={order.product.price} />}</p>
                                </Col>
                                <Col className="col-md-4 col-3 justify-content-center align-item-center">
                                    <Row>
                                        {order.product.qty <= 0 ? '' : <Col md={3} sm={6} xs={4} className="justify-content-center">
                                            <Button onClick={() => updateProductDecrement(order.product.id, idx)} variant="warning" block>-</Button>
                                        </Col>}

                                        <Col md={1} sm={6} xs={4}>
                                            <p>{order.product.qty}</p>
                                        </Col>

                                        <Col md={3} sm={6} xs={4} className="justify-content-center">
                                            <Button onClick={() => updateProduct(order.product.id, idx)} variant="warning" block>+</Button>
                                        </Col>
                                    </Row>
                                </Col>

                                <Col md={2} sm={12}>
                                    <Button onClick={() => removeProduct(order.product.id, idx)} variant="warning" block>
                                        Hapus
                                    </Button>
                                </Col>
                                {/* <Col className="col-md-2 col-2">
                                    <Button onClick={() => updateProduct(order.product.id, idx)} variant="warning" block>u</Button>
                                </Col> */}
                            </Row>
                        ))}
                        {/* <Button onClick={() => removeProduct("tes")} variant="warning" block>x</Button> */}

                    </Col>

                    {/* amount */}
                    < Col className="product-detail col-12 col-md-4 bg-grey bg-light pt-3 h-100" >
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