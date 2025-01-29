import { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const SpotifyPopup = () => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      {visible && (
        <Box
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            width: '320px',
            height: '180px',
            borderRadius: '12px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
        >
         <iframe
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/track/49hi1RfdUvyCgKsh9VFnjD?utm_source=generator&autoplay=1"
                width="100%"
                height="152"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            ></iframe>


          <IconButton
            onClick={() => setVisible(false)}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              color: 'white',
              backgroundColor: 'rgba(0,0,0,0.5)',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.8)',
              },
            }}
            size="small"
          >
            <CloseIcon />
          </IconButton>
        </Box>
      )}
    </>
  );
};

export default SpotifyPopup;
