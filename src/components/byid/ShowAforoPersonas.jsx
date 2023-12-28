import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import { Row, Col, Button } from 'reactstrap';

import Header from '../Header.jsx';
import { getSingleAforoPersonas } from "../../utils/apicalls.js";

export default function ShowAforoPersona(){

  const [aforoPersona, setAforoPersona] = useState(null);

  const getAforoPersona = (id) => {
    getSingleAforoPersonas(id).then((aforoPersona) => {
      setAforoPersona(aforoPersona);
    });
  }

  const { id } = useParams();

  useEffect(() =>{
    getAforoPersona(id);
  },[id]);
}