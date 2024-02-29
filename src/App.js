import { Home } from './Home';
import { Months } from './Months';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>

      <div className="App ">
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path = "/months">
          <Months />
        </Route>
        <Route exact path = "/months/:id">
          <div>Stay tuned</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
