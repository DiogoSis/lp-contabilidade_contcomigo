import { Box, Typography, Button, TextField } from '@mui/material';

const ContactSection = () => {
  return (
    <Box sx={{ textAlign: 'center', py: 5, backgroundColor: '#007bff', color: '#fff' }}>
      <Typography variant="h4" gutterBottom>
        Entre em Contato
      </Typography>
      <Typography variant="body1" gutterBottom>
        Estamos prontos para ajudá-lo com suas necessidades contábeis. Entre em
        contato conosco hoje mesmo para uma consulta gratuita.
      </Typography>
      <TextField
        label="Seu Nome"
        variant="filled"
        fullWidth
        sx={{ backgroundColor: '#fff', mb: 2 }}
      />
      <TextField
        label="Seu Email"
        variant="filled"
        fullWidth
        sx={{ backgroundColor: '#fff', mb: 2 }}
      />
      <Button variant="contained" color="secondary">
        Contato
      </Button>
    </Box>
  );
};

export default ContactSection;
