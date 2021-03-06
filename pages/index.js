import Head from 'next/head'
import Link from 'next/link'


import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button, Carousel, Image, Card } from 'react-bootstrap'
import NavCustom from '../components/NavCustom'
import CarouselCustom from '../components/CarouselCustom';
import MoneyFormat from '../components/MoneyFormat';


const Home = ({ data }) => (
  <>
    <Head>
      <title>YTShop</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <NavCustom></NavCustom>
    <CarouselCustom></CarouselCustom>

    {/* kategory section */}
    <Container className="mt-5 mb-5">
      <Row className="justify-content-md-center mb-4">
        <Col xs lg="5" className="align-center" align="center">
          <h1 className="devide-title">Kategori</h1>
          <p className="devide-subtitle mt-3"> Aneka kategori produk yang sangat sesuai dengan kebutuhan anda</p>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs="12" lg="4" className="card-custom align-center mb-3" align="center">
          <Image className="imagecover" src="https://eigeradventure.com/media/wysiwyg/eiger/Homepage/Activity_MTNRNG_2.jpg" rounded fluid />
          <Container className="card-category">
            <Row>
              <Col>
                <h1 className="body-color">Hijab</h1>
                <p className="">pilih hijab cantikmu</p>
                {/* <Button variant="btn-primary">Search</Button> */}
              </Col>
            </Row>
          </Container>
        </Col>
        <Col xs="12" lg="4" className="card-custom align-center mb-3" align="center">
          <Image className="imagecover" src="https://eigeradventure.com/media/wysiwyg/eiger/Homepage/Activity_MTNRNG_2.jpg" rounded fluid />
          <Container className="card-category">
            <Row>
              <Col>
                <h1 className="body-color">Hijab</h1>
                <p className="">pilih hijab cantikmu</p>
                {/* <Button variant="btn-primary">Search</Button> */}
              </Col>
            </Row>
          </Container>
        </Col>
        <Col xs="12" lg="4" className="card-custom align-center mb-3" align="center">
          <Image className="imagecover" src="https://eigeradventure.com/media/wysiwyg/eiger/Homepage/Activity_MTNRNG_2.jpg" rounded fluid />
          <Container className="card-category">
            <Row>
              <Col>
                <h1 className="body-color">Hijab</h1>
                <p className="">pilih hijab cantikmu</p>
                {/* <Button variant="btn-primary">Search</Button> */}
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
    {/* kategory section */}

    {/* terlaris section */}
    <Container className="mt-5 mb-3">
      <Row className="justify-content-md-center mb-3">
        <Col xs lg="5" className="align-center" align="center">
          <h1 className="devide-title">Produk Hot</h1>
          <p className="devide-subtitle mt-3"> Aneka kategori produk yang sangat sesuai dengan kebutuhan anda</p>
          {/* <p className="devide-subtitle mt-3">{data.data.map(t => { return <p>tes</p> })}</p> */}
        </Col>
      </Row>

      <Row className="justify-content-md-start">

        {/* <p className="devide-subtitle mt-3">{data.data.map((post) => (<li>{post.title}</li>))}</p> */}

        {data.data.map((product, index) => (
          <Card key={index} xs="12" lg="3" className="no-border col-12 col-md-3 hover-card">
            <Link href={`/product/detail/${product._id}`}>
              <Card.Img variant="top" src={product.attacments[0]} />
            </Link>
            <Card.Body className="pl-0">
              <Row className="d-flex justify-content-between">
                <Card.Title style={{ fontWeight: 'bold', fontSize: '1rem' }} className="ml-3">{product.title}</Card.Title>
                {/* <Card.Title style={{ fontSize: '1rem' }} className="ml-3">Rp. 12.000</Card.Title> */}
                <Card.Title style={{ fontSize: '0.9rem' }} className="ml-3">
                  <MoneyFormat value={product.price} />
                </Card.Title>
              </Row>
              <Card.Text className="font-weight-light">
                {product.category_id.name}
              </Card.Text>
              {/* <Link href="/product/detail/603f1a3e16837f07f4ee248e"> */}
              <Link href={`/product/detail/${product._id}`}>
                <Button variant="outline-primary" >Belanja</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
    {/* terlaris section */}


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

  </>
)

// This gets called on every request
export async function getServerSideProps() {
  //get local env
  console.log(process.env.url);

  // Fetch data from external API
  const res = await fetch(`${process.env.url}/api/product`)
  const data = await res.json()
  console.log(data);
  // Pass data to the page via props
  return { props: { data } }
}

export default Home