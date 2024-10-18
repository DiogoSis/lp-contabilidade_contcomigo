import { Box, Typography } from '@mui/material';

const AboutSection = () => {
  return (
    <Box sx={{ textAlign: 'center', py: 5 }}>
      <Typography variant="h4" gutterBottom>
        Sobre Nós
      </Typography>
      <Typography variant="body1" color="textSecondary">
        A ContComigo é uma empresa de contabilidade comprometida em fornecer
        serviços de alta qualidade para nossos clientes. Com uma equipe
        experiente e dedicada, buscamos simplificar os processos contábeis e
        ajudar empresas a prosperar.
      </Typography>
    </Box>
  );
};

export default AboutSection;
