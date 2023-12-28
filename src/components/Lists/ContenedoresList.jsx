import React,{useState,useEffect} from "react";
import { Row, Col, Container, Badge, CardTitle } from "reactstrap";
import { getAllContenedores } from "../../utils/apicalls";

import Header from "../Header";

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

    
//TODO crear la pagina en si en el return
//Con lo que esta hecho coge la informacion de la api y lo guarda en "contenedores"
//lo he hecho con hooks de estado y hooks de efecto
}