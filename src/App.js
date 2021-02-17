import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/Home';
import Br from './components/Br';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          
          <Route path="/br">
            <Br />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
