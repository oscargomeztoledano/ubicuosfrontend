import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { googleLogout } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const sections = [
  { title: 'Acustica', url: '/home/acustica' },
  { title: 'Fotovoltaicas', url: '/home/fotovoltaicas' },
  { title: 'Contenedores', url: '/home/contenedores' },
  { title: 'Bicicletas', url: '/home/bicicletas' },
  { title: 'Aforo Bicicletas', url: '/home/aforoBicis' },
  { title: 'Aforo Personas', url: '/home/aforoPersonas' },
];

export default function Header(props) {
  const navigate = useNavigate();

  const cerrarSesion = () => {
    googleLogout();
    sessionStorage.clear();
    navigate("/");
  }
  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <span className='text-'>{sessionStorage.getItem('name')}</span>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          <Link href="/home" color="inherit">
          {"Anthen: The Smart City"}
          </Link>
        </Typography>
        <Button variant="outlined" size="small" onClick={cerrarSesion}>
          Cerrar sesion
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}



