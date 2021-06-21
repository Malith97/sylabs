import './App.css';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from './components/Navbar'
import Footer from './components/Footer';

import Home from './components/pages/HomePage/Home'
import About from './components/pages/AboutPage/About'
import Services from './components/pages/ServicesPage/Services'
import Contact from './components/pages/ContactPage/Contact'

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
