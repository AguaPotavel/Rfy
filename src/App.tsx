import React from 'react';
import Login from './pages/Login'
import Application from './pages/Application'
import Callback from './pages/Login/Callback'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { userAction } from './store/User/User.reducer'

interface userProps {
  user: userAction
}

function App(): JSX.Element {
  const loggedIn = useSelector((state: userProps) => state.user)
  return (<Router>
    {loggedIn.type === 'empty' ?
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/callback" component={Callback} />
      </Switch>
      :
      <Switch>
        <Route exact path="/" component={Application} />
      </Switch>}
  </Router>
  );
}

export default App;
