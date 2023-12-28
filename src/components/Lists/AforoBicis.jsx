import React,{useState,useEffect} from "react";
import { Row, Col, Container, Badge, CardTitle } from "reactstrap";
import { getAllAforoBicicletas } from "../../utils/apicalls";

import Header from "../Header";

export default function AforoBicicletas() {
    const [AforoBicicletas, setAforoBicicletas] = useState([]);
    
    const getAforoBicicletas=()=>{
        getAllAforoBicicletas().then((AforoBicicletas) => {
            setAforoBicicletas(AforoBicicletas);
        });
    };

    useEffect(() => {
       getAforoBicicletas();
    }, []);

    
//TODO crear la pagina en si en el return
//Con lo que esta hecho coge la informacion de la api y lo guarda en "contenedores"
//lo he hecho con hooks de estado y hooks de efecto
}