import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import  Player  from '../../components/Player'
import Volume from '../../components/Volume'
import TrackInformation from '../../components/TrackInformation'
import { withTheme } from '../../styles/theme'
// import {client_id, client_secret, redirect_uri} from '../../../credentials/keys';
import {PlayerBar 
  } from './style';

function Application({ theme }: any): JSX.Element{
  return (
    <PlayerBar colorSidebar={theme.midGrey}>
      <TrackInformation/>
      <Player/>
      <Volume/>
    </PlayerBar>
  );
}

export default withTheme(Application);