import { Box, Button, Container, Typography, Link } from '@mui/material';
import { motion } from 'framer-motion';
import bgImage from "../assets/20241030_202646.jpg"
const JoinUs = () => {
  return (
    <Box
      sx={{
         backgroundImage: `url(${bgImage})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container sx={{ py: 5 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Box
              sx={{
                backgroundColor: 'rgb(237, 27, 36)',
                borderRadius: 2,
                boxShadow: 4,
                color: 'white',
                textAlign: 'center',
                width: '100%',
                maxWidth: '600px',
                margin: '0 auto',
                padding: '2rem',
              }}
            >
              <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
                Bize Katıl
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Klasik gitarı seviyorsan ve bizimle bu yolculuğa çıkmak istiyorsan, hemen bize katılabilirsin! <br />
                Hemen aşağıdaki butona tıklayarak bize katılabileceğin sayfaya yönlendirilirsin.
              </Typography>

              <Link href="https://www.google.com" target="_blank" rel="noopener">
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{
                    padding: '1rem 2rem',
                    fontWeight: 'bold',
                    borderRadius: 5,
                    boxShadow: 2,
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: 'rgb(255, 87, 34)', 
                    },
                  }}
                >
                  Bize Katıl
                </Button>
              </Link>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default JoinUs;
