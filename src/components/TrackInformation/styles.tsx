import styled from 'styled-components'

interface ImageProps{
    image?: string
}

interface ClickableDiv{
    colorText: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    min-width: 250px;

    @media(max-width: 645px) {
        display: none
  }
`;

export const PhotoContainer = styled.div<ImageProps>`
    display: flex;
    width: 64px;
    height: 64px;
    margin: 10px;

    & img{
        width: 64px;
        height: 64px;
    }
`;

export const ArtistsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const ArtistItem = styled.div<ClickableDiv>`
    color: ${props=> props.colorText};
    font-size: 12px;
    opacity: 0.8;

    &:hover{
        opacity:1;
        text-decoration: underline;
        cursor:pointer;
    }
`;

export const MusicTitle = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 15px;

    span{
        position: absolute;
        white-space: nowrap;
        transform: translateX(0);
        transition: 1s;
        width: 100px;
    }

    &:hover{
        text-decoration: underline;
        cursor:pointer;
    }
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px 0px 10px;
`;

export const Comma = styled.div`
    margin-right: 5px;
    font-size: 12px;
    color: #fff;
`;

// https://i.scdn.co/image/8e13218039f81b000553e25522a7f0d7a0600f2e