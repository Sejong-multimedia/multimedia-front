import { useMemo, useState } from 'react';

import { createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import CustomUtilsContextProvider from './CustomUtilsProvider';
import { myTheme } from '@/styles/theme';

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
        <CustomUtilsContextProvider>
            <CssBaseline />
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </CustomUtilsContextProvider>
    );
};

export default ProvidersWrapper;
