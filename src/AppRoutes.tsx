import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import About from './components/about'; // Import the About page
import BizKimiz from './components/bizkimiz'; // Import the BizKimiz page
import Archive from './components/archive';
import JoinUs from './components/bizekatil';

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'keyframes', stiffness: 150  }}
            >
              <About />
            </motion.div>
          }
        />
        <Route
          path="/bizkimiz"
          element={
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'keyframes', stiffness: 150 }}
            >
              <BizKimiz />
            </motion.div>
          }
        />
        <Route
          path="/etkinlikler"
          element={
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'keyframes', stiffness: 190 }}
            >
              <Archive />
            </motion.div>
          }
        />
        <Route
          path="/katil"
          element={
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'keyframes', stiffness: 190 }}
            >
              <JoinUs />
            </motion.div>
          }
        />
        {/* Add other routes for different pages if necessary */}
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
