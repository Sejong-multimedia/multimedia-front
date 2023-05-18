import { keyframes, styled } from '@mui/material/styles';
import {
    Box as MuiBox,
    Button as MuiButton,
    IconButton as MuiIconButton,
    Typography as MuiTypography,
    TextField as MuiTextField,
} from '@mui/material';

export const RegisterBox = styled(MuiBox)(
    ({ theme }) => `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,
);

export const Button = styled(MuiButton)(
    ({ theme }) => `
`,
);

export const IconButton = styled(MuiIconButton)(
    ({ theme }) => `
    position: absolute;
    bottom: 24px;
    right: 24px;
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
