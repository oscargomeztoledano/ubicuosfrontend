import React,{useState,useEffect} from "react";
import { Row, Col, Container, Badge, CardTitle } from "reactstrap";
import { getAllContaminacionAcustica } from "../../utils/apicalls";

import Header from "../Header";

export default function AcusticaList() {
    const [acusticas, setAcusticas] = useState([]);
    
    const getacusticas=()=>{
        getAllContaminacionAcustica().then((acusticas) => {
            setAcusticas(acusticas);
        });
    };

    useEffect(() => {
       getacusticas();
    }, []);

    
//TODO crear la pagina en si en el return
//Con lo que esta hecho coge la informacion de la api y lo guarda en "contenedores"
//lo he hecho con hooks de estado y hooks de efecto
}