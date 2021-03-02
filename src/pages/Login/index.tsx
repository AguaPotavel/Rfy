import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { userAction } from '../../store/User/User.reducer';
import {client_id,  redirect_url} from '../../credentials/keys';
// import {
//   } from './styles';
//@ts-ignore
import { SpotifyAuth, Scopes } from 'react-spotify-auth'

export default function Login(): JSX.Element{ 
  return (
    <div className='app'>
    <SpotifyAuth
      redirectUri={redirect_url}
      clientID={client_id}
      scopes={["streaming", "user-read-email", "user-read-private", "user-read-currently-playing", "user-read-playback-state"]} // either style will work
    />
  </div>
  );
}
