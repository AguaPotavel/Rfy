import React, { ReactNode } from 'react'
import { IconContext } from "react-icons";
import { BsHouseDoor, BsHouseDoorFill, BsCollectionPlay, BsCollectionPlayFill} from 'react-icons/bs';
import { GoKebabHorizontal } from "react-icons/go";
import { IoHeadsetOutline, IoHeadsetSharp } from "react-icons/io5";
import { svgProps } from '../../types/common'

interface Props extends svgProps{
    children?: ReactNode;
}


export function Home(data: Props): JSX.Element{
    return (
        <IconContext.Provider value={{ color: data.Svgcolor, size: data.Svgsize}}>
            <div>
                <BsHouseDoor/>
            </div>
        </IconContext.Provider>
    )
}

export function HomeSelected(data: Props): JSX.Element{
    return (
        <IconContext.Provider value={{ color: data.Svgcolor, size: data.Svgsize}}>
            <div>
                <BsHouseDoorFill/>
            </div>
        </IconContext.Provider>
    )
}

export function Collection(data: Props): JSX.Element{
    return (
        <IconContext.Provider value={{ color: data.Svgcolor, size: data.Svgsize}}>
            <div>
                <BsCollectionPlay/>
            </div>
        </IconContext.Provider>
    )
}

export function CollectionSelected(data: Props): JSX.Element{
    return (
        <IconContext.Provider value={{ color: data.Svgcolor, size: data.Svgsize}}>
            <div>
                <BsCollectionPlayFill/>
            </div>
        </IconContext.Provider>
    )
}

export function Radio(data: Props): JSX.Element{
    return (
        <IconContext.Provider value={{ color: data.Svgcolor, size: data.Svgsize}}>
            <div>
                <IoHeadsetOutline/>
            </div>
        </IconContext.Provider>
    )
}

export function RadioSelected(data: Props): JSX.Element{
    return (
        <IconContext.Provider value={{ color: data.Svgcolor, size: data.Svgsize}}>
            <div>
                <IoHeadsetSharp/>
            </div>
        </IconContext.Provider>
    )
}