import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import servicesImg1 from "../assets/img/service1.png";
import servicesImg2 from "../assets/img/service2.png";
import servicesImg3 from "../assets/img/service3.png";
import servicesImg4 from "../assets/img/service4.png";

export const Services = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    
    }
      return (
        <section className="services" id="services">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="services-bx wow zoomIn">
                        <h2>Services</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolorum nam labore repudiandae quam neque, beatae id quisquam laudantium, nesciunt voluptas incidunt ut est explicabo? Explicabo accusantium dignissimos in rem!</p>
                <Carousel responsive={responsive} infinite={true} className="services-slider">
                    <div className="item">
                        <img className='services-img' src={servicesImg1} alt="Img" />
                        <h5>Web & Software Security</h5>
                    </div>
                    <div className="item">
                    <img className='services-img' src={servicesImg2} alt="Img" />
                        <h5>Scamware Protection Plan</h5>
                    </div>
                    <div className="item">
                    <img  className='services-img' src={servicesImg3} alt="Img" />
                        <h5>Data Managment</h5>
                    </div>
                    <div className="item">
                    <img className='services-img' src={servicesImg4} alt="Img" />
                        <h5>Safety Training</h5>
                    </div>
                </Carousel>
                    </div>
                </div>
            </div>
        </div>
        </section>
        );
      }