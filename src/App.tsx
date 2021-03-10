import React, { useEffect, useState } from 'react';
import Login from './pages/Login'
import Application from './pages/Application'
import Callback from './pages/Login/Callback'
import PlaylistPage from './pages/PlaylistPage';
import TrackPage from './pages/TrackPage'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { userAction } from './store/User/User.reducer'
import {withTheme} from './styles/theme'
import { useCookies } from 'react-cookie';
import { Playlists } from './services/spotifyApi'

interface userProps {
  user: userAction
}

function App(): JSX.Element {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state: any) => state.user)
  const [cookies, setCookie]= useCookies(['token'])
  const [session, setSession] = useState(undefined)
    
  useEffect(()=>{
    dispatch({ type:'USER_LOGIN', payload: {token: cookies.token}});
    console.log('dispatch', cookies.token)
  }, [cookies])

  useEffect(()=>{
    async function getData(){
      console.log('getdata')
      let offset = 0;
      let isOver = false;
      let playlists:any = [] 
      while(!isOver){
          const response = await Playlists(cookies.token, offset);
          offset += 20;
          playlists = [...playlists, ...response.items]
          if (response.next == null) isOver = true;
      }
      dispatch({ type:'USER_LOGIN', payload: {token: cookies.token}});
      dispatch({ type:'USER_SET_PLAYLISTS', payload: {userPlaylists: playlists}})
      
    }
    if(cookies.token !== undefined) getData();
  }, [])
  
  return (<Router>
    {loggedIn.token === undefined ?
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/callback" component={Callback} />
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
