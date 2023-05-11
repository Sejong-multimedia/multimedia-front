import { alpha, styled } from '@mui/material/styles';
import { Box as MuiBox } from '@mui/material';

export const Box = styled(MuiBox)(
    ({ theme }) => `
    &.layout-type-1 {
        width: 100vw;
        height: 100vh;
        background: ${theme.palette.common.white};
    }
`,
);

export const Main = styled(MuiBox)(
    ({ theme }) => `
    position: relative;
    z-index: 0;
    height: 100%;
`,
);
