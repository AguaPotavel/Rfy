import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import  Player  from '../../components/Player'
// import {client_id, client_secret, redirect_uri} from '../../../credentials/keys';
// import {
//   } from './styles';

export default function Application(): JSX.Element{
  return (
  <Player/>
  );
}