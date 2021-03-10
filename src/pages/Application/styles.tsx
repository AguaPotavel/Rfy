import styled from 'styled-components'

interface BarProps{
    colorSidebar: string
}

export const Container = styled.div`
    flex:1;
`;

export const PlayerBar = styled.div<BarProps>`
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
    z-index: 2;
`;

export const LeftSidebar = styled.div<BarProps>`
    display:block;
    height: 100%;
    width: 250px;
    /* min-width: 250px; */
    background-color: ${props=> props.colorSidebar};
    position: absolute;
    top:0;
    left:0;  
`;
