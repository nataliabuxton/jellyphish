import { Col, Row, Container } from 'react-bootstrap';


export function ProductsTabs({ title, description }) {
    return (
        <Container fluid>
            <div className="prod-imgbx">
                <div className="product-description">
                    <h3>{title}</h3>
                    <span>{description}</span>
                </div>
            </div>
            </Container>
    );
}