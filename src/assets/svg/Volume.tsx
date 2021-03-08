import React, { ReactNode } from 'react'
import { IconContext } from "react-icons";
import { BsVolumeUp, BsVolumeMute, BsVolumeDown } from 'react-icons/bs';
import { svgProps } from '../../types/common'

interface Props extends svgProps{
    children?: ReactNode;
}

export function VolumeHigh(data: Props): JSX.Element{
    return (
        <IconContext.Provider value={{ color: data.Svgcolor, size: data.Svgsize}}>
            <div>
                <BsVolumeUp/>
            </div>
        </IconContext.Provider>
    )
}

export function VolumeMuted(data: Props): JSX.Element{
    return (
        <IconContext.Provider value={{ color: data.Svgcolor, size: data.Svgsize}}>
            <div>
                <BsVolumeMute/>
            </div>
        </IconContext.Provider>
    )
}

export function VolumeLow(data: Props): JSX.Element{
    return (
        <IconContext.Provider value={{ color: data.Svgcolor, size: data.Svgsize}}>
            <div>
                <BsVolumeDown/>
            </div>
        </IconContext.Provider>
    )
}