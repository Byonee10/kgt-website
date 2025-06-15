import { Box, Grid, Paper, Typography, Collapse, IconButton } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import img from "../assets/bg1.jpg";
import { useState } from 'react';

const Komiteler = () => {
  const [expanded, setExpanded] = useState<string | false>(false); 

  const togglePanel = (panel: string) => {
    setExpanded(expanded === panel ? false : panel); 
  };

  const committees = [
    { title: 'Medya Takımı', description: 'Medya Takımı, Tasarım ve Sosyal Medya Komitesinin bir parçası olup sosyal medya paylaşımlarını, topluluğun tanıtımını organize eder.' },
    { title: 'Tasarım Takımı', description: 'Tasarım Takımı, Tasarım ve Sosyal Medya Komitesinin bir parçası olup afiş tasarımı, sahne dekorunun ayarlanması ve dizaynı gibi konularla ilgilenir.' },
    { title: 'Eğitim Komitesi', description: 'Eğitim Komitesi, dönem içerisinde verilen derslerimizin eğitmenleri ve asistanlarından oluşur. Klasik gitar derslerinin yürütülmesi ve iyileştirilmesinden sorumludur.' },
    { title: 'Organizasyon Komitesi', description: 'Organizasyon Komitesi konser ve festivallerde koordinasyonu sağlamakla görevli olmak ve yıl içindeki sosyal etkinlikleri düzenlemekle sorumludur.' },
  ];

  return (
    <Box sx={{ py: 5 }}>

      <Grid container spacing={4} justifyContent="center">
        {committees.map((committee, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              sx={{
                position: 'relative',
                cursor: 'pointer',
                height: '300px',
                borderRadius: 2,
                overflow: 'hidden',
                backgroundImage: `url(${img})`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: 3,
                '&:hover': { boxShadow: 6 },
              }}
              onClick={() => togglePanel(`panel-${index}`)}
            >
              <Typography
                variant="h6"
                sx={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                  color: 'white',
                  fontWeight: 'bold',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                }}
              >
                {committee.title}
              </Typography>
              <IconButton
                sx={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  color: 'white',
                }}
                onClick={() => togglePanel(`panel-${index}`)}
              >
                <ExpandMore />
              </IconButton>
            </Paper>

            <Collapse in={expanded === `panel-${index}`}>
              <Box
                sx={{
                  position: 'absolute',
                  bottom: '0',
                  width: 'auto', // Set width to 100% to match the card's width
                  backgroundColor: '#fff',
                  padding: 2,
                  borderRadius: 2,
                  boxShadow: 3,
                  zIndex: 1,
                }}
              >
                <Typography variant="body2">{committee.description}</Typography>
              </Box>
            </Collapse>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Komiteler;
