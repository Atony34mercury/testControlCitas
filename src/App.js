import './styles/App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Reservation from './components/reservation';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <h1>This is going to home page</h1>
          </Route>
          <Route path='/reservation'>
            <Reservation/>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
