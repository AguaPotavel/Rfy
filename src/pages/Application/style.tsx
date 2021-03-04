import styled from 'styled-components'

interface PlayerBarProps{
    colorSidebar: string
}

export const Container = styled.div`
    flex:1;
`;

export const PlayerBar = styled.div<PlayerBarProps>`
    justify-content: space-around;
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
    left:0;
    width: 100%;
    height: 100px;
    flex:1;
    background-color: ${props=> props.colorSidebar};
`;
