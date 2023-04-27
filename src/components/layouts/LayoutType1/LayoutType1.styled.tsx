import { alpha, styled } from '@mui/material/styles';
import { Box as MuiBox } from '@mui/material';

export const Box = styled(MuiBox)(
    ({ theme }) => `
    &.layout-type-1 {
        width: 100vw;
        height: 100vh;
        background: ${theme.palette.primary[50]};
    }

    .main {
        height: 100%;
    }
`,
);

export const Main = styled(MuiBox)(
    ({ theme }) => `
    height: 100%;
`,
);
