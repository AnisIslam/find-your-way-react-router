import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import bg from './images/Bg.png'
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Destination from './components/Destination/Destination';
import NotFound from './components/NotFound/NotFound';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';

export const UserContext = createContext();
const style = {
  backgroundImage: `url(${bg})`
}

function App(props) {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider style={style} value={[loggedInUser, setLoggedInUser]}>
      <p>{loggedInUser.name}</p>

      <Router>
        <Header />
        <Switch>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/blog">
            <Blog />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/login">
            <Login />
          </Route>


          <PrivateRoute path="/destination/:title">
            <Destination></Destination>
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
