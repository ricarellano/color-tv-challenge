import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import User from './user.container'
import Home from './containers/Home'
import { GlobalStyle } from './Globalstyle.styled'

function App() {
  return (
    <div>
      <GlobalStyle/>
    <Router>
      <Switch>
        <Route path="/user/:id">
            <User />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        <Route><Home /></Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
