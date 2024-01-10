import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" target="_blank"
          rel="noopener noreferrer" href="https://campusvirtual.uclm.es/login/index.php">
        nuestra web
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Footer() {

  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {'Sistemas de información ubicuos'}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {'Trabajo realizado por oscar, ivan y alvaro para la asignatura de sistemas de información ubicuos'}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}



export default Footer;
