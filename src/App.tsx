import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Church from './pages/Church';
import Contact from './pages/Contact';

import './App.css';
import 'antd/dist/antd.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/blogs'>
          <Blogs />
        </Route>
        <Route path='/church'>
          <Church />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
