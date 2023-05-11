import { styled } from '@mui/material/styles';
import {
    Box as MuiBox,
    Button as MuiButton,
    Divider as MuiDivider,
    Stack as MuiStack,
    Typography as MuiTypography,
} from '@mui/material';

export const Box = styled(MuiBox)(
    ({ theme }) => `
`,
);

export const HeaderBox = styled(MuiBox)(
    ({ theme }) => `
    position: fixed;

    padding: 12px;

    z-index: 1;
`,
);

export const Button = styled(MuiButton)(
    ({ theme }) => `
    text-transform: none;
    height: 60px;
    background-color: ${theme.palette.primary[200]};
`,
);

export const Stack = styled(MuiStack)(
    ({ theme }) => `
    &.navigate_list {
        flex-direction: row;
        gap: 24px;

        .navigate_item {
            position: relative;

            height: calc(10vh - 24px);

            justify-content: center;

            cursor: pointer;

            .selector {
                position: absolute;
                bottom: 0;
        
                width: 100%;
                height: 4px;
                background: ${theme.palette.primary.main};
            }
        }
    }

`,
);

export const Typography = styled(MuiTypography)(
    ({ theme }) => `
    &.MuiTypography-h6 {
        font-weight: 700;
    }
    
`,
);
