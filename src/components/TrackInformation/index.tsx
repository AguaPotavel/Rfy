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
    const [image, setImage] = useState('');
    // console.log('track',track);

    useEffect(()=>{
        // console.log(track)
        if(track.musicArtists !== undefined){
            setArtists(track.musicArtists);
            let musicImages = track.musicAlbum.images;
            if(musicImages.length > 0) setImage(musicImages[0].url)
        }
    }, [track])

    return (
        <Container>
            <PhotoContainer>
                <img src={image} alt="Logo" />
            </PhotoContainer>
            <InfoContainer>
                <MusicTitle><span>{track.musicName}</span></MusicTitle>
                <ArtistsContainer>
                    {artists.map((item:any, key)=> {return(<>
                        <ArtistItem colorText={theme.lightGrey} onClick={() => console.log('print')}>
                        {item.name}
                        </ArtistItem>
                        {artists.length > key+1 ? <Comma>,</Comma>: null}
                        </>
                    )})}
                </ArtistsContainer>
            </InfoContainer>
        </Container>
    );
}


export default withTheme(TrackInformation)