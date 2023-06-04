import { keyframes, css } from '@mui/system';
import { Box as MuiBox, Stack as MuiStack } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
export const Stack = styled(MuiStack)(
    ({ theme }) => `
        width: 100%;
        height: 100%;
    `,
);

export const Box = styled(MuiBox)(
    ({ theme }) => `
        position: absolute;
        width: 100%;
        height: 100%;
        top:0;
        left:0;
        align-items: center;
        justify-content: center;
        z-index: 1200;
        border-radius: 5px;
        display: flex;

        backdrop-filter: blur(4px);

        .MuiCircularProgress-svg {
            color: ${theme.palette.grey[500]};
        }
    `,
);

const LoadingKeyframe = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

export const LoadingAnimation = styled('div')(
    ({ theme }) => css`
        display: inline-flex;
        align-items: center;
        svg {
            width: 50px;
            height: 50px;
            fill: ${theme.palette.grey.A100};
            animation: ${LoadingKeyframe} 1s infinite steps(8);
        }
    `,
);
