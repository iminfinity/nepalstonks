import Home from "../src/pages/home/home";
import Profile from "../src/pages/profile/profile";

import { Route, Switch } from "react-router-dom";

import "./App.scss";
import Error from "./pages/error/error";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={Profile} />
      <Route component={Error} />
    </Switch>
  );
}

export default App;
