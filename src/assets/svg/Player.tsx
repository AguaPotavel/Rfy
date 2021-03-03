import React, { ReactNode } from 'react'
import { IconContext } from "react-icons";
import { FaStepForward, FaStepBackward, FaSyncAlt, FaRandom, FaPlay, FaPause } from 'react-icons/fa';
import { svgProps } from '../../types/common'

interface Props extends svgProps{
    children?: ReactNode;
}

export function NextSvg(data: Props): JSX.Element{
    return (
        <IconContext.Provider value={{ color: data.Svgcolor, size: data.Svgsize}}>
            <div>
                <FaStepForward/>
            </div>
        </IconContext.Provider>
    )
}

export function BackSvg(data: Props): JSX.Element {
    return (<>
        <IconContext.Provider value={{ color: data.Svgcolor, size: data.Svgsize}}>
            <div>
                <FaStepBackward/>
            </div>
        </IconContext.Provider>
    </>)
}

export function PlaySvg<Props>(data: svgProps): JSX.Element {
    return (<>
        <IconContext.Provider value={{ color: data.Svgcolor, size: data.Svgsize}}>
            <div>
                <FaPlay/>
            </div>
        </IconContext.Provider>
    </>)
}

export function PauseSvg<Props>(data: svgProps): JSX.Element {
    return (<>
        <IconContext.Provider value={{ color: data.Svgcolor, size: data.Svgsize}}>
            <div>
                <FaPause/>
            </div>
        </IconContext.Provider>
    </>)
}

export function RandomSvg<Props>(data: svgProps): JSX.Element {
    return (<>
        <IconContext.Provider value={{ color: data.Svgcolor, size: data.Svgsize}}>
            <div>
                <FaRandom/>
            </div>
        </IconContext.Provider>
    </>)
}

export function RepeatSvg<Props>(data: svgProps): JSX.Element {
    return (<>
        <IconContext.Provider value={{ color: data.Svgcolor, size: data.Svgsize}}>
            <div>
                <FaSyncAlt/>
            </div>
        </IconContext.Provider>
    </>)
}





