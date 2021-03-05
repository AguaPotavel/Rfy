import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch} from 'react-redux';
import { withTheme } from '../../styles/theme'
import Draggable, {DraggableCore} from 'react-draggable';
import {
  NextSvg,
  BackSvg,
  PlaySvg,
  PauseSvg,
  RandomSvg,
  RepeatSvg
} from '../../assets/svg/Player';
import {
  setDeviceActive,
  getCurrentUserTracking,
  playPlayer,
  pausePlayer,
  previousMusic,
  nextMusic
} from '../../services/spotifyApi'
import {
  Container,
  ActionsContainer,
  ActionItem,
  RangerContainer,
  RangerWrapper,
  RangerProgress,
  RoundProgress,
  PlayerContainer,
  MinProgressMusic,
  Ranger,
  ActionItemRounded
} from './styles';

interface userStateProps {
  user: { token: string }
}

interface devicestateProps {
  device: { deviceId: string }
}

interface deviceProps {
  id: string,
  is_active: boolean,
  is_private_session: boolean,
  is_restricted: boolean,
  name: string,
  type: string,
  volume: number
}

function Player({ theme }: any): JSX.Element {
  const user = useSelector((state: userStateProps) => state.user);
  const device = useSelector((state: devicestateProps) => state.device);
  const [playing, setPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [currentPlayerMs, setCurrentPlayerMs] = useState(0);
  const [musicLengthMs, setMusicLengthMs] = useState(0);
  const dispatch = useDispatch();
  const refCurrentPlayer = useRef<any>(null);
  const refPosition = useRef<any>(null);

  function millisToMinutesAndSeconds(millis: number) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (parseInt(seconds) < 10 ? '0' : '') + seconds;
  }


  refCurrentPlayer.current = { currentPlayerMs, setCurrentPlayerMs };
  refPosition.current = { position, setPosition }
  useEffect(
    () => {
      if (playing === true) {
        const id = setInterval(() => {
          let currentVal = refCurrentPlayer.current.currentPlayerMs + 1000;
          console.log(currentVal);
          refCurrentPlayer.current.setCurrentPlayerMs(currentVal);
          let currentPosition = (currentVal * 100) / musicLengthMs;
          refPosition.current.setPosition(currentPosition);
        }, 1000);
        return () => {
          clearInterval(id);
        };
      }
    },
    [musicLengthMs, currentPlayerMs] 
  );

  async function activeDevice(device: string) {
    const response = await setDeviceActive(user.token, device);
    return response;
  }

  async function getTrack(){
    const response = await getCurrentUserTracking(user.token);
    const trackData = {
      musicName: response.item.name,
      musicAlbum: response.item.album,
      musicArtists: response.item.artists
    }
    dispatch({ type: 'MUSIC_SET', payload: trackData })
    console.log('playbackState', trackData);
  }

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;
    document.body.appendChild(script);
    (window as any).onSpotifyWebPlaybackSDKReady = () => {
      handleLoadSuccess()
    }
  }, [])


  function handleLoadSuccess() {
    const token = user.token;
    const player = new (window as any).Spotify.Player({
      name: 'Redfy',
      getOAuthToken: (cb: any) => { cb(token); }
    });
    console.log(player);

    // Error handling
    player.addListener('initialization_error', ({ message }: any) => { console.error(message); });
    player.addListener('authentication_error', ({ message }: any) => { console.error(message); });
    player.addListener('account_error', ({ message }: any) => { console.error(message); });
    player.addListener('playback_error', ({ message }: any) => { console.error(message); });

    // Playback status updates
    player.addListener('player_state_changed', ({
      position,
      duration,
      track_window: { current_track }
    }: any) => {
      // console.log('Currently Playing', current_track);
      // console.log('Position in Song', position);
      // console.log('Duration of Song', duration);
      setCurrentPlayerMs(position);
      setMusicLengthMs(duration);
      getTrack()
    });

    // Ready
    player.addListener('ready', ({ device_id }: any) => {
      console.log('Ready with Device ID', device_id);
      dispatch({ type: 'DEVICE_SET', payload: { deviceId: device_id } })
      activeDevice(device_id);

    });

    // Not Ready
    player.addListener('not_ready', ({ device_id }: any) => {
      console.log('Device ID has gone offline', device_id);
    });

    // Connect to the player!
    player.connect();
  }

  function cb(token: string) {
    return (token);
  }


  return (
    <Container>
      <PlayerContainer>
        <ActionsContainer colorContainer={theme.midGrey}>
          <ActionItem onClick={() => console.log('action')}>
            <RandomSvg Svgcolor={"#fff"} Svgsize={"0.7rem"} />
          </ActionItem>
          <ActionItem onClick={() => previousMusic(user.token)}>
            <BackSvg Svgcolor={"#fff"} Svgsize={"0.7rem"} />
          </ActionItem>
          {playing ?
            <ActionItemRounded onClick={() => { pausePlayer(user.token, device.deviceId); setPlaying(false) }}>
              <PauseSvg Svgcolor={theme.midGrey} Svgsize={"0.8rem"} />
            </ActionItemRounded>
            :
            <ActionItemRounded onClick={() => { playPlayer(user.token); setPlaying(true) }}>
              <PlaySvg Svgcolor={theme.midGrey} Svgsize={"0.8rem"} />
            </ActionItemRounded>
          }
          <ActionItem onClick={() => nextMusic(user.token)}>
            <NextSvg Svgcolor={"#fff"} Svgsize={"0.7rem"} />
          </ActionItem>
          <ActionItem onClick={() => console.log('action')}>
            <RepeatSvg Svgcolor={"#fff"} Svgsize={"0.7rem"} />
          </ActionItem>
        </ActionsContainer>
        <RangerContainer colorContainer={theme.midGrey}>
          <MinProgressMusic colorContainer={theme.lightGrey}>{millisToMinutesAndSeconds(currentPlayerMs)}</MinProgressMusic>
          <Ranger>
            <RangerWrapper colorContainer={theme.grey} HighlightColor={theme.primary}>
              <RangerProgress colorContainer={theme.lightGrey} HighlightColor={theme.primary} position={position} />
                <RoundProgress colorContainer={"#fff"} />
            </RangerWrapper>
          </Ranger>
          <MinProgressMusic colorContainer={theme.lightGrey}>{millisToMinutesAndSeconds(musicLengthMs)}</MinProgressMusic>
        </RangerContainer>

      </PlayerContainer>
    </Container>
  );
}

export default withTheme(Player);