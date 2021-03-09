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
  const [redirect, setRedirect] = useState(false)
  let query = useQuery();

  useEffect(()=>{
      async function getPlaylists(){
        let offset = 0;
        let isOver = false;
        let playlists:any = [] 
        while(!isOver){
            const response = await Playlists(cookies.token, offset);
            offset += 20;
            playlists = [...playlists, ...response.items]
            if (response.next == null) isOver = true;
        }
        dispatch({ type:'USER_SET_PLAYLISTS', payload: {userPlaylists: playlists}})
      }
      dispatch({ type:'USER_LOGIN', payload: {token: query.get('#access_token')}})
      setCookie('token', query.get('#access_token'), { path: '/' });
      getPlaylists();

  }, [])
  
  return (
    <Redirect to="/"/>
  );
}