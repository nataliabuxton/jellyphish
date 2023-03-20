import { Col } from 'react-bootstrap';


export const ProductsTabs = ({ title, description, producto }) => {
    return (
        <Col size={12} sm={6} md={4} fluid>
            <div className="prod-imgbx">
                <div className="product-description">
                    <h3>{title}</h3>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    );
}