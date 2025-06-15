import { useState, useEffect } from 'react';
import { Container, Grid, Typography, Box, Button, Snackbar, Alert } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { motion } from 'framer-motion';

import bg1 from '../assets/bg1.jpg';
import bg3 from '../assets/bg3.jpg';
import bg5 from '../assets/bg5.jpg';

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontWeight: 700,
          fontSize: '3rem',
        },
        body1: {
          fontSize: '1.2rem',
          fontWeight: 400,
          color: 'white',
          opacity: 0.9,
        }
      }
    }
  },
  palette: {
    primary: {
      main: 'rgb(237, 27, 36)',  // Custom primary color (red)
    },
  },
});

const content = [
  {
    image: bg1,
    heading: "Klasik Gitar Topluluğu",
    text: "ODTÜ'de klasik gitar tutkusunu bir araya getiren bir topluluktur. Amacımız, amatör müzisyenliği yaygınlaştırmak ve müziği keşfetmek isteyenleri bir araya getirmektir."
  },
  {
    image: bg3,
    heading: 'Sahne Deneyimi ve Etkinlikler',
    text: 'Ücretsiz konserler ve senelik festivaller ile öğrencilerimize sahne deneyimi sunuyoruz. Profesyonel gitaristlerle buluşarak yeteneklerini geliştirmelerini sağlıyoruz.'
  },
  {
    image: bg5,
    heading: 'Bize Katıl!',
    text: 'Eğer sen de gitar çalmayı seviyorsan ve ODTÜ Klasik Gitar Topluluğu’na katılmak istiyorsan, hemen bize katıl ve bu keyifli yolculuğa adım at!'
  }
];

const About = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    setOpenSnackbar(true);
  }, []);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ py: 5 }}>
        <Grid container spacing={4} justifyContent="center" alignItems="center" direction="column">
          {content.map((item, index) => (
            <Grid item xs={12} sm={10} md={8} key={index} sx={{ textAlign: 'center', mb: 5 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.5, duration: 1 }}
              >
                <Box
                  sx={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '68vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 2,
                    boxShadow: 4,
                    position: 'relative',
                    color: 'white',
                  }}
                >
                  <Box sx={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adds a dark overlay for readability
                    padding: '2rem',
                    borderRadius: 2,
                  }}>
                    <Typography variant="h1" sx={{ mb: 2 }}>
                      {item.heading}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                      {item.text}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="info"
          sx={{
            width: '100%',
            borderRadius: 2,
            backgroundColor: 'rgb(237, 27, 36)', // Match the theme's primary color
            color: 'white',
            padding: '1rem',
            fontSize: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography sx={{ flex: 1 }}>Bize Katıl formuna ulaşmak için hemen tıklayın!</Typography>
          <Button
            component="a" // Using an anchor tag for external link (Google in this case)
            href="https://www.google.com"
            target="_blank"
            color="secondary"
            sx={{
              fontWeight: 'bold',
              textTransform: 'uppercase',
              paddingLeft: '1rem',
              paddingRight: '1rem',
              backgroundColor: 'white',
              color: 'rgb(237, 27, 36)', // Match the theme's primary color
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
              }
            }}
          >
            Bize Katıl
          </Button>
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
};

export default About;
