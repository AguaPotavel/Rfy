import styled from 'styled-components'

import '../../../node_modules/react-input-range/lib/css/index.css'

interface rangeProps{
  colorBase: string,
  colorHighlight: string,
  colorProgress: string
}

export const Container = styled.div`
    display: flex;
    padding: 10px;
    width:200px;
    margin: 0px 20px 0px 10px; 
`;

export const RangeVolume = styled.div<rangeProps>`
  display: flex;
  width: 100%;
  height: 5px;
  min-width: 100px;

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