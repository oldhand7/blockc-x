import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ViewDocument from "./pages/ViewDocument";
import Home from "./pages/Home";
import Issue from "./pages/Issue";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/issue">
            <Issue />
          </Route>
          <Route path="/my-profile">
            <Profile />
          </Route>
          <Route path="/view-document/:id">
            <ViewDocument />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
