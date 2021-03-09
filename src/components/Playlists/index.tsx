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
    userPlaylists: any
}

interface stateProps {
    user: PlaylistsProps
  }

function Playlist({ theme }: any): JSX.Element {
    const [isSelected, setIsSelected] = useState({home: false, collection: false, radio: true});
    const PlaylistArray = useSelector((state: stateProps) => state.user.userPlaylists);
    const [cookies, setCookie]= useCookies(['token'])
    console.log(PlaylistArray);

    return (
        <Container>
            <IconContainer>
                <IconItem isSelected={isSelected.home} onClick={()=> setIsSelected({home: true, collection:false, radio: false})}>
                    {isSelected.home === true ? 
                    <>
                    <HighlightSelected colorBase={theme.primary}/>
                    <HomeSelected Svgcolor={theme.white} Svgsize={"1.8rem"}/>
                    </>
                    : 
                    <Home Svgcolor={theme.white} Svgsize={"1.8rem"}/>}
                    <h1>Home</h1>
                </IconItem>
                <IconItem isSelected={isSelected.collection} onClick={()=> setIsSelected({home: false, collection:true, radio: false})}>
                    {isSelected.collection === true ? 
                    <>
                    <HighlightSelected colorBase={theme.primary}/>
                    <CollectionSelected Svgcolor={theme.white} Svgsize={"1.8rem"}/> 
                    </>
                    : 
                    <Collection Svgcolor={theme.white} Svgsize={"1.8rem"}/>}
                    <h1>Coleção</h1>
                </IconItem>
                <IconItem isSelected={isSelected.radio} onClick={()=> setIsSelected({home: false, collection:false, radio: true})}>
                    {isSelected.radio === true ? 
                    <>
                    <HighlightSelected colorBase={theme.primary}/>
                    <RadioSelected Svgcolor={theme.white} Svgsize={"1.8rem"}/> 
                    </>
                    : 
                    <Radio Svgcolor={theme.white} Svgsize={"1.8rem"}/>}
                    <h1>Rádio</h1>
                </IconItem>
            </IconContainer>
            <PlaylistsContainer>
                <YourPlaylist>
                    <label>Sua Biblioteca</label>
                    <Link to="/Playlist">
                    <PlaylistItem onClick={()=> console.log('teste')} isBold={true} isSelected={false}>
                        Feitos para Você
                    </PlaylistItem>
                    </Link>
                    <Link to="/Tracks">
                    <PlaylistItem onClick={()=> console.log('teste')} isBold={true} isSelected={false}>
                        Tocados Recentemente
                    </PlaylistItem>
                    </Link>
                    <PlaylistItem onClick={()=> console.log('teste')} isBold={true} isSelected={false}>
                        Musicar curtidas
                    </PlaylistItem>
                    <PlaylistItem onClick={()=> console.log('teste')} isBold={true} isSelected={true}>
                        Álbuns
                    </PlaylistItem>
                    <PlaylistItem onClick={()=> console.log('teste')} isBold={true} isSelected={false}>
                        Artistas
                    </PlaylistItem>
                    <PlaylistItem onClick={()=> console.log('teste')} isBold={true} isSelected={false}>
                        Podcasts
                    </PlaylistItem>
                    <label>Playlists</label>
                    {PlaylistArray.map((item:any)=>
                        <PlaylistItem onClick={()=> console.log('teste')} isBold={false} isSelected={false}>
                        {item.name}
                        </PlaylistItem>
                    )}
                </YourPlaylist>
            </PlaylistsContainer>
            <NewPlaylist>
                
            </NewPlaylist>
        </Container>
    );
}


export default withTheme(Playlist)