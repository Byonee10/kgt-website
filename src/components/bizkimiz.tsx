import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Organization from './organization';
import Komiteler from './komiteler';

const BizKimiz = () => {
  const sections = [
    {
      title: <Typography variant='h5' fontFamily="Roboto">Tarihçe</Typography>,
      content:
        'TARİHÇE',
    },
    {
        title: <Typography variant='h5' fontFamily="Roboto">Misyon</Typography>,
        content:
        'Misyon',
    },
    {
        title: <Typography variant='h5' fontFamily="Roboto">Organizasyon</Typography>,
      content:<Organization/>,
    },
    {
        title: <Typography variant='h5' fontFamily="Roboto">Komitelerimiz</Typography>,
      content: <Komiteler/>,
    },
  ];

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" align="center" fontFamily="Roboto" gutterBottom>
        Biz Kimiz
      </Typography>
      <Box sx={{ mt: 3 }}>
        {sections.map((section, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">{section.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">{section.content}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
};

export default BizKimiz;
