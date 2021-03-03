import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Redirect, useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().hash);
}

export default function Callback(): JSX.Element{
  const dispatch = useDispatch();
  let query = useQuery();

  useEffect(()=>{
      dispatch({ type:'USER_LOGIN', payload: {token: query.get('#access_token')} })
      
  }, [])
  
  return (
    <Redirect to="/"/>
  );
}
