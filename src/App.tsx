import React from 'react';
import Login from './pages/Login'
import Application from './pages/Application'
import Callback from './pages/Login/Callback'
import PlaylistPage from './pages/PlaylistPage';
import TrackPage from './pages/TrackPage'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { userAction } from './store/User/User.reducer'
import {withTheme} from './styles/theme'
import { useCookies } from 'react-cookie';

interface userProps {
  user: userAction
}

function App(): JSX.Element {
  const loggedIn = useSelector((state: userProps) => state.user)
  const [cookies, setCookie]= useCookies(['token'])
  
  console.log(cookies)
  return (<Router>
    {loggedIn.type === 'empty' ?
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/callback" component={Callback} />
        <Route path="/Tracks" render={TrackPage}/>
      </Switch>
      :
      <div>
        <Application/>
      <Switch>
          <Route exact path="/" render={()=>''}/> 
          <Route path="/Tracks" render={TrackPage}/>
          <Route path="/Playlist" render={PlaylistPage} />
      </Switch>
      </div>}
  </Router>
  );
}

export default withTheme(App);
