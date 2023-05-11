import { css, keyframes, styled } from '@mui/material/styles';
import {
    Box as MuiBox,
    Button as MuiButton,
    TextField as MuiTextField,
    Typography as MuiTypography,
} from '@mui/material';

export const ManageBox = styled(MuiBox)(
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
        &.manage_area {
            position: relative;
            top: 100%;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            width: 100%;

            background: ${theme.palette.common.white};

            border-top-right-radius: 24px;
            border-top-left-radius: 24px;

            animation: ${slideUp} 0.5s ease-in-out forwards;

            @media only screen and (max-width: 640px) {
                margin-top: 40vh;
                height: 60vh;
            }
            @media only screen and (min-width: 641px) {
                margin-top: 10vh;
                height: 90vh;
            }
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
`,
);

export const TextField = styled(MuiTextField)(
    ({ theme }) => `
    width: 90%;

    margin-top: 50px;

    border: 3px solid #131313;
    border-radius: 18px;

    .MuiInputBase-input {
        font-size: 7rem;
        font-weight: 700;
        text-align: center;
        letter-spacing: 0.5rem;
    }
`,
);

export const Typography = styled(MuiTypography)(
    ({ theme }) => `
    .MuiTypography-h3 {
        font-weight: 500;
    }
`,
);
