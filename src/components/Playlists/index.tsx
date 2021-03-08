import React, { useState, useEffect } from 'react'
import {withTheme} from '../../styles/theme'
import { useSelector, useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';
import {
    Container, 
    IconContainer,
    IconItem,
    HighlightSelected,
    PlaylistsContainer,
    PlaylistItem,
    NewPlaylist
} from './styles'
import { 
    Home,
    HomeSelected,
    Collection,
    CollectionSelected,
    Radio,
    RadioSelected 
} from '../../assets/svg/SidebarIcons'


function Playlist({ theme }: any): JSX.Element {
    const [isSelected, setIsSelected] = useState({home: false, collection: false, radio: true});

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
                <PlaylistItem>
                    bunda
                </PlaylistItem>
                <PlaylistItem>
                    bunda
                </PlaylistItem>
                <PlaylistItem>
                    bunda
                </PlaylistItem>
                <PlaylistItem>
                    bunda
                </PlaylistItem>
                <PlaylistItem>
                    bunda
                </PlaylistItem>
                <PlaylistItem>
                    bunda
                </PlaylistItem>
                <PlaylistItem>
                    bunda
                </PlaylistItem>
                <PlaylistItem>
                    bunda
                </PlaylistItem>
                <PlaylistItem>
                    bunda
                </PlaylistItem>
                <PlaylistItem>
                    bunda
                </PlaylistItem>

            </PlaylistsContainer>
            <NewPlaylist>
                <h1> arroba</h1>
                <h1> arroba</h1>
            </NewPlaylist>
        </Container>
    );
}


export default withTheme(Playlist)