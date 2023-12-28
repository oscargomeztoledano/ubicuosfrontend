import React,{useState,useEffect} from "react";
import { Row, Col, Container, Badge, CardTitle } from "reactstrap";
import { getAllAforoPersonas } from "../../utils/apicalls";

import Header from "../Header";

export default function AforoPersonasList() {
    const [aforopersonas, setAforoPersonas] = useState([]);
    
    const getAforoPersonas=()=>{
        getAllAforoPersonas().then((aforopersonas) => {
            setAforoPersonas(aforopersonas);
        });
    };

    useEffect(() => {
       getAforoPersonas();
    }, []);

    
//TODO crear la pagina en si en el return
//Con lo que esta hecho coge la informacion de la api y lo guarda en "contenedores"
//lo he hecho con hooks de estado y hooks de efecto
}