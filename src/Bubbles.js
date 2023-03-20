import  bubble  from './assets/img/bubble.png';
import { Col, Container } from 'react-bootstrap';
import 'animate.css';

export  const Bubbles = () => {
    return (
        <>
        <Container>
        <div id='bubble-wrap'>
            <div className='bubble1'><img src={bubble} alt="" /></div>
            <div className='bubble2'><img src={bubble} alt="" /></div>
            <div className='bubble3'><img src={bubble} alt="" /></div>
            <div className='bubble4'><img src={bubble} alt="" /></div>
            <div className='bubble5'><img src={bubble} alt="" /></div>
            <div className='bubble6'><img src={bubble} alt="" /></div>
            <div className='bubble7'><img src={bubble} alt="" /></div>
            <div className='bubble8'><img src={bubble} alt="" /></div>
            <div className='bubble9'><img src={bubble} alt="" /></div>
        </div>
        </Container>
        </>
    );
}
