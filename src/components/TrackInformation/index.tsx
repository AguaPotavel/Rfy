import React, { useEffect, useState } from "react";
import { withTheme } from "../../styles/theme";
import { useSelector } from 'react-redux';
import {
    Container,
    PhotoContainer,
    ArtistsContainer,
    ArtistItem,
    InfoContainer,
    MusicTitle,
    Comma
} from './styles';

interface musicProps {
    musicAlbum: musicAlbumProps,
    musicArtists: any,
    musicName: string,
}

interface musicAlbumProps{
    artists: Array<any>,
    href: string,
    images: Array<any>,
    id: string,
}

interface stateProps {
    music: musicProps
  }

function TrackInformation({ theme }: any): JSX.Element {
    const track = useSelector((state: stateProps) => state.music);
    const [artists, setArtists] = useState([])
    console.log('track',track);

    useEffect(()=>{
        console.log(track)
        if(track.musicArtists !== undefined){
            setArtists(track.musicArtists);
        }
    }, [track])

    return (
        <Container>
            <PhotoContainer>
                <img src={'https://i.scdn.co/image/8e13218039f81b000553e25522a7f0d7a0600f2e'} alt="Logo" />
            </PhotoContainer>
            <InfoContainer>
                <MusicTitle><span>{track.musicName}</span></MusicTitle>
                <ArtistsContainer>
                    {artists.map((item:any, key)=> {return(<>
                        <ArtistItem colorText={theme.lightGrey} onClick={() => console.log('print')}>
                        {item.name}
                        </ArtistItem>
                        {artists.length > 1 ? <Comma>,</Comma>: null}
                        </>
                    )})}
                </ArtistsContainer>
            </InfoContainer>
        </Container>
    );
}


export default withTheme(TrackInformation)