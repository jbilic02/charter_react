import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';


function App() {  
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component= {Home} />
          <Route path='/services' component= {Services} />
          <Route path='/products' exact component= {Products} />
          <Route path='/contact-us' exact component= {ContactUs} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
