import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch} from 'react-redux';
import { withTheme } from '../../styles/theme'
import InputRange from 'react-input-range';
import { useCookies } from 'react-cookie';
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
  nextMusic,
  playSeek,
  getPlaybackData
} from '../../services/spotifyApi'
import {
  Container,
  ActionsContainer,
  ActionItem,
  RangerContainer,
  PlayerContainer,
  MinProgressMusic,
  Ranger,
  ActionItemRounded,
  RangePlayer
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
  const [cookies, setCookie]= useCookies(['token'])
  const refCurrentPlayer = useRef<any>(null);
  const refPosition = useRef<any>(null);
  // console.log(user);

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
          // console.log(currentVal);
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
    const response = await setDeviceActive(cookies.token, device);
    return response;
  }

  async function playerSeek(position:any){
    return await playSeek(cookies.token, position)
  }

  async function getTrack(){
    const response = await getCurrentUserTracking(cookies.token);
    const trackData = {
      musicName: response.item.name,
      musicAlbum: response.item.album,
      musicArtists: response.item.artists
    }
    dispatch({ type: 'MUSIC_SET', payload: trackData })
    // console.log('playbackState', trackData);
  }

  async function getPlaybackInfo(){
    const response = await getPlaybackData(cookies.token)
    dispatch({ type: 'VOLUME_SET', payload: { volume: response.device.volume_percent} })
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
    const token = cookies.token;
    const player = new (window as any).Spotify.Player({
      name: 'Redfy',
      getOAuthToken: (cb: any) => { cb(token); }
    });
    // console.log(player);

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
      getPlaybackInfo()
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
          <ActionItem onClick={() => previousMusic(cookies.token)}>
            <BackSvg Svgcolor={"#fff"} Svgsize={"0.7rem"} />
          </ActionItem>
          {playing ?
            <ActionItemRounded onClick={() => { pausePlayer(cookies.token, device.deviceId); setPlaying(false) }}>
              <PauseSvg Svgcolor={theme.midGrey} Svgsize={"0.8rem"} />
            </ActionItemRounded>
            :
            <ActionItemRounded onClick={() => { playPlayer(cookies.token); setPlaying(true) }}>
              <PlaySvg Svgcolor={theme.midGrey} Svgsize={"0.8rem"} />
            </ActionItemRounded>
          }
          <ActionItem onClick={() => nextMusic(cookies.token)}>
            <NextSvg Svgcolor={"#fff"} Svgsize={"0.7rem"} />
          </ActionItem>
          <ActionItem onClick={() => console.log('action')}>
            <RepeatSvg Svgcolor={"#fff"} Svgsize={"0.7rem"} />
          </ActionItem>
        </ActionsContainer>
        <RangerContainer colorContainer={theme.midGrey}>
          <MinProgressMusic colorContainer={theme.lightGrey}>{millisToMinutesAndSeconds(currentPlayerMs)}</MinProgressMusic>
          <Ranger>
            <RangePlayer colorBase={theme.grey} colorHighlight={theme.primary} colorProgress={theme.lightGrey}>
            <InputRange
                maxValue={musicLengthMs}
                minValue={0}
                value={currentPlayerMs}
                onChange={(value:any) => {playerSeek(value)}} />
            </RangePlayer>
          </Ranger>
          <MinProgressMusic colorContainer={theme.lightGrey}>{millisToMinutesAndSeconds(musicLengthMs)}</MinProgressMusic>
        </RangerContainer>

      </PlayerContainer>
    </Container>
  );
}

export default withTheme(Player);