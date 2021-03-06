import React from "react";
// import {
//   } from './styles';
//@ts-ignore
import { SpotifyAuth } from 'react-spotify-auth'

export default function Login(): JSX.Element{ 
  return (
    <div className='app'>
    <SpotifyAuth
      redirectUri="http://localhost:3000/callback"
      clientID="df6b61dceb4c4572a4b2a7e54431460a"
      scopes={["streaming", "user-read-email", "user-read-private", "user-read-currently-playing", "user-read-playback-state", "user-modify-playback-state", "playlist-read-private", "playlist-modify-private", "playlist-modify-public", "playlist-read-collaborative"]} // either style will work
    />
  </div>
  );
}
