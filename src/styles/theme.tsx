import { createTheming } from '@callstack/react-theme-provider';

export const Theme = {
    primary: "1db954",
    dark: "#121212",
    darkGrey: "#212121",
    midGrey: "#535353",
    grey: "#b3b3b3"
}

export interface themeProps{
    primary: string,
    dark: string,
    darkGrey: string,
    midGrey: string,
    grey: string
}

const { ThemeProvider, withTheme } = createTheming(Theme);

export { ThemeProvider, withTheme };