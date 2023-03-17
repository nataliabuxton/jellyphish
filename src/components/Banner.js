import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightSquare } from "react-bootstrap-icons";
import headerImg from "../assets/img/header.png";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [" SAFETY...", " SERENITY...", " SECURITY..."];  
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(30 - 1.1 * 20);
    const period = 700;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={5} className="colimg">
                        <img src={headerImg} alt="HeaderImg"/>
                    </Col>
                    <Col xs={12} md={6} xl={7} className="coltext">
                        <span className="welcome-text">We are <span className="enhancedTxt">  JELLYPHISH.</span></span>
                        <h1>{`Welcome to `}<span className="wrap">{text}</span>{` `}</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus ut a! Reiciendis hic voluptatem quidem tenetur debitis quas ipsa adipisci aut quos necessitatibus, modi ad non soluta. Quam, eaque!</p>
                        <button onClick={()=> console.log('connect')} className="btn btn--flex">
                            CONTACT US
                            <ArrowRightSquare size={25}/>
                        </button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

