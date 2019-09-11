import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Amplify, { Hub, Auth } from 'aws-amplify';
import awsconfig from '../../aws-exports';

import Navigation from '../Navigation';

import Home from '../../pages/Home';
import Library from '../../pages/Library';
import Login from '../../pages/Login';
import Play from '../../pages/Play';
import Search1 from '../../pages/Search1';
import Search2 from '../../pages/Search2';
import SignUp from '../../pages/SignUp';
import Verify from '../../pages/Verify';

import Error from '../../pages/Error';

Amplify.configure(awsconfig);

const App = () => {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);

  const getCurrentAuthenticatedUser = async () => {
    const user = await Auth.currentAuthenticatedUser();
    setAuthenticatedUser(user);
  };

  const handleAuthEvent = event => {
    if (event.payload.event === 'signIn') {
      setAuthenticatedUser(event.payload.data);
    }
    if (event.payload.event === 'signOut') {
      setAuthenticatedUser(null);
    }
  };

  useEffect(() => {
    getCurrentAuthenticatedUser();
    Hub.listen('auth', handleAuthEvent);
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Navigation authUser={authenticatedUser} />
        <Switch>
          <Route path="/k-play" component={Home} />
          <Route path="/bibliotek" component={Library} />
          <Route path="/logga-in" component={Login} />
          <Route path="/spela-upp" component={Play} />
          <Route path="/sök" component={Search1} />
          <Route path="/sök2" component={Search2} />
          <Route path="/skapa-konto" component={SignUp} />
          <Route path="/verify/:email" component={Verify} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
