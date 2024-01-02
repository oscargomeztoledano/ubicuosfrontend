import React,{useState,useEffect} from "react";
import { Row, Col, Container, Badge, CardTitle } from "reactstrap";
import { getAllContaminacionAcustica } from "../../utils/apicalls";
import Header from "../Header";

export default function AcusticaList() {
    const [acusticas, setAcusticas] = useState(null);
    
    const getacusticas=()=>{
      getAllContaminacionAcustica().then((acusticas) => {
        setAcusticas(acusticas);
      }).catch((error) => {
        console.error("Error fetching data: ", error);
      });
    };

    useEffect(() => {
       getacusticas();
    }, []);

    return acusticas === null?(
        <div>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <h1 class="text-black">Loading...</h1>
        </Row>
      </div>
    ):(
        <div>
            <Row>
                <Col>
                <Header />
                </Col>
            </Row>
            <Row>
              <h1>hola de prueba</h1>
            </Row>

        </div>
    );
    }