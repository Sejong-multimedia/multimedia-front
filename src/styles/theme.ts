import { createTheme } from '@mui/material/styles';

const breakpoints = {
    values: {
        xs: 0,
        sm: 640,
        md: 1024,
        lg: 1280,
        xl: 1920,
    },
};

export const myTheme = {
    breakpoints,
    palette: {
        primary: {
            A700: '#1A2757',
            A400: '#DDFBFF',
            A200: '#E7F0FE',
            A100: '#F5F8FF',
            900: '#131E4F',
            800: '#1D2B5E',
            700: '#182C77',
            600: '#131ADE',
            500: '#0606FE',
            400: '#2059ED',
            300: '#0C7CFF',
            200: '#368DF4',
            100: '#8DBEFF',
            50: '#ABD0F2',
            main: '#2059ED',
            light: '#5487FD',
            dark: '#1C50D8',
            contrastText: '#ffffff',
        },
        secondary: {
            A700: '#8DA6FF',
            A400: '#0A5BA6',
            A200: '#182C77',
            A100: '',
            900: '#6378A4',
            800: '#5677A7',
            700: '#7C9DDE',
            600: '#8DBEFF',
            500: '#ABD0F2',
            400: '',
            300: '',
            200: '#BFC5D3',
            100: '#DFDFEE',
            50: '#F2F3F8',
            main: '#11193f',
            light: '#6f6f83',
            dark: '#11193f',
            contrastText: '#ffffff',
        },
        success: {
            main: '#2059ED',
            light: '#5487FD',
            dark: '#1C50D8',
            contrastText: '#ffffff',
        },
        warning: {
            main: '#FFAD32',
            light: '#FFEF64',
            dark: '#F79B30',
            contrastText: '#ffffff',
        },
        error: {
            main: '#EF5149;',
            light: '#E16E64',
            dark: '#C1473F',
            contrastText: '#ffffff',
        },
        grey: {
            A700: '#131B43',
            A400: '#E7F0FE',
            A200: '#16204A',
            A100: '#F9F9F9',
            900: '#0B0E27',
            800: '#1E2025',
            700: '#4D4D4D',
            600: '#858585',
            500: '#ADADAD',
            400: '#C2C2C2',
            300: '#D6D6D6',
            200: '#E0E0E0',
            100: '#EBEBEB',
            50: '#F5F5F5',
        },
        background: {
            default: '#ffffff',
            dark: '#000000',
            nocon: 'rgba(237, 239, 245, 0.2) /*#FBFCFD*/',
            noconhover: 'rgba(237, 239, 245, 0.4) /*#F8F9FB*/',
            module: '#F6F7FA',
            hoverdark: '#141D48',
            outline: 'rgba(99, 120, 164, 0.1)',
            outlinedark: 'rgba(99, 120, 164, 0.4)',
            tooltipbg: '#121A3F',
            tooltipline: 'rgba(99, 120, 164, 0.6)',
            dark50: 'rgba(29, 43, 94, 0.5)',
        },
        navigation: {
            default70: '#F9F9FA',
            default: '#F7F7F8',
            dehover: '#F2F2F3',
            dark: '#11183C',
            dahover: '#17214B',
        },
        divider: '#E1E8F1',
        transparency: {
            white10: 'rgba(255,255,255,0.1)',
            white16: 'rgba(255,255,255,0.16)',
            white20: 'rgba(255,255,255,0.2)',
            white50: 'rgba(255,255,255,0.5)',
            white: 'rgba(255,255,255,1)',
            black10: 'rgba(0,0,0,0.1)',
            black16: 'rgba(0,0,0,0.16)',
            black50: 'rgba(0,0,0,0.5)',
            black: 'rgba(0,0,0,1)',
        },
        shadow: {
            whitecard: '0px 0px 4px rgba(0, 0, 0, 0.1), 4px 4px 16px rgba(0, 0, 0, 0.05)',
            whitebtn: '2px 2px 5px rgba(0, 0, 0, 0.1)',
            whitetooltip: '0px 2px 5px 1px rgba(0, 0, 0, 0.12)',
            darkcard: '2px 2px 10px rgba(4, 8, 33, 0.2), 4px 4px 8px rgba(4, 8, 33, 0.1)',
            darkbtn: '2px 2px 5px rgba(0, 0, 0, 0.1)',
            darktooltip:
                '2px 2px 10px rgba(4, 8, 33, 0.5), 4px 4px 8px rgba(4, 8, 33, 0.2)' /* '4px 4px 8px rgba(4, 8, 33, 0.7)' */,
        },
        chipbox: {
            whitesuccess: '#E9FFDE',
            darksuccess: '#133F3C',
            darksuccessline: '#144B3C',

            whiteerror: '#FFE6E6',
            whiteerrorline: '#FCD2D2',
            darkerror: '#4A2739',
            darkerrorline: '#5B2B38',
        },
        graph: {
            500: '#FFEF64',
            400: '#69E8EA',
            300: '#64DAFF',
            200: '#1BBAFE',
            100: '#0C46F9',
        },
        gradient: {
            type1: 'linear-gradient(89.97deg, #0A4FFF 0.03%, #131ADE 99.97%)',
            type2: 'linear-gradient(99.59deg, #0C7CFF 0%, #0606FE 100%)',
            type3: 'linear-gradient(90deg, #FFFFFF 1.46%, #0C7CFF 100%)',
            logo: 'linear-gradient(130.46deg, #00B2FF -5.97%, #101CBC 104.5%);',
        },
    },
    mixins: {
        toolbar: {
            minHeight: '56',
            '@media (min-width: 640px)': {
                minHeight: 56,
            },
        },
    },
    typography: {
        fontFamily: `'Roboto', sans-serif;`,
    },
    components: {
        MuiDialog: {
            styleOverrides: {
                paper: {
                    minWidth: breakpoints.values.sm,
                    maxWidth: breakpoints.values.sm,
                },
            },
        },
    },
};

const theme = createTheme(myTheme);

export default theme;
