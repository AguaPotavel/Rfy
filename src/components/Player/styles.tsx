import styled from 'styled-components'

import { Text } from '../../styles/globalStyle';

import '../../../node_modules/react-input-range/lib/css/index.css'

interface ThemeProps{
    colorContainer: string
}

interface RangeProps extends ThemeProps{
    HighlightColor: string,
    position?: number
    
}

interface ClickableDiv{
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

interface rangeProps{
  colorBase: string,
  colorHighlight: string,
  colorProgress: string
}

export const Container = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    flex:1;
    flex-direction: column;
`;

export const ActionsContainer = styled.div<ThemeProps>`
    position: relative;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
    min-width: 400px;
    height: 60px;
    background-color: ${p => p.colorContainer};
    margin-bottom: -10px;
`;

export const ActionItem = styled.div<ClickableDiv>`
    padding: 5px;
    margin: 5px 20px 5px;
    opacity: 0.7;

    &:hover{
        opacity: 1;
    }
`;

export const ActionItemRounded = styled.div<ClickableDiv>`
    display:flex;
    padding: 5px;
    margin: 5px 5px 5px;
    justify-content:center;
    align-items: center;
    justify-items:center;
    opacity: 0.7;
    background-color: #fff;
    border-radius: 30px;
    width: 30px;
    height: 30px;
    text-align: center;

    &:hover{
        opacity: 1;
    }
`;

export const RangerContainer = styled.div<ThemeProps>`
    position: relative;
    justify-content: space-around;
    display: flex;
    flex-direction: row;
    height: 20%;
    padding: 10px;
    text-align: center;
    background-color: ${p => p.colorContainer};
`;

export const PlayerContainer = styled.div`
    flex-direction: column;
    max-width: 600px;
    min-width: 400px;
    width: 100%;
    height: 100px;
`;

export const MinProgressMusic = styled.h2<ThemeProps>`
    font-size: 14px;
    margin:0;
    color: ${p => p.colorContainer};
`;

export const Ranger = styled.div`
    display: flex;
    flex:1;
    padding: 10px;
    align-items: center;
`;


export const RangePlayer = styled.div<rangeProps>`
  display: flex;
  width: 100%;
  height: 5px;
  min-width: 100px;
  justify-content: center;
  align-items: center;

  & .input-range__slider {
  display: none;
  }

  &:hover .input-range__slider {
  display: block;
  background: #fff;
  border: 0.5px solid #ddd;
  top:-2px;
  }

  & .input-range__track {
  background: ${props=> props.colorBase};;
  }

  & .input-range__track--active {
  background: ${props=> props.colorProgress};
  }

  &:hover .input-range__track--active {
  background: ${props=> props.colorHighlight};
  }

  & .input-range__label--min {
    display:none;
  }

  & .input-range__label--max {
    display: none;
  }

  & .input-range__label{
    display: none;
  }
`;