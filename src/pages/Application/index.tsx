import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Player  from '../../components/Player'
import Volume from '../../components/Volume'
import Playlist from '../../components/Playlists'
import TrackInformation from '../../components/TrackInformation'
import { withTheme } from '../../styles/theme'
// import {client_id, client_secret, redirect_uri} from '../../../credentials/keys';
import {LeftSidebar, PlayerBar 
  } from './styles';

function Application({ theme }: any): JSX.Element{
  return (<>
    <LeftSidebar colorSidebar={theme.dark}>
      <Playlist/>
    </LeftSidebar>
    <PlayerBar colorSidebar={theme.midGrey}>
      <TrackInformation/>
      <Player/>
      <Volume/>
    </PlayerBar>
  </>);
}

export default withTheme(Application);