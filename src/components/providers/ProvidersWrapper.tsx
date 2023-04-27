import { useMemo, useState } from 'react';

import { createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { myTheme } from '@/styles/theme';
import CustomUtilsContextProvider from './CustomUtilsProvider';
import ActionsContextProvider from './ActionsProvider';

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
                <CssBaseline />
                <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </CustomUtilsContextProvider>
        </ActionsContextProvider>
    );
};

export default ProvidersWrapper;
