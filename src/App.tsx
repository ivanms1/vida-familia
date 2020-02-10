import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';

import './App.css';
import 'antd/dist/antd.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
