import styled from 'styled-components'

interface HighlightProps{
    colorBase: string
}

interface ClickableDiv{
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    isSelected: boolean
}

export const Container = styled.div`
    justify-content: left;
    align-items: left;
    display: flex;
    flex-direction: column;
`;

export const IconContainer = styled.div`
    justify-content: left;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const IconItem = styled.div<ClickableDiv>`
    position: relative;
    left: 50px;
    justify-content: left;
    display: flex;
    align-items: center;
    flex-direction: row;
    color: #fff;
    margin-bottom: -10px;
    opacity: ${props=> props.isSelected ? 1 : 0.8};

    & h1{
        margin: 1rem;
        font-size: 1rem;
        font-weight: bold;
    }

    &:hover{
        opacity: 1;
        cursor: default;
    }
`;

export const HighlightSelected = styled.div<HighlightProps>`
    height: 50%;
    width: 0.3rem;
    position: absolute;
    left:-50px;
    background-color: ${props=> props.colorBase};
`;

export const PlaylistsContainer = styled.div`
    margin-top: 25px;
    width: 100%;
    height:20rem;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;    /* Trigger vertical scroll    */
    overflow-x: hidden;  /* Hide the horizontal scroll */
    &::-webkit-scrollbar {
        width: 15px;
        height: 20px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
        background: transparent;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
        background: #505050;
        height: 20px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
        background: #c9c8c8;
    }

    &::-webkit-scrollbar-corner{
        display: none;
    }

    &::-webkit-scrollbar-button:single-button {
        background-color: rgb(64, 64, 64);
        display: block;
        background-size: 10px;
        background-repeat: no-repeat;
    }

    &::-webkit-scrollbar-button:single-button:vertical:decrement {
    height: 12px;
    width: 16px;
    background-position: center 4px;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='rgb(96, 96, 96)'><polygon points='50,00 0,50 100,50'/></svg>");
    }

    &::-webkit-scrollbar-button:single-button:vertical:increment {
    height: 12px;
    width: 16px;
    background-position: center 2px;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='rgb(96, 96, 96)'><polygon points='0,0 100,0 50,50'/></svg>");
    }
`;

export const PlaylistItem = styled.div`
    text-align: center;
    font-size: 1rem;
    color: white;
    margin-bottom: 40px;
    display: flex;
`;

export const YourLibrary = styled.div`
    display: flex;
    

`;

export const YourPlaylist = styled.div`
    

`;

export const NewPlaylist = styled.div`
    display: flex;
    flex:1;
    width: 100%;
    height: 800px;
    background-color: red;
`;