import { Palette, Theme } from '@mui/material/styles';

declare module '@mui/material/styles/createTheme' {
    interface Theme {
        palette: Palette & {
            third: {
                dark: string;
                main: string;
                contrastText: string;
            };
            primary: {
                A700: string;
                A400: string;
                A200: string;
                A100: string;
                900: string;
                800: string;
                700: string;
                600: string;
                500: string;
                400: string;
                300: string;
                200: string;
                100: string;
                50: string;
            };
        };
    }
}
