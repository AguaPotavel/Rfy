import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Redirect, useLocation } from "react-router-dom";
import { useCookies } from 'react-cookie';

function useQuery() {
  return new URLSearchParams(useLocation().hash);
}

export default function Callback(): JSX.Element{
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies(['token']);
  let query = useQuery();

  useEffect(()=>{
      dispatch({ type:'USER_LOGIN', payload: {token: query.get('#access_token')} })
      setCookie('token', query.get('#access_token'), { path: '/' });
  }, [])
  
  return (
    <Redirect to="/"/>
  );
}
