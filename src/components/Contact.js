
import { useState } from "react";
import 'animate.css';
import {Row, Col, Container} from 'react-bootstrap';
import contactImage from '../assets/img/contactimgmain.png';
import TrackVisibility from "react-on-screen";


export const Contact = () => {
   const contactFormDetails = {
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    message: '',
    contactNumber: ''
   }

   const [contactForm, setContactForm] = useState(contactFormDetails);
   const [buttonText, setButtonText] = useState('send');
   const [status, setStatus] = useState({});


    function onFormUpdate(category, value) {
        setContactForm({
            ...contactForm,
            [category]: value
        });
    }   

    const formRefresh = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("http://localhost:5000/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(contactForm),
        });

        setButtonText("Send Message");
        let result = await response.json();
        setContactForm(contactFormDetails);
        if (result.code === 200) {
          setStatus({ succes: true, message: 'Message Recieved!'});
        } else {
          setStatus({ succes: false, message: 'Message Failed To Send! Please Try Again.'});
        }
      };

   return (
    <section className="contact" id="connect">
        <Container>
            <Row className="align-items-center">
                <Col size={12} md={6}>
                <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImage} alt="Contact Us"/>
                }
            </TrackVisibility>
                </Col>
                <Col size={12} md={6}>
                    <h2>Need Our Help?</h2>
                    <form onFormComplete={formRefresh}>
                        <Row>
                            <Col sm={6} className="px-1">
                                <input type="text" value={contactFormDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate ('firstName', e.target.value)} />
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="text" value={contactFormDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate ('lastName', e.target.value)} />
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="text" value={contactFormDetails.email} placeholder="Email" onChange={(e) => onFormUpdate ('email', e.target.value)} />
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="text" value={contactFormDetails.companyName} placeholder="Company Name" onChange={(e) => onFormUpdate ('companyName', e.target.value)} />
                            </Col>

                            <Col sm={6} className="px-1">
                                <input type="text" value={contactFormDetails.message} placeholder="Message" onChange={(e) => onFormUpdate ('message', e.target.value)} />
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="text" value={contactFormDetails.contactNumber} placeholder="Contact Number" onChange={(e) => onFormUpdate ('contactNumber', e.target.value)} />
                            </Col>
                            <Col>
                                <textarea rows="6" value={contactFormDetails.message} placeholder="Message" onChange={(e) => onFormUpdate ('message', e.target.value)}></textarea>
                                <button className="btn btn-flex" type="submit"><span>{buttonText}</span></button>
                            </Col>
                            {
                            status.message &&
                            <Col>
                            <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                            </Col>
                            }
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
   )
   

}