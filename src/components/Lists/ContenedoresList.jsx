import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import { getAllContenedores } from "../../utils/apicalls";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MapContainer, TileLayer, Marker, Popup, LayersControl, LayerGroup } from 'react-leaflet';
import L from 'leaflet';
import Footer from '../blog/Footer';
import Sidebar from "../blog/Sidebar";
import Grid from '@mui/material/Grid';

import Header from "../blog/Header"
import '../../styles/map.css';
import 'leaflet/dist/leaflet.css';


const createMarkerIcon = (iconUrl) => {
  return L.icon({
    iconUrl: require(`../../images/${iconUrl}`),
    iconSize: [20, 20], // Tamaño del icono, puedes ajustarlo a tus necesidades
    iconAnchor: [15, 20], // Punto del icono que corresponderá a la ubicación del marcador
    popupAnchor: [-5, -17], // Punto desde donde se abrirá el popup
  });
};

const marker_verde = createMarkerIcon('marker_verde.png');
const marker_amarillo = createMarkerIcon('marker_amarillo.png');
const marker_azul = createMarkerIcon('marker_azul.png');
const marker_gris = createMarkerIcon('marker_gris.png');
const marker_marron = createMarkerIcon('marker_marron.png');

const distritos = ['ARGANZUELA', 'BARAJAS', 'CARABANCHEL', 'CENTRO', 'CHAMARTIN', 'CHAMBERI', 'CIUDAD-LINEAL', 'HORTALEZA', 'LATINA', 'MONCLOA-ARAVACA', 'MORATALAZ', 'RETIRO', 'SALAMANCA', 'SAN BLAS-CANILLEJAS', 'TETUAN', 'USERA', 'VICALVARO', 'VILLAVERDE'];
/* Distritos defectuosos: 'FUENCARRAL-EL PARDO, 'VILLA DE VALLECAS', 'PUENTE DE VALLECAS'*/

export default function ContenedoresList() {
  const [contenedores, setContenedores] = useState([]);
  const [contenedoresPorTipo, setContenedoresPorTipo] = useState({});
  const [contenedoresPorDistrito, setContenedoresPorDistrito] = useState({});
  const [selectedDistrict, setSelectedDistrict] = useState([]);

  const getcontenedores = async () => {
    const data = await getAllContenedores();
    setContenedores(data);

    const tipos = ['ENVASES', 'ORGANICA', 'PAPEL-CARTON', 'RESTO', 'VIDRIO'];
    const contenedoresPorTipo = tipos.reduce((acc, tipo) => {
      acc[tipo] = data.filter(contenedor => contenedor['Tipo Contenedor'] === tipo);

      console.log(acc.length);
      return acc;
    }, {});

    setContenedoresPorTipo(contenedoresPorTipo);

    const contenedoresPorDistrito = distritos.reduce((acc, distrito) => {
      acc[distrito] = data.filter(contenedor => contenedor['Distrito'] === distrito);

      console.log(acc[distrito]);
      return acc;
    }, {});

    setContenedoresPorDistrito(contenedoresPorDistrito);
  };

  const transformarCoordenada = (coordenada) => {
    const sinPuntos = coordenada.replace(/\./g, '');
    return sinPuntos.slice(0, 2) + '.' + sinPuntos.slice(2);
  };

  useEffect(() => {
    getcontenedores();
  }, []);

  // Asegúrate de llamar a getcontenedores en algún lugar, por ejemplo, en un efecto de React:

  const defaultTheme = createTheme();

  const renderMarkers = (tipo, icon) => (
    contenedoresPorTipo[tipo] && contenedoresPorTipo[tipo]
      .filter(contenedor => contenedor['Distrito'] === selectedDistrict)
      .map((contenedor, index) => (
        <Marker
          key={index}
          position={[
            transformarCoordenada(`${contenedor['LATITUD']}`),
            transformarCoordenada(`${contenedor['LONGITUD']}`)
          ]}
          icon={icon}
        />
      ))

  );

  const posi = [40.416775, -3.70379];

  return contenedores === null ? (
    <ThemeProvider theme={defaultTheme}>
      <Container maxWidth="lg">
        <Header />
        <main style={{ display: 'flex', justifyContent: 'center', height: '100vh' }}>
          cargando informacion, por favor espere
        </main>
      </Container>

    </ThemeProvider>


  ) : (//TODO hacer graficas
    <ThemeProvider theme={defaultTheme}>
      <Container maxWidth="lg">
        <Header />
        <main>

          <h2>Contenedores del distrito {selectedDistrict}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '5px', width: '100%' }}>
  {distritos.map(distrito => (
    <button
      key={distrito}
      onClick={(e) => {
        e.preventDefault();
        setSelectedDistrict(distrito);
      }}
      className={`btn ${selectedDistrict === distrito ? 'btn-selected' : ''}`}
      style={{
        width: '100%',
        height: '40px',
        fontSize: '12px', // Tamaño de la fuente reducido a 12px
        padding: '5px', // Añadido espacio interno para mejorar el aspecto
        border: 'none', // Quitada la borda para un diseño más limpio
        backgroundColor: selectedDistrict === distrito ? '#007bff' : '#f0f0f0', // Cambio de color al seleccionar
        color: selectedDistrict === distrito ? '#fff' : '#000', // Cambio de color de texto al seleccionar
        cursor: 'pointer', // Cambio del cursor al pasar sobre el botón
      }}
    >
      {distrito}
    </button>
  ))}
</div>

        </main>
        <MapContainer center={[40.4165, -3.70256]} zoom={10} scrollWheelZoom={true} className="map">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          

          <LayersControl position="topright">
            <LayersControl.BaseLayer checked name="OpenStreetMap">
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </LayersControl.BaseLayer>

            <LayersControl.Overlay name='ENVASES'>
              <LayerGroup>
                {renderMarkers('ENVASES', marker_amarillo)}
              </LayerGroup>
            </LayersControl.Overlay>

            <LayersControl.Overlay name='VIDRIO'>
              <LayerGroup>
                {renderMarkers('VIDRIO', marker_verde)}
              </LayerGroup>
            </LayersControl.Overlay>

            <LayersControl.Overlay name='ORGANICA'>
              <LayerGroup>
                {renderMarkers('ORGANICA', marker_marron)}
              </LayerGroup>
            </LayersControl.Overlay>

            <LayersControl.Overlay name='PAPEL-CARTON'>
              <LayerGroup>
                {renderMarkers('PAPEL-CARTON', marker_azul)}
              </LayerGroup>
            </LayersControl.Overlay>

            <LayersControl.Overlay name='RESTO'>
              <LayerGroup>
                {renderMarkers('RESTO', marker_gris)}
              </LayerGroup>
            </LayersControl.Overlay>

          </LayersControl>
          
        </MapContainer>
        <Grid container spacing={4} direction="row-reverse">
            <Sidebar/>
          </Grid>
      <Footer />
      </Container>
      
    </ThemeProvider>
  );

}