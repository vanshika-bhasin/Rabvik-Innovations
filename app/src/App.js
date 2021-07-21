import './App.css';
import {Switch,Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Landing from './components/Landing/Landing';
import Questionnaire from './components/Questionnaire/Questionnaire';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import DashBoard from './components/DashBoard/DashBoard';
function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login" component={Login} />
      </Switch>
      <Questionnaire/>
    </>
}

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
