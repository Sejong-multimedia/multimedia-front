import { alpha, styled } from '@mui/material/styles';
import { Box as MuiBox } from '@mui/material';

export const Box = styled(MuiBox)(
    ({ theme }) => `
    &.layout-type-2 {
        width: 100vw;
        height: 100vh;
        background: ${theme.palette.primary.main};
    }
`,
);

export const Main = styled(MuiBox)(
    ({ theme }) => `
    position: relative;

    height: 100%;
    width: 100%;

    z-index: 0;
`,
);
