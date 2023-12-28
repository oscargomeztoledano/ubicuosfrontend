import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import { Row, Col, Button } from 'reactstrap';

import Header from '../Header.jsx';
import { getSingleInstalacionesFotovoltaicas } from "../../utils/apicalls.js";

export default function ShowFotovoltaica(){

  const [fotovoltaica, setFotovoltaica] = useState(null);

  const getfotovoltaica = (id) => {
    getSingleInstalacionesFotovoltaicas(id).then((fotovoltaica) => {
      setFotovoltaica(fotovoltaica);
    });
  }

  const { id } = useParams();

  useEffect(() =>{
    getfotovoltaica(id);
  },[id]);
}