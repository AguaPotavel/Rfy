import styled from 'styled-components'

import { Text } from '../../styles/globalStyle';

interface ThemeProps{
    colorContainer: string
}

interface RangeProps extends ThemeProps{
    HighlightColor: string,
    position?: number
}

export const Container = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    flex:1;
    flex-direction: column;
    background: red;
`;

export const ActionsContainer = styled.div<ThemeProps>`
    position: relative;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
    min-width: 400px;
    height: 50%;
    background-color: ${p => p.colorContainer};
`;

export const ActionItem = styled.div`
    padding: 5px;
    margin: 5px 20px 5px;
    opacity: 0.7;

    &:hover{
        opacity: 1;
    }
`;

export const RangerContainer = styled.div<ThemeProps>`
    position: relative;
    justify-content: space-between;
    height: 50%;
    padding: 10px;
    background-color: ${p => p.colorContainer};
`;


export const RangerProgress = styled.div<RangeProps>`
    display: flex;
    background-color: ${p => p.colorContainer};
    height: 100%;
    width: ${p => p.position}%;
    border-radius: 4px;

    &:hover{
        background-color: ${p => p.HighlightColor};
    }

`;

export const RoundProgress = styled.div<ThemeProps>`
    display: none;
    position: relative;
    bottom:3px;
    left: -3px;
    background-color: ${p => p.colorContainer};
    height: 10px;
    width: 10px;
    border-radius: 50px;
`;

export const RangerWrapper = styled.div<RangeProps>`
    display: flex;
    flex-direction: row;
    background-color: ${p => p.colorContainer};
    height: 5px;
    border-radius: 4px;

    &:hover ${RangerProgress}{
        background-color: ${p => p.HighlightColor};
    }

    &:hover ${RoundProgress}{
        display: flex;
    }

`;

export const PlayerContainer = styled.div`
    flex-direction: column;
    padding: 10px;
    max-width: 600px;
    min-width: 300px;
    width: 100%;
    background: cyan;
`;