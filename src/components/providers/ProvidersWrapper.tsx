import { useMemo, useState } from 'react';

import { ThemeProvider as StyledComponentThemeProvider } from 'styled-components';
import { createTheme, ThemeProvider } from '@mui/material';
import { myTheme } from '@/styles/theme';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@/styles/GlobalStyles';

import CustomUtilsContextProvider from './CustomUtilsProvider';
import ActionsContextProvider from './ActionsProvider';
import DialogProvider from './DialogProvider';

type ProvidersWrapperProps = {
    children: React.ReactNode;
};

const ProvidersWrapper = (props: ProvidersWrapperProps) => {
    const { children } = props;
    const [mode, setMode] = useState<'light' | 'dark'>('light');

    const theme = useMemo(
        () =>
            createTheme({
                ...myTheme,
                palette: {
                    mode,
                    ...myTheme.palette,
                },
            }),
        [mode],
    );

    return (
        <ActionsContextProvider>
            <CustomUtilsContextProvider>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <StyledComponentThemeProvider theme={theme}>
                        <GlobalStyles />
                    </StyledComponentThemeProvider>
                    <DialogProvider>{children}</DialogProvider>
                </ThemeProvider>
            </CustomUtilsContextProvider>
        </ActionsContextProvider>
    );
};

export default ProvidersWrapper;
