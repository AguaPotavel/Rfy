import React, { useState } from 'react'
import {withTheme} from '../../styles/theme'
import { RangeVolume, Container } from "./style";


function Volume({ theme }: any): JSX.Element {
    const [volume, setVolume] = useState("10")

    return (
        <Container>
            <RangeVolume type={'range'} min="0" max="100" value={volume} onChange={(event)=> {setVolume((event.target.value).toString()); console.log(event.target.value)}}/>
        </Container>
    );
}


export default withTheme(Volume)