import { styled } from '@mui/material/styles';
import {
    Box as MuiBox,
    Button as MuiButton,
    IconButton as MuiIconButton,
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
    width: 100vw;

    display: flex;
    

    padding: 12px;

    z-index: 1;

    color: ${theme.palette.common.white};

    @media only screen and (max-width: 640px) {
        flex-direction: column;
    }
    @media only screen and (min-width: 641px) {
        
        justify-content: space-between;
        align-items: center;
    }
`,
);

export const Button = styled(MuiButton)(
    ({ theme }) => `
    border: 1px solid ${theme.palette.common.white};
    border-radius: 40px;
    color: ${theme.palette.common.white};
    
    :hover {
        border: 1px solid ${theme.palette.common.white};
        opacity: 0.8;
    }
`,
);

export const IconButton = styled(MuiIconButton)(
    ({ theme }) => `
    img {
        filter: invert(100%) sepia(1%) saturate(7429%) hue-rotate(155deg) brightness(115%) contrast(90%);
    }
`,
);

export const Stack = styled(MuiStack)(
    ({ theme }) => `
    &.navigate_list {
        align-items: center;

        @media only screen and (max-width: 640px) {
            flex-direction: column;
            gap: 6px;
        }
        @media only screen and (min-width: 641px) {
            flex-direction: row;
            gap: 60px;
        }

        .navigate_item {
            position: relative;

            display: flex;
            justify-content: center;

            height: calc(10vh - 24px);

            cursor: pointer;
        }
    }

`,
);

export const Typography = styled(MuiTypography)(
    ({ theme }) => `
    &.MuiTypography-h6 {
        font-size: 18px;
        font-weight: 600;
        line-height: 25px;
    }
    
`,
);
