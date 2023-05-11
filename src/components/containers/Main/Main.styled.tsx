import { css, keyframes, styled } from '@mui/material/styles';
import {
    Box as MuiBox,
    Button as MuiButton,
    Typography as MuiTypography,
    IconButton as MuiIconButton,
} from '@mui/material';

export const Box = styled(MuiBox)(
    ({ theme }) => `
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`,
);

export const Button = styled(MuiButton)(
    ({ theme }) => `
`,
);

export const IconButton = styled(MuiIconButton)(
    ({ theme }) => `
    &.log_in {
        position: absolute;
        bottom: 24px;
        right: 24px;
    }

    &.next {
        position: absolute;
        bottom: 24px;
        right: 24px;
    }

    &.before {
        position: absolute;
        bottom: 24px;
        left: 24px;
    }
`,
);

export const Typography = styled(MuiTypography)(
    ({ theme }) => css`
        &.main {
            animation: ${slideDown} 3s;
        }
    `,
);

const slideDown = keyframes`
    0% {
        transform: translateY(-10%);
    }
    100% {
        transform: translateY(0);
    }
`;
