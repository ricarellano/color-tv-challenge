import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux'
import User from './containers/User/user'
import Home from './containers/Home'
import { GlobalStyle } from './Globalstyle.styled'
import { store } from './store'


function App() {
  return (
    <div>
      <GlobalStyle/>
        <Provider store={store}>
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
        </Provider>
    </div>
  );
}

export default App;
