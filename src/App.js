import { Home } from "./Home";
import MonthDetail from "./MonthDetail";
import { Months } from "./Months";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/months">
            <Months />
          </Route>
          <Route exact path="/months/:id">
            <MonthDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
