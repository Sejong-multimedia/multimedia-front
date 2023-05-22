import { createGlobalStyle } from 'styled-components';
import theme from '@/styles/theme';

type ThemeProps = typeof theme;

const GlobalStyles = createGlobalStyle<{ theme: ThemeProps }>(
    (props) => `
    html, body {
      width: 100%;
      height: 100%;

    }

    #root {
      height: 100%
    }
`,
);

export default GlobalStyles;
