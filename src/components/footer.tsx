import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import bgImage from '../assets/bg.png'; // Import the background image

const Footer = () => {
  return (
    <Box sx={{
      backgroundImage: `url(${bgImage})`, // Use the imported image
      backgroundColor: 'rgb(237, 27, 36)', // Red background color
      backgroundPosition: 'center', // Centers the image
      paddingTop: 5,
      color: 'white',
      paddingBottom: 5
    }}>
      <Container>
        <Grid container spacing={4}>
          {/* Address Section */}
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" color="white">
              ODTÜ Klasik Gitar Topluluğu
            </Typography>
            <ul style={{ padding: 0, listStyleType: 'none', color: 'white', lineHeight: '1.8' }}>
              <li>Orta Doğu Teknik Üniversitesi</li>
              <li>Üniversiteler Mahallesi</li>
              <li>Dumlupınar Bulvarı No: 1</li>
              <li>06800 Çankaya Ankara / TÜRKİYE</li>
              <li>Baraka - Sağ taraftaki son kapı</li>
            </ul>
          </Grid>

          {/* Navigation Section */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="white">
              Navigasyon
            </Typography>
            <ul style={{ padding: 0, listStyleType: 'none' }}>
              <li><Link href="/" color="inherit" underline="hover" sx={{ '&:hover': { color: 'yellow' } }}>Anasayfa</Link></li>
              <li><Link href="/bizkimiz" color="inherit" underline="hover" sx={{ '&:hover': { color: 'yellow' } }}>Biz Kimiz</Link></li>
              <li><Link href="/etkinlikler" color="inherit" underline="hover" sx={{ '&:hover': { color: 'yellow' } }}>Etkinlikler</Link></li>
              <li><Link href="/katil" color="inherit" underline="hover" sx={{ '&:hover': { color: 'yellow' } }}>Bize Katıl</Link></li>
            </ul>
          </Grid>

          {/* Social Media Section */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="white">
              Sosyal Medya
            </Typography>
            <ul style={{ padding: 0, listStyleType: 'none' }}>
              <li><Link href="https://www.facebook.com/odtuklasikgitar" color="inherit" underline="hover" sx={{ '&:hover': { color: 'yellow' } }}>Facebook</Link></li>
              <li><Link href="https://www.instagram.com/odtuklasikgitar/" color="inherit" underline="hover" sx={{ '&:hover': { color: 'yellow' } }}>Instagram</Link></li>
              <li><Link href="https://www.youtube.com/channel/UCSDd682X2Y3CvdTP32da1KQ" color="inherit" underline="hover" sx={{ '&:hover': { color: 'yellow' } }}>YouTube</Link></li>
            </ul>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Box sx={{ borderTop: 1, borderColor: 'white', paddingTop: 2, marginTop: 4 }}>
          <Typography variant="body2" color="white" align="center">
            <Link href="https://www.linkedin.com/in/caglar-bulgay" color="inherit" underline="hover" sx={{ '&:hover': { color: 'yellow' } }}>
              © 2025 Çağlar Bulgay
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
