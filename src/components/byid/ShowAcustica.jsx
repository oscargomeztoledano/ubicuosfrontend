import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import { Row, Col, Button } from 'reactstrap';

import Header from '../Header.jsx';
import { getSingleContaminacionAcustica } from "../../utils/apicalls.js";

export default function ShowAcustica(){

  const [acustica, setAcustica] = useState(null);

  const getacustica = (id) => {
    getSingleContaminacionAcustica(id).then((acustica) => {
      setAcustica(acustica);
    });
  }

  const { id } = useParams();

  useEffect(() =>{
    getacustica(id);
  },[id]);
}