import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from './components/Login/Login'
import DashBoard from './components/DashBoard/DashBoard';


function App() {
  return (
    <div className="App">
      
      <Router>

        <Header/>

      <Switch>
        <Route path='/login' exact >
          <Login />
        </Route>
        <Route path='/dashboard' exact >
          <DashBoard />
        </Route>
      </Switch>

      </Router>
    </div>
  );
}

export default App;
