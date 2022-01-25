import "./App.css";
import Form from "./components/Form";
import AllPosts from "./components/AllPosts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/allposts">
          <AllPosts />
        </Route>
        <Form />
      </Switch>
    </Router>
  );
}

export default App;
