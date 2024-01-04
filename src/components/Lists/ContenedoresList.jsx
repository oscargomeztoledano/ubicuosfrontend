import React,{useState,useEffect} from "react";
import { Row, Col, Container, Badge, CardTitle } from "reactstrap";
import { getAllContenedores } from "../../utils/apicalls";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Header from "../blog/Header"

export default function ContenedoresList() {
    const [contenedores, setContenedores] = useState([]);
    
    const getcontenedores=()=>{
        getAllContenedores().then((contenedores) => {
            setContenedores(contenedores);
        });
    };

    useEffect(() => {
       getcontenedores();
    }, []);
    const defaultTheme = createTheme();

    return contenedores === null?(
        <ThemeProvider theme={defaultTheme}>
         <Container maxWidth="lg">
         <Header/>
         <main style={{ display: 'flex', justifyContent: 'center', height: '100vh' }}>
           cargando informacion, por favor espere
         </main>
         </Container>
 
         </ThemeProvider>
         
     ):(//TODO hacer graficas
       <ThemeProvider theme={defaultTheme}>
       <Container maxWidth="lg">
       <Header/>
       <main>
         <h1>INFORMACION SOBRE...</h1> 
       </main>
       </Container>
 
       </ThemeProvider>
     );
}