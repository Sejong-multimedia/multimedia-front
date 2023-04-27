import { alpha, styled } from '@mui/material/styles';
import { Box as MuiBox } from '@mui/material';

export const Box = styled(MuiBox)(
    ({ theme }) => `
    &.layout-type-2 {
        width: 100vw;
        height: 100vh;
    }

    .main {
        height: 100%;
        padding-top: 170px;
    }
`,
);

export const Main = styled(MuiBox)(
    ({ theme }) => `
    height: 100%;
    background: ${alpha('#FFFFFF', 0.3)};
    backdrop-filter: blur(10px);
    
`,
);
