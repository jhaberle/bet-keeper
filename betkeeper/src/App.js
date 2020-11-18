import React from "react";
import GeneralContainer from "./components/GeneralContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Members from "./pages/Members";
import NavBar from "./components/NavBar";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/members" component={GeneralContainer} />
            <Route exact path="/bets" component={Members} />
          </Switch>
        </Router>
      </Layout>
      <Footer />
    </React.Fragment>
  );
}
export default App;
