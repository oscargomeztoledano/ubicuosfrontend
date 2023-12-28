import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import { Row, Col, Button } from 'reactstrap';

import Header from '../Header.jsx';
import { getSingleBicicletasDisponibles } from "../../utils/apicalls.js";

export default function ShowBiciDispo(){

  const [BiciDispo, setBiciDispo] = useState(null);

  const getBiciDispo = (id) => {
    getSingleBicicletasDisponibles(id).then((BiciDispo) => {
      setBiciDispo(BiciDispo);
    });
  }

  const { id } = useParams();

  useEffect(() =>{
    getBiciDispo(id);
  },[id]);
}