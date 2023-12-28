import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import { Row, Col, Button } from 'reactstrap';

import Header from '../Header.jsx';
import { getSingleContenedores } from "../../utils/apicalls.js";

export default function ShowContenedor(){

  const [contenedor, setContenedor] = useState(null);

  const getContenedor = (id) => {
    getSingleContenedores(id).then((contenedor) => {
      setMovie(contenedor);
    });
  }

  const { id } = useParams();

  useEffect(() =>{
    getContenedor(id);
  },[id]);
}