import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Reservation from './pages/Reservation';
import Doctors from './pages/Doctors';
import AboutUs from './pages/About';
import PageNotFound from './pages/ErrorPage'


function App() {
  return (
    // sample
      <Router>
        <Header/>
        <Routes>
          <Route path="/clinic-reservation" element={<Reservation/>} />
          <Route path="/doctors" element={<Doctors/>} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>

      </Router>
        
    
  );
}

export default App;
