import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import Home from '../Home.jsx';
import Header from "../Header.jsx";
import SignUp from '../SignUp.jsx'
import Bills from '../Bills.jsx';
import UserInfo from '../UserInfo.jsx'

const Root = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={SignUp} />
      <Route path="/bills" component={Bills} />
      <Route path="/userinfo" component={UserInfo} />
    </Switch>
  );
}

export default Root;