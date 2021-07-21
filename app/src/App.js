import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import DashBoard from './components/pages/DashBoard/DashBoard';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component= {Home} />
          <Route path='/services' exact component= {Services} />
          <Route path='/products' exact component= {Products} />
          <Route path='/sign-up' exact component= {SignUp} />
          <Route path='/login' exact component= {Login} />
          <Route path='/dashboard' eaxct component={DashBoard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
