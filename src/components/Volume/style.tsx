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
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: none;
    cursor: pointer;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 5px;
    min-height: 50px;
    overflow: hidden;
    width: 240px;

  &:focus {
    box-shadow: none;
    outline: none;
  }

  &::-webkit-slider-runnable-track {
  background: cyan;
  content: '';
  height: 5px;
  pointer-events: none;
  }

  &::-webkit-slider-thumb {
  height: 25px;
  width: 25px;
  -webkit-appearance: none;
  appearance: none;
  background: #fff;
  border-radius: 8px;
  box-shadow: 5px 0 0 -8px #c7c7c7, 6px 0 0 -8px #c7c7c7, 7px 0 0 -8px #c7c7c7, 8px 0 0 -8px #c7c7c7, 9px 0 0 -8px #c7c7c7, 10px 0 0 -8px #c7c7c7, 11px 0 0 -8px #c7c7c7, 12px 0 0 -8px #c7c7c7, 13px 0 0 -8px #c7c7c7, 14px 0 0 -8px #c7c7c7, 15px 0 0 -8px #c7c7c7, 16px 0 0 -8px #c7c7c7, 17px 0 0 -8px #c7c7c7, 18px 0 0 -8px #c7c7c7, 19px 0 0 -8px #c7c7c7, 20px 0 0 -8px #c7c7c7, 21px 0 0 -8px #c7c7c7, 22px 0 0 -8px #c7c7c7, 23px 0 0 -8px #c7c7c7, 24px 0 0 -8px #c7c7c7, 25px 0 0 -8px #c7c7c7, 26px 0 0 -8px #c7c7c7, 27px 0 0 -8px #c7c7c7, 28px 0 0 -8px #c7c7c7, 29px 0 0 -8px #c7c7c7, 30px 0 0 -8px #c7c7c7, 31px 0 0 -8px #c7c7c7, 32px 0 0 -8px #c7c7c7, 33px 0 0 -8px #c7c7c7, 34px 0 0 -8px #c7c7c7, 35px 0 0 -8px #c7c7c7, 36px 0 0 -8px #c7c7c7, 37px 0 0 -8px #c7c7c7, 38px 0 0 -8px #c7c7c7, 39px 0 0 -8px #c7c7c7, 40px 0 0 -8px #c7c7c7, 41px 0 0 -8px #c7c7c7, 42px 0 0 -8px #c7c7c7, 43px 0 0 -8px #c7c7c7, 44px 0 0 -8px #c7c7c7, 45px 0 0 -8px #c7c7c7, 46px 0 0 -8px #c7c7c7, 47px 0 0 -8px #c7c7c7, 48px 0 0 -8px #c7c7c7, 49px 0 0 -8px #c7c7c7, 50px 0 0 -8px #c7c7c7, 51px 0 0 -8px #c7c7c7, 52px 0 0 -8px #c7c7c7, 53px 0 0 -8px #c7c7c7, 54px 0 0 -8px #c7c7c7, 55px 0 0 -8px #c7c7c7, 56px 0 0 -8px #c7c7c7, 57px 0 0 -8px #c7c7c7, 58px 0 0 -8px #c7c7c7, 59px 0 0 -8px #c7c7c7, 60px 0 0 -8px #c7c7c7, 61px 0 0 -8px #c7c7c7, 62px 0 0 -8px #c7c7c7, 63px 0 0 -8px #c7c7c7, 64px 0 0 -8px #c7c7c7, 65px 0 0 -8px #c7c7c7, 66px 0 0 -8px #c7c7c7, 67px 0 0 -8px #c7c7c7, 68px 0 0 -8px #c7c7c7, 69px 0 0 -8px #c7c7c7, 70px 0 0 -8px #c7c7c7, 71px 0 0 -8px #c7c7c7, 72px 0 0 -8px #c7c7c7, 73px 0 0 -8px #c7c7c7, 74px 0 0 -8px #c7c7c7, 75px 0 0 -8px #c7c7c7, 76px 0 0 -8px #c7c7c7, 77px 0 0 -8px #c7c7c7, 78px 0 0 -8px #c7c7c7, 79px 0 0 -8px #c7c7c7, 80px 0 0 -8px #c7c7c7, 81px 0 0 -8px #c7c7c7, 82px 0 0 -8px #c7c7c7, 83px 0 0 -8px #c7c7c7, 84px 0 0 -8px #c7c7c7, 85px 0 0 -8px #c7c7c7, 86px 0 0 -8px #c7c7c7, 87px 0 0 -8px #c7c7c7, 88px 0 0 -8px #c7c7c7, 89px 0 0 -8px #c7c7c7, 90px 0 0 -8px #c7c7c7, 91px 0 0 -8px #c7c7c7, 92px 0 0 -8px #c7c7c7, 93px 0 0 -8px #c7c7c7, 94px 0 0 -8px #c7c7c7, 95px 0 0 -8px #c7c7c7, 96px 0 0 -8px #c7c7c7, 97px 0 0 -8px #c7c7c7, 98px 0 0 -8px #c7c7c7, 99px 0 0 -8px #c7c7c7, 100px 0 0 -8px #c7c7c7, 101px 0 0 -8px #c7c7c7, 102px 0 0 -8px #c7c7c7, 103px 0 0 -8px #c7c7c7, 104px 0 0 -8px #c7c7c7, 105px 0 0 -8px #c7c7c7, 106px 0 0 -8px #c7c7c7, 107px 0 0 -8px #c7c7c7, 108px 0 0 -8px #c7c7c7, 109px 0 0 -8px #c7c7c7, 110px 0 0 -8px #c7c7c7, 111px 0 0 -8px #c7c7c7, 112px 0 0 -8px #c7c7c7, 113px 0 0 -8px #c7c7c7, 114px 0 0 -8px #c7c7c7, 115px 0 0 -8px #c7c7c7, 116px 0 0 -8px #c7c7c7, 117px 0 0 -8px #c7c7c7, 118px 0 0 -8px #c7c7c7, 119px 0 0 -8px #c7c7c7, 120px 0 0 -8px #c7c7c7, 121px 0 0 -8px #c7c7c7, 122px 0 0 -8px #c7c7c7, 123px 0 0 -8px #c7c7c7, 124px 0 0 -8px #c7c7c7, 125px 0 0 -8px #c7c7c7, 126px 0 0 -8px #c7c7c7, 127px 0 0 -8px #c7c7c7, 128px 0 0 -8px #c7c7c7, 129px 0 0 -8px #c7c7c7, 130px 0 0 -8px #c7c7c7, 131px 0 0 -8px #c7c7c7, 132px 0 0 -8px #c7c7c7, 133px 0 0 -8px #c7c7c7, 134px 0 0 -8px #c7c7c7, 135px 0 0 -8px #c7c7c7, 136px 0 0 -8px #c7c7c7, 137px 0 0 -8px #c7c7c7, 138px 0 0 -8px #c7c7c7, 139px 0 0 -8px #c7c7c7, 140px 0 0 -8px #c7c7c7, 141px 0 0 -8px #c7c7c7, 142px 0 0 -8px #c7c7c7, 143px 0 0 -8px #c7c7c7, 144px 0 0 -8px #c7c7c7, 145px 0 0 -8px #c7c7c7, 146px 0 0 -8px #c7c7c7, 147px 0 0 -8px #c7c7c7, 148px 0 0 -8px #c7c7c7, 149px 0 0 -8px #c7c7c7, 150px 0 0 -8px #c7c7c7, 151px 0 0 -8px #c7c7c7, 152px 0 0 -8px #c7c7c7, 153px 0 0 -8px #c7c7c7, 154px 0 0 -8px #c7c7c7, 155px 0 0 -8px #c7c7c7, 156px 0 0 -8px #c7c7c7, 157px 0 0 -8px #c7c7c7, 158px 0 0 -8px #c7c7c7, 159px 0 0 -8px #c7c7c7, 160px 0 0 -8px #c7c7c7, 161px 0 0 -8px #c7c7c7, 162px 0 0 -8px #c7c7c7, 163px 0 0 -8px #c7c7c7, 164px 0 0 -8px #c7c7c7, 165px 0 0 -8px #c7c7c7, 166px 0 0 -8px #c7c7c7, 167px 0 0 -8px #c7c7c7, 168px 0 0 -8px #c7c7c7, 169px 0 0 -8px #c7c7c7, 170px 0 0 -8px #c7c7c7, 171px 0 0 -8px #c7c7c7, 172px 0 0 -8px #c7c7c7, 173px 0 0 -8px #c7c7c7, 174px 0 0 -8px #c7c7c7, 175px 0 0 -8px #c7c7c7, 176px 0 0 -8px #c7c7c7, 177px 0 0 -8px #c7c7c7, 178px 0 0 -8px #c7c7c7, 179px 0 0 -8px #c7c7c7, 180px 0 0 -8px #c7c7c7, 181px 0 0 -8px #c7c7c7, 182px 0 0 -8px #c7c7c7, 183px 0 0 -8px #c7c7c7, 184px 0 0 -8px #c7c7c7, 185px 0 0 -8px #c7c7c7, 186px 0 0 -8px #c7c7c7, 187px 0 0 -8px #c7c7c7, 188px 0 0 -8px #c7c7c7, 189px 0 0 -8px #c7c7c7, 190px 0 0 -8px #c7c7c7, 191px 0 0 -8px #c7c7c7, 192px 0 0 -8px #c7c7c7, 193px 0 0 -8px #c7c7c7, 194px 0 0 -8px #c7c7c7, 195px 0 0 -8px #c7c7c7, 196px 0 0 -8px #c7c7c7, 197px 0 0 -8px #c7c7c7, 198px 0 0 -8px #c7c7c7, 199px 0 0 -8px #c7c7c7, 200px 0 0 -8px #c7c7c7, 201px 0 0 -8px #c7c7c7, 202px 0 0 -8px #c7c7c7, 203px 0 0 -8px #c7c7c7, 204px 0 0 -8px #c7c7c7, 205px 0 0 -8px #c7c7c7, 206px 0 0 -8px #c7c7c7, 207px 0 0 -8px #c7c7c7, 208px 0 0 -8px #c7c7c7, 209px 0 0 -8px #c7c7c7, 210px 0 0 -8px #c7c7c7, 211px 0 0 -8px #c7c7c7, 212px 0 0 -8px #c7c7c7, 213px 0 0 -8px #c7c7c7, 214px 0 0 -8px #c7c7c7, 215px 0 0 -8px #c7c7c7, 216px 0 0 -8px #c7c7c7, 217px 0 0 -8px #c7c7c7, 218px 0 0 -8px #c7c7c7, 219px 0 0 -8px #c7c7c7, 220px 0 0 -8px #c7c7c7, 221px 0 0 -8px #c7c7c7, 222px 0 0 -8px #c7c7c7, 223px 0 0 -8px #c7c7c7, 224px 0 0 -8px #c7c7c7, 225px 0 0 -8px #c7c7c7, 226px 0 0 -8px #c7c7c7, 227px 0 0 -8px #c7c7c7, 228px 0 0 -8px #c7c7c7, 229px 0 0 -8px #c7c7c7, 230px 0 0 -8px #c7c7c7, 231px 0 0 -8px #c7c7c7, 232px 0 0 -8px #c7c7c7, 233px 0 0 -8px #c7c7c7, 234px 0 0 -8px #c7c7c7, 235px 0 0 -8px #c7c7c7, 236px 0 0 -8px #c7c7c7, 237px 0 0 -8px #c7c7c7, 238px 0 0 -8px #c7c7c7, 239px 0 0 -8px #c7c7c7, 240px 0 0 -8px #c7c7c7;
  margin-top: -8px;
  border: 1px solid #777;
  }

  &::-moz-range-track {
  width: 240px;
  height: 2px;
  }

  &::-moz-range-thumb {
  height: 18px;
  width: 28px;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #777;
  position: relative;
  }

  &::-moz-range-progress {
  height: 2px;
  background: cyan;
  border: 0;
  margin-top: 0;
  }

  &::-ms-track {
  background: transparent;
  border: 0;
  border-color: transparent;
  border-radius: 0;
  border-width: 0;
  color: transparent;
  height: 2px;
  margin-top: 10px;
  width: 240px;
  }

  &::-ms-thumb {
  height: 18px;
  width: 28px;
  background: cyan;
  border-radius: 8px;
  border: 1px solid #777;
  }

  &::-ms-fill-lower {
  background: cyan;
  border-radius: 0;
  }

  &::-ms-fill-upper {
  background: #c7c7c7;
  border-radius: 0;
  }

  &::-ms-tooltip {
  display: none;
  }
`;