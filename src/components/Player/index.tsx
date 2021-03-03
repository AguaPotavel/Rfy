import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

//@ts-ignore

// import {client_id, client_secret, redirect_uri} from '../../../credentials/keys';
// import {
//   } from './styles';

interface stateProps{
    user: {token: string}
}

interface stateProps{
  device: {deviceId: string}
}

export default function Player(): JSX.Element{
  const user = useSelector((state: stateProps) => state.user);
  const device = useSelector((state: stateProps) => state.device);
  const dispatch = useDispatch();
    
  useEffect(()=>{
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;
    document.body.appendChild(script);
    (window as any).onSpotifyWebPlaybackSDKReady = () => {
      handleLoadSuccess()
    }
  }, [])

  
  function handleLoadSuccess() {
    console.log("Script loaded");
    const token = user.token;
    const player = new (window as any).Spotify.Player({
      name: 'Rspotify',
      getOAuthToken: (cb:any) => { cb(token); }
    });
    console.log(player);

    // Error handling
    player.addListener('initialization_error', ({ message }: any) => { console.error(message); });
    player.addListener('authentication_error', ({ message }: any) => { console.error(message); });
    player.addListener('account_error', ({ message }: any) => { console.error(message); });
    player.addListener('playback_error', ({ message }: any) => { console.error(message); });

    // Playback status updates
    player.addListener('player_state_changed', ({
      position,
      duration,
      track_window: { current_track }
    }: any) => {
      console.log('Currently Playing', current_track);
      console.log('Position in Song', position);
      console.log('Duration of Song', duration);
    });

    // Ready
    player.addListener('ready', ({ device_id }: any) => {
      console.log('Ready with Device ID', device_id);
      dispatch({ type:'DEVICE_SET', payload: {deviceId: device_id} })
    });

    // Not Ready
    player.addListener('not_ready', ({ device_id }: any) => {
      console.log('Device ID has gone offline', device_id);
    });

    // Connect to the player!
    player.connect();
  }

  function cb(token: string) {
    return(token);
  }


  return (<>
      <h1>oi</h1>
      </>);
}