import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { userAction } from '../../store/User/User.reducer';
// import {client_id, client_secret, redirect_uri} from '../../../credentials/keys';
// import {
//   } from './styles';
//@ts-ignore
import { SpotifyApiContext } from 'react-spotify-api'
//@ts-ignore
import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import Cookies from 'js-cookie'
import { useParams } from "react-router-dom";


interface stateProps{
    user: userAction
}

export default function Login(): JSX.Element{
  const user = useSelector((state: stateProps) => state.user);
  const dispatch = useDispatch();
  const token = Cookies.get('spotifyAuthToken')
  
  useEffect(()=>{
    console.log(token)
    dispatch({ type:'USER_LOGIN', payload: {token: token} })
  }, [])
  

  return (
    <div className='app'>
    {token ? (
      <SpotifyApiContext.Provider value={token}>
        {/* Your Spotify Code here */}
        <p>You are authorized with token: {token}</p>
      </SpotifyApiContext.Provider>
    ) : (
      // Display the login page
      <SpotifyAuth
        redirectUri=''
        clientID=''
        scopes={[Scopes.userReadPrivate, 'user-read-email']} // either style will work
      />
    )}
  </div>
  );
}
