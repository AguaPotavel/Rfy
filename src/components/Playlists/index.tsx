import React, { useState, useEffect } from 'react'
import {withTheme} from '../../styles/theme'
// import { RangeVolume, Container } from "./style";
import InputRange from 'react-input-range';
import { setVolume } from '../../services/spotifyApi'
import { useSelector, useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';

interface volumeProps{
    volume: any
}

interface reducerVolume{
    track: volumeProps
}


function Playlist({ theme }: any): JSX.Element {
    
    return (
        <h1>oi</h1>
        
    );
}


export default withTheme(Playlist)