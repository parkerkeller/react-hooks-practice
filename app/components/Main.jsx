import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import BillsContext from '../context/bills-context';

import Home from './containers/Home.jsx';
import SignUp from './SignUp.jsx'
import Bills from './containers/Bills.jsx';
import UserInfo from './containers/UserInfo.jsx'
import SignIn from "./SignIn.jsx";
import Header from './containers/Header.jsx'

const Main = () => {
  const { state } = useContext(BillsContext);

  return (
    <Switch>
      {!state.loggedIn ? (
        <>
          <Route path="/"
            component={SignIn}
          />
          <Route path="/signup"
            component={SignUp}
          />
        </>
      ) : (

          <>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/signup" component={SignUp} />
              <Route path="/bills" component={Bills} />
              <Route path="/userinfo" component={UserInfo} />
            </Switch>
          </>
        )}
    </Switch>
  );
}

export default Main;