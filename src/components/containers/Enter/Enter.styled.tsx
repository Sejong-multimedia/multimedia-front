import { css, keyframes, styled } from '@mui/material/styles';
import { Box as MuiBox, Button as MuiButton, Stack as MuiStack, Typography as MuiTypography } from '@mui/material';

export const EnterBox = styled(MuiBox)(
    ({ theme }) => `
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    overflow: hidden;
`,
);

export const Box = styled(MuiBox)(
    ({ theme }) => css`
        &.enter_area {
            position: relative;
            top: 100%;

            display: flex;
            flex-direction: column;
            align-items: center;

            margin-top: 10vh;

            height: 90vh;
            width: 100%;
            max-width: 1100px;

            background: ${theme.palette.common.white};

            border-top-right-radius: 24px;
            border-top-left-radius: 24px;

            animation: ${slideUp} 0.5s ease-in-out forwards;
        }
    `,
);

const slideUp = keyframes`
    0% {
        top: 100%;
    }
    100% {
        top: 0;
    }
`;

export const Button = styled(MuiButton)(
    ({ theme }) => `
    width: 80%;
    height: 60px;

    text-transform: none;

    border: 3px solid ${theme.palette.primary.main};
    border-radius: 12px;

    :hover {
        border: 3px solid ${theme.palette.primary.main};
    }
`,
);

export const Stack = styled(MuiStack)(
    ({ theme }) => `
    margin: 48px 12px;
    gap: 12px;
    
`,
);

export const Typography = styled(MuiTypography)(
    ({ theme }) => `
    &.MuiTypography-h5 {
        font-weight: 600;
    }

    &.MuiTypography-body2 {
        cursor: pointer;
        text-decoration: underline;
    }
`,
);
