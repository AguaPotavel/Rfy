import styled from 'styled-components'

const height = "36px";
const thumbHeight = 36;
const trackHeight = "16px";

// colours
const upperColor = "#edf5f9";
const lowerColor = "#0199ff";
const thumbColor = "#ddd";
const thumbHoverColor = "#ccc";
const upperBackground = `linear-gradient(to bottom, ${upperColor}, ${upperColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`;
const lowerBackground = `linear-gradient(to bottom, ${lowerColor}, ${lowerColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`;

const makeLongShadow = (color:string, size:string) => {
    let i = 18;
    let shadow = `${i}px 0 0 ${size} ${color}`;
  
    for (; i < 706; i++) {
      shadow = `${shadow}, ${i}px 0 0 ${size} ${color}`;
    }
  
    return shadow;
  };


export const Container = styled.div`
    display: flex;
    background: red;
    padding: 10px;
    width:auto;
    margin: 0px 20px 0px 10px; 
`;

export const RangeVolume = styled.input`
  display: block;
  appearance: none;
  max-width: 700px;
  width: 100%;
  margin: 0;
  height: 5px;
  outline: none;
  cursor: pointer;
  overflow: hidden;

  &::-webkit-slider-thumb {
    -webkit-appearance: auto; /* Override default look */
    appearance: auto;
    width: 25px; /* Set a specific slider handle width */
    height: 25px; /* Slider handle height */
    border-radius: 50%; 
    background: ""; /* Green background */
    cursor: pointer; /* Cursor on hover */
    }

  &::-moz-range-thumb {
    appearance: none;
    margin: 0;
    height: ${thumbHeight};
    width: ${thumbHeight};
    background: ${thumbColor};
    border-radius: 100%;
    border: 0;
    transition: background-color 150ms;
}
  
  &::-webkit-slider-thumb {
      width: 10px;
      -webkit-appearance: none;
      height: 10px;
      cursor: ew-resize;
      background: #434343;
      box-shadow: -80px 0 0 80px #43e5f7;
    }

  &::-ms-fill-lower {
    background: ${lowerBackground};
  }

  &::-ms-fill-upper {
    background: ${upperBackground};
  }

  &::-webkit-slider-runnable-track {
      height: 10px;
      -webkit-appearance: none;
      color: #13bba4;
    }
`;