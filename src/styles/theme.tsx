import { createTheming } from '@callstack/react-theme-provider';

export const Theme = {
    primary: "#1db954",
    highLight: "#3edf76",
    dark: "#121212",
    darkGrey: "#212121",
    midGrey: "#535353",
    grey: "#b3b3b3",
    lightGrey: "#d1cfcf"
}

export interface themeProps{
    primary: string,
    highLight: string,
    dark: string,
    darkGrey: string,
    midGrey: string,
    grey: string,
    lightGrey: string
}

const { ThemeProvider, withTheme } = createTheming(Theme);

export { ThemeProvider, withTheme };