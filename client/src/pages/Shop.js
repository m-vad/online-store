import React from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {observer} from "mobx-react-lite";
import TypeBar from "../component/TypeBar";
import BrandBar from "../component/BrandBar";

const Shop = observer(() => {
    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;