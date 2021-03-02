import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { userAction } from '../../store/User/User.reducer';
// import {client_id, client_secret, redirect_uri} from '../../../credentials/keys';
// import {
//   } from './styles';

interface stateProps{
    user: userAction
}

export default function Application(): JSX.Element{
  const user = useSelector((state: stateProps) => state.user);
  return (
      <h1>Application</h1>
  );
}