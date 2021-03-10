import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { Redirect, useLocation } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { Playlists } from '../../services/spotifyApi'

function useQuery() {
  return new URLSearchParams(useLocation().hash);
}

export default function Callback(): JSX.Element{
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies(['token']);
  let query = useQuery();
  let accessToken;

  useEffect(()=>{
      async function getData(token: any){
        let offset = 0;
        let isOver = false;
        let playlists:any = [] 
        while(!isOver){
            const response = await Playlists(token, offset);
            offset += 20;
            playlists = [...playlists, ...response.items]
            if (response.next == null) isOver = true;
        }
        setCookie('token', token, { path: '/' });
        dispatch({ type:'USER_SET_PLAYLISTS', payload: {userPlaylists: playlists}})
      }
      accessToken = query.get('#access_token');
      getData(accessToken);
      
  }, [])
  
  return (
    <Redirect to="/"/>
  );
}