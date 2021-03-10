import React, { useState, useEffect } from 'react'
import {withTheme} from '../../styles/theme'
import { useSelector, useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';
import { Playlists } from '../../services/spotifyApi'
import { Link } from 'react-router-dom'
import {
    Container, 
    IconContainer,
    IconItem,
    HighlightSelected,
    PlaylistsContainer,
    PlaylistItem,
    NewPlaylist,
    YourPlaylist
} from './styles'
import { 
    Home,
    HomeSelected,
    Collection,
    CollectionSelected,
    Radio,
    RadioSelected 
} from '../../assets/svg/SidebarIcons'

interface PlaylistsProps {
    userPlaylists: any,
    selected: string
}

interface stateProps {
    user: PlaylistsProps
  }

function Playlist({ theme }: any): JSX.Element {
    const [isLoading, setIsLoading] = useState(true)
    const [isSelected, setIsSelected] = useState({home: false, collection: false, radio: true});
    const [PlaylistArray, setPlaylistArray] = useState([])
    const playListStored = useSelector((state: stateProps) => state.user.userPlaylists);
    const PlaylistSelected = useSelector((state: stateProps) => state.user.selected);
    const [cookies, setCookie]= useCookies(['token'])
    const dispatch = useDispatch();
    // console.log('playlists', PlaylistSelected);

    useEffect(()=>{
        console.log('playlist', playListStored);
        setPlaylistArray(playListStored);
        if(playListStored.length > 1){setIsLoading(false);}
    }, [playListStored])
    
    function verifySelected(name:string){
        if(PlaylistSelected === name) return true;
        return false
    }

    function setSelectedItem(item:string){
        dispatch({ type: 'USER_SET_SELECTION', payload: { selected: item} })
    }

    return (
        <Container>
            <IconContainer>
                <IconItem isSelected={verifySelected('header Home')} onClick={()=> setSelectedItem('header Home')}>
                    {verifySelected('header Home') ? 
                    <HomeSelected Svgcolor={theme.white} Svgsize={"1.8rem"}/>
                    : 
                    <Home Svgcolor={theme.white} Svgsize={"1.8rem"}/>}
                    <h1>Home</h1>
                </IconItem>
                <IconItem isSelected={verifySelected('header Collection')} onClick={()=> setSelectedItem('header Collection')}>
                    {verifySelected('header Collection') ? 
                    <CollectionSelected Svgcolor={theme.white} Svgsize={"1.8rem"}/> 
                    : 
                    <Collection Svgcolor={theme.white} Svgsize={"1.8rem"}/>}
                    <h1>Coleção</h1>
                </IconItem>
                <IconItem isSelected={verifySelected('header Radio')} onClick={()=> setSelectedItem('header Radio')}>
                    {verifySelected('header Radio') ? 
                    <RadioSelected Svgcolor={theme.white} Svgsize={"1.8rem"}/> 
                    : 
                    <Radio Svgcolor={theme.white} Svgsize={"1.8rem"}/>}
                    <h1>Rádio</h1>
                </IconItem>
            </IconContainer>
            <PlaylistsContainer>
                <YourPlaylist>
                    <label>Sua Biblioteca</label>
                    <Link to="/Playlist">
                    <PlaylistItem onClick={()=> setSelectedItem('Feitos para Você')} isBold={true} isSelected={verifySelected('Feitos para Você')}>
                        Feitos para Você
                    </PlaylistItem>
                    </Link>
                    <Link to="/Tracks">
                    <PlaylistItem onClick={()=> setSelectedItem('Tocados Recentemente')} isBold={true} isSelected={verifySelected('Tocados Recentemente')}>
                        Tocados Recentemente
                    </PlaylistItem>
                    </Link>
                    <PlaylistItem onClick={()=> setSelectedItem('Musicar curtidas')} isBold={true} isSelected={verifySelected('Musicar curtidas')}>
                        Musicar curtidas
                    </PlaylistItem>
                    <PlaylistItem onClick={()=> setSelectedItem('Álbuns')} isBold={true} isSelected={verifySelected('Álbuns')}>
                        Álbuns
                    </PlaylistItem>
                    <PlaylistItem onClick={()=> setSelectedItem('Artistas')} isBold={true} isSelected={verifySelected('Artistas')}>
                        Artistas
                    </PlaylistItem>
                    <PlaylistItem onClick={()=> setSelectedItem('Podcasts')} isBold={true} isSelected={verifySelected('Podcasts')}>
                        Podcasts
                    </PlaylistItem>
                    {isLoading === false ?
                    <>
                    <label>Playlists</label>
                    {PlaylistArray.map((item:any)=>
                        <PlaylistItem onClick={()=> setSelectedItem(item.name)} isBold={false} isSelected={verifySelected(item.name)}>
                        {item.name}
                        </PlaylistItem>
                    )}
                    </>
                    :null
                    }
                </YourPlaylist>
            </PlaylistsContainer>
            <NewPlaylist>            
            </NewPlaylist>
        </Container>
    );
}


export default withTheme(Playlist)