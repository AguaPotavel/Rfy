import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { userAction } from '../../store/User/User.reducer';
import { useParams, Redirect, useLocation } from "react-router-dom";


interface stateProps{
    user: userAction
}

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
