import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Sidebar from './Sidebar';
import Footer from './Footer';
import imagen from '../../images/ciudad.jpg'
import acustica from '../../images/acustica.png'
import aforobicicletas from '../../images/aforobicicletas.png'
import aforopeatones from '../../images/aforopeatones.png'
import contendores from '../../images/contenedores.png'
import fotovoltaicas from '../../images/fotovoltaicas.png'

const mainFeaturedPost = {
  title: 'Anthen Manifest',
  description:
    "En Anthem tenemos claro que nuestro objetivo es mejorar la forma en que las personas viven o trabajan, Mediante el uso de las tecnologías",
  image: imagen,
};

const featuredPosts = [
  {
    title: 'Contaminación Acustica',
    date: '10 de enero',
    description:
      'En este articulo se habla de la contaminación acustica y como la medimos.',
    image: acustica,
    url: '/home/acustica'
  },
  {
    title: 'Contenedores',
    date: '11 de enero',
    description:
      'En este articulo se habla de los contenedores y como los medimos.',
    image: contendores,
    url: '/home/contenedores'
  },
  {
    title: 'Aforo de peatones',
    date: '13 de enero',
    description:
      'En este articulo se habla del aforo de peatones y como lo medimos.',
    image: aforopeatones,
    url: '/home/aforoPersonas'
  },
  {
    title: 'Aforo de bicicletas',
    date: '14 de enero',
    description:
      'En este articulo se habla del aforo de bicicletas y como lo medimos.',
    image: aforobicicletas,
    url: '/home/aforoBicis'
  },
  {
    title: 'Fotovoltaicas',
    date: '15 de enero',
    description:
      'En este articulo se habla de las placas fotovoltaicas y como las medimos.',
    image: fotovoltaicas,
    url: '/home/fotovoltaicas'
  },
 
];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header/>
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4} >
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
            <Sidebar/>
          </Grid>
        </main>
      </Container>
      <Footer
      />
    </ThemeProvider>
  );
}
