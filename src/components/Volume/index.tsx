import React, { useState, useEffect } from 'react'
import {withTheme} from '../../styles/theme'
import { RangeVolume, Container } from "./styles";
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


function Volume({ theme }: any): JSX.Element {
    const [cookies, setCookie]= useCookies(['token'])
    const dispatch = useDispatch();

    const track = useSelector((state: any) => state.music)

    async function Volume(value:number){
        dispatch({ type:'VOLUME_SET', payload: {volume: value} })
        return await setVolume(cookies.token, value)
    }

    return (
        <Container>
            <RangeVolume colorBase={theme.grey} colorHighlight={theme.primary} colorProgress={theme.lightGrey}>
            <InputRange
                maxValue={100}
                minValue={0}
                value={track.volume}
                onChange={(value:any) => {Volume(value)}} />
            </RangeVolume>
        </Container>
    );
}


export default withTheme(Volume)