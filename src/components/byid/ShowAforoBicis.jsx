import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import { Row, Col, Button } from 'reactstrap';

import Header from '../Header.jsx';
import { getSingleAforoBicicletas } from "../../utils/apicalls.js";

export default function ShowAforoBici(){

  const [aforoBici, setAforoBici] = useState(null);

  const getAforoBici = (id) => {
    getSingleAforoBicicletas(id).then((aforoBici) => {
      setAforoBici(aforoBici);
    });
  }

  const { id } = useParams();

  useEffect(() =>{
    getAforoBici(id);
  },[id]);
}