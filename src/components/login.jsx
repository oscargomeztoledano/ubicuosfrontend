import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import config from "../config";
import { useNavigate } from "react-router-dom";
import imagen from "../images/ciudad.jpg"
import { jwtDecode } from "jwt-decode";

import {
    Row,
    Col,
    Container,
    Card,
    CardTitle,
    CardText,
    Media,
  } from "reactstrap";

  var imgStyle = {
    width: "100%",
    height: "100%"  };

function Login() {
    //TODO: implementar la funcionalidad de login y redireccionar a la pagina principal
    const navigate = useNavigate();
    const onSuccess=(res)=>{
        var email=jwtDecode(res.credential).email;
        var name=jwtDecode(res.credential).name;
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('name', name);
        navigate("/home");
    }
    const onEror=()=>{
        console.log("error");
    }

    return (
        <div style={{backgroundColor: 'black', height: '100vh', width: '100vw', overflow:'hidden'}}>
            <Container style={{height:'100%'}}>
                <Row>
                    <Col>
                        <Card inverse body className="text-center" style={{backgroundColor:"black",borderColor:"black",height:'100%'}}>
                            <CardTitle><h1>Bienvenido a Anthem: The Smart City</h1></CardTitle>
                            <CardText>Para poder continuar, por favor inicia sesión con tu cuenta de Google</CardText>
                            <CardText>
                                <GoogleOAuthProvider clientId={config.clientID}>
                                <GoogleLogin onSuccess={onSuccess} 
                                onError={onEror}
                                useOneTap
                                />
                                </GoogleOAuthProvider>
                            </CardText>
                            <Media style={imgStyle} object src={imagen}/>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
         
    );

}
export default Login;
