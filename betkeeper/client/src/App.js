import React from "react";
import GeneralContainer from "./components/GeneralContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Members from "./pages/members";
import Login from "./pages/Login";

function App() {
  return (
    <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={GeneralContainer} />
            <Route exact path="/bets" component={Members} />
          </Switch>
        </Router>
    </React.Fragment>
  );
}
export default App;
