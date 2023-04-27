import { alpha, styled } from '@mui/material/styles';
import { Box as MuiBox } from '@mui/material';

export const Box = styled(MuiBox)(
    ({ theme }) => `
    &.layout-type-2 {
        width: 100vw;
        height: 100vh;
        background: ${theme.palette.primary[50]};
    }
    
    .main {
        
    }
`,
);

export const Main = styled(MuiBox)(
    ({ theme }) => `
    position: relative;
    z-index: 0;
    height: calc(100% - 100px);

    .background-animation {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: calc(100% - 100px);
            
        display: flex;
        justify-content: center;
        align-items: center;
    
        opacity: .5;
    
        z-index: -1;
    }
`,
);
