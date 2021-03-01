import Head from 'next/head'


import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button, Carousel, Image, Card } from 'react-bootstrap'
import NavCustom from '../components/NavCustom'
import CarouselCustom from '../components/CarouselCustom';


const Home = () => (
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
        </Col>
      </Row>
      <Row className="justify-content-md-start">
        <Card xs="12" lg="3" className="no-border col-12 col-md-3 hover-card">
          <Card.Img variant="top" src="https://eigeradventure.com/media/wysiwyg/eiger/Homepage/Activity_MTNRNG_2.jpg" />
          <Card.Body className="pl-0">
            <Row className="d-flex justify-content-between">
              <Card.Title style={{ fontWeight: 'bold', fontSize: '1rem' }} className="ml-3">Card Title</Card.Title>
              <Card.Title style={{ fontSize: '1rem' }} className="ml-3">Rp. 12.000</Card.Title>
            </Row>
            <Card.Text className="font-weight-light">
              Hijab
            </Card.Text>
            <Button variant="outline-primary" >Belanja</Button>
          </Card.Body>
        </Card>
  
        <Card xs="12" lg="3" className="no-border col-12 col-md-3 hover-card">
          <Card.Img variant="top" src="https://eigeradventure.com/media/wysiwyg/eiger/Homepage/Activity_MTNRNG_2.jpg" />
          <Card.Body className="pl-0">
            <Row className="d-flex justify-content-between">
              <Card.Title style={{ fontWeight: 'bold', fontSize: '1rem' }} className="ml-3">Card Title</Card.Title>
              <Card.Title style={{ fontSize: '1rem' }} className="ml-3">Rp. 12.000</Card.Title>
            </Row>
            <Card.Text className="font-weight-light">
              Hijab
            </Card.Text>
            <Button variant="outline-primary" >Belanja</Button>
          </Card.Body>
        </Card>
  
        <Card xs="12" lg="3" className="no-border col-12 col-md-3 hover-card">
          <Card.Img variant="top" src="https://eigeradventure.com/media/wysiwyg/eiger/Homepage/Activity_MTNRNG_2.jpg" />
          <Card.Body className="pl-0">
            <Row className="d-flex justify-content-between">
              <Card.Title style={{ fontWeight: 'bold', fontSize: '1rem' }} className="ml-3">Card Title</Card.Title>
              <Card.Title style={{ fontSize: '1rem' }} className="ml-3">Rp. 12.000</Card.Title>
            </Row>
            <Card.Text className="font-weight-light">
              Hijab
            </Card.Text>
            <Button variant="outline-primary" >Belanja</Button>
          </Card.Body>
        </Card>
  
        <Card xs="12" lg="3" className="no-border col-12 col-md-3 hover-card">
          <Card.Img variant="top" src="https://eigeradventure.com/media/wysiwyg/eiger/Homepage/Activity_MTNRNG_2.jpg" />
          <Card.Body className="pl-0">
            <Row className="d-flex justify-content-between">
              <Card.Title style={{ fontWeight: 'bold', fontSize: '1rem' }} className="ml-3">Card Title</Card.Title>
              <Card.Title style={{ fontSize: '1rem' }} className="ml-3">Rp. 12.000</Card.Title>
            </Row>
            <Card.Text className="font-weight-light">
              Hijab
            </Card.Text>
            <Button variant="outline-primary" >Belanja</Button>
          </Card.Body>
        </Card>
  
      </Row>
    </Container>
    {/* terlaris section */}


    <Container className="container-fluid border-top mt-5">
      <Row className="mt-1 pt-5 pb-5">
        <Col className="col-12 col-md ">
          <Image src="https://getbootstrap.com/docs/4.1/assets/brand/bootstrap-solid.svg" width="24px" height="24px" />
          <small class="d-block mb-3 text-muted">© 2017-2018</small>
        </Col>

        <Col className="col-12 col-md">
          <h5>Features</h5>
          <ul class="list-unstyled text-small">
            <li><a class="text-muted" href="#">Cool stuff</a></li>
            <li><a class="text-muted" href="#">Random feature</a></li>
            <li><a class="text-muted" href="#">Team feature</a></li>
            <li><a class="text-muted" href="#">Stuff for developers</a></li>
            <li><a class="text-muted" href="#">Another one</a></li>
            <li><a class="text-muted" href="#">Last time</a></li>
          </ul>
        </Col>
        <Col className="col-12 col-md">
          <h5>Features</h5>
          <ul class="list-unstyled text-small">
            <li><a class="text-muted" href="#">Cool stuff</a></li>
            <li><a class="text-muted" href="#">Random feature</a></li>
            <li><a class="text-muted" href="#">Team feature</a></li>
            <li><a class="text-muted" href="#">Stuff for developers</a></li>
            <li><a class="text-muted" href="#">Another one</a></li>
            <li><a class="text-muted" href="#">Last time</a></li>
          </ul>
        </Col>
        <Col className="col-12 col-md">
          <h5>Features</h5>
          <ul class="list-unstyled text-small">
            <li><a class="text-muted" href="#">Cool stuff</a></li>
            <li><a class="text-muted" href="#">Random feature</a></li>
            <li><a class="text-muted" href="#">Team feature</a></li>
            <li><a class="text-muted" href="#">Stuff for developers</a></li>
            <li><a class="text-muted" href="#">Another one</a></li>
            <li><a class="text-muted" href="#">Last time</a></li>
          </ul>
        </Col>
      </Row>
    </Container>

  </>
)

export default Home