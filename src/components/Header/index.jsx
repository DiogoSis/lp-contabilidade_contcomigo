import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { Link } from 'react-scroll'; // Para navegação suave entre seções

const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="lg">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ContComigo
          </Typography>
          <Button color="inherit">
            <Link to="about" smooth={true} duration={500}>Sobre</Link>
          </Button>
          <Button color="inherit">
            <Link to="contact" smooth={true} duration={500}>Contato</Link>
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
