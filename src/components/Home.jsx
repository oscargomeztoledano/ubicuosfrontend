import React from "react";
import Header from "./Header";
import { Container, Row, Col, Button } from 'reactstrap';
import { useNavigate } from "react-router-dom";
export default function Home() {
    const navigate = useNavigate();
    const acustica = () => {
        navigate("/home/acustica");
    }
    return(
        <div>
            <Header/>
            <Container>
                <Row>
                    <Col md={2}>

                    </Col>
                    <Col md={8}>
                        {/* Aquí va la información del foro */}
                    </Col>
                    <Col md={2}>
                        <div style={{ padding: '10px'}}>
                            <Button block style={{marginBottom: '10px'}} onClick={acustica}>Lista acustica</Button>
                            <Button block style={{marginBottom: '10px'}}>Botón 2</Button>
                            <Button block style={{marginBottom: '10px'}}>Botón 3</Button>
                            <Button block style={{marginBottom: '10px'}}>Botón 4</Button>
                            <Button block style={{marginBottom: '10px'}}>Botón 5</Button>
                            <Button block style={{marginBottom: '10px'}}>Botón 6</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    ); 
}