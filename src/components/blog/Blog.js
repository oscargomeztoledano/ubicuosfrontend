import * as React from 'react';
import Link from '@mui/material/Link';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import imagen from '../../images/ciudad.jpg'



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
    image: 'https://source.unsplash.com/random?wallpapers',
    url: '/home/acustica'
  },
  {
    title: 'Contenedores',
    date: '11 de enero',
    description:
      'En este articulo se habla de los contenedores y como los medimos.',
    image: 'https://source.unsplash.com/random?wallpapers',
    url: '/home/contenedores'
  },
  {
    title: 'Disponibilidad de bicicletas',
    date: '12 de enero',
    description:
      'En este articulo se habla de la disponibilidad de bicicletas y como la medimos.',
    image: 'https://source.unsplash.com/random?wallpapers',
    url: '/home/bicicletas'
  },
  {
    title: 'Aforo de personas',
    date: '13 de enero',
    description:
      'En este articulo se habla del aforo de personas y como lo medimos.',
    image: 'https://source.unsplash.com/random?wallpapers',
    url: '/home/aforoPersonas'
  },
  {
    title: 'Aforo de bicicletas',
    date: '14 de enero',
    description:
      'En este articulo se habla del aforo de bicicletas y como lo medimos.',
    image: 'https://source.unsplash.com/random?wallpapers',
    url: '/home/aforoBicis'
  },
  {
    title: 'Fotovoltaicas',
    date: '15 de enero',
    description:
      'En este articulo se habla de las placas fotovoltaicas y como las medimos.',
    image: 'https://source.unsplash.com/random?wallpapers',
    url: '/home/fotovoltaicas'
  },
 
];


const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  social: [
    { name: 'GitHub', icon: GitHubIcon, url: 'https://github.com/oscargomeztoledano/ubicuosfrontend' },
    { name: 'X', icon: XIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

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
          <Grid container spacing={4} direction="row-reverse">
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}
