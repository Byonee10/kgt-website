import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from './components/header';
import Footer from './components/footer';
import AppRoutes from './AppRoutes'; // Import AppRoutes for routing

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Create theme for Material UI
const theme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: 'rgb(237,27,36)', // Custom secondary color (red)
        }
      }
    }
  },
  palette: {
    secondary: {
      main: 'rgb(237,27,36)',  // Custom secondary color (orange-red)
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
      <AppRoutes /> {/* Use AppRoutes for routing */}
      <Footer />
    </ThemeProvider>
  );
}

export default App;
