import { createTheming } from '@callstack/react-theme-provider';

export const Theme = {
    primary: "#eb2d1c",
    highLight: "#d8564a",
    dark: "#121212",
    darkGrey: "#212121",
    midGrey: "#535353",
    grey: "#8f8e8e",
    lightGrey: "#e9e8e8",
    white: "#fff"
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