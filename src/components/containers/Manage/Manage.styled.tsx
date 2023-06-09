import { css, keyframes, styled } from '@mui/material/styles';
import {
    Box as MuiBox,
    Button as MuiButton,
    IconButton as MuiIconButton,
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

            margin-top: 10vh;
            height: 90vh;
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

export const IconButton = styled(MuiIconButton)(
    ({ theme }) => `
    &.prev {
        position: absolute;
        bottom: 24px;
        left: 24px;
    }
    &.next {
        position: absolute;
        bottom: 24px;
        right: 24px;
    }
`,
);

export const TextField = styled(MuiTextField)(
    ({ theme }) => `
    width: 90%;
    margin-top: 50px;

    .MuiInputBase-input {
        border: 3px solid #131313;
        border-radius: 18px;
        font-size: 7rem;
        font-weight: 700;
        text-align: center;
        letter-spacing: 0.5rem;

    }

    .MuiOutlinedInput-notchedOutline {
        border: none;
    }

    .Mui-error {
        border-radius: 18px;   
        .MuiInputBase-input {
            border: 3px solid ${theme.palette.error.light};
        }   
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
