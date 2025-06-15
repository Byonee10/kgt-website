import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from './components/header';
import Footer from './components/footer';
import AppRoutes from './AppRoutes'; 

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const theme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: 'rgb(237,27,36)', (red)
        }
      }
    }
  },
  palette: {
    secondary: {
      main: 'rgb(237,27,36)', (orange-red)
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <AppRoutes /> 
      <Footer />
    </ThemeProvider>
  );
}

export default App;
