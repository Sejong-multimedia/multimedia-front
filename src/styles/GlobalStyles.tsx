import { createGlobalStyle } from 'styled-components';
import theme from '@/styles/theme';

type ThemeProps = typeof theme;

const GlobalStyles = createGlobalStyle<{ theme: ThemeProps }>(
    (props) => `
    html, body {
        height: 100%;
    }

    #root {
      height: 100%
    }
`,
);
