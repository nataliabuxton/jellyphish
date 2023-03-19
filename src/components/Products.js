import {Nav, Container , Col, Row, Tab} from 'react-bootstrap';
import { ProductsTabs } from "./ProductsTabs";
// import backgroundImageProducts from '../assets/img/productsbackground.jpg';
import product1 from '../assets/img/prodimg1.png';
import product2 from '../assets/img/prodimg2.png';
import product3 from '../assets/img/prodimg3.png';
import product4 from '../assets/img/prodimg4.png';
import product5 from '../assets/img/prodimg5.png';
import product6 from '../assets/img/prodimg6.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';




export const Products = () => {


    const products = [
        {
            title: "The Wave System",
            description: "Design & Development",
            imgUrl: product1,
          },
          {
            title: "ChildSafe Mode",
            description: "ddd",
            imgUrl: product2,
          },
          {
            title: "Koi-Kalm",
            description: "ddd",
            imgUrl: product3,
          },
          {
            title: "Smooth-Sailing",
            description: "ddd",
            imgUrl: product4,
          },
          {
            title: "Shark Start-Up Kits",
            description: "ddd",
            imgUrl: product5,
          },
          {
            title: "Lobster-Shell Storage",
            description: "Storage solution with the rock hard shell of a lobster.",
            imgUrl: product6,
          },
    ];

    return (
        <><section className="product" id="product">
            {/* <Container> */}
                {/* <Row> */}
                    {/* <Col size={12}> */}
                        <TrackVisibility>
                            {({ isVisible }) => <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <h2>Products</h2>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic autem delectus repellendus mollitia nihil sapiente pariatur in, laboriosam, beatae quidem sit et quod, expedita eos atque aliquid nemo assumenda facere!
                                </p>
                                <Tab.Container id="product-tabs" defaultActiveKey="first">
                                    <Nav variant="tabs" className="nav-tabs mb-5 justify-content-center align-items-center" id="pills-tab">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">
                                                <img src={product1} alt="" />
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">
                                            <img src={product2} alt="" />
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">
                                            <img src={product3} alt="" />
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="fourth">
                                            <img src={product4} alt="" />
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="fifth">
                                            <img src={product5} alt="" />
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="sixth">
                                            <img src={product6} alt="" />
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                    <Tab.Pane eventKey="first">
                                        {
                                            products.map((product, index) => {
                                                return (
                                                <ProductsTabs
                                                    key={index}
                                                    {...product}
                                                    />
                                                )
                                            })
                                            }
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">                                        
                                            {
                                            products.map((product, index) => {
                                                return (
                                                <ProductsTabs
                                                    key={index}
                                                    {...product}
                                                    />
                                                )
                                            })
                                            }
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            {
                                            products.map((product, index) => {
                                                return (
                                                <ProductsTabs
                                                    key={index}
                                                    {...product}
                                                    />
                                                )
                                            })
                                            }
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fourth">
                                            {
                                            products.map((product, index) => {
                                                return (
                                                <ProductsTabs
                                                    key={index}
                                                    {...product}
                                                    />
                                                )
                                            })
                                            }
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fifth">
                                            {
                                            products.map((product, index) => {
                                                return (
                                                <ProductsTabs
                                                    key={index}
                                                    {...product}
                                                    />
                                                )
                                            })
                                            }
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="sixth">
                                            {
                                            products.map((product, index) => {
                                                return (
                                                <ProductsTabs
                                                    key={index}
                                                    {...product}
                                                    />
                                                )
                                            })
                                            }                                      
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>}
                     </TrackVisibility>
                {/* </Col> */}
            {/* </Row> */}
        {/* </Container> */}
        {/* <img className="background-image" src={backgroundImageProducts} alt="" /> */}
        </section>
        </>
        )
};