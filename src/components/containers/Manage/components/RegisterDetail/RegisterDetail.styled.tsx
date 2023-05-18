import { styled } from '@mui/material/styles';
import {
    Box as MuiBox,
    Button as MuiButton,
    Divider as MuiDivider,
    Stack as MuiStack,
    Typography as MuiTypography,
} from '@mui/material';

export const RegisterDetailBox = styled(MuiBox)(
    ({ theme }) => `
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,
);

export const Box = styled(MuiBox)(
    ({ theme }) => `
    &.register_datail_item {
        display: flex;
        align-items: center;
        gap: 40px;

        * {
            margin: 6px 0;
        }

        *:nth-of-type(1) {
            flex: 1 1 0;
        }
        *:nth-of-type(2) {
            flex: 3 1 0;
        }

        .MuiTypography-h6 {
            text-align:  center;
        }

        @media only screen and (max-width: 640px) {
            width: 70%;
        }
        @media only screen and (min-width: 641px) and (max-width: 1024px) {
            width: 60%;
        }
        @media only screen and (min-width: 1025px) {
            width: 50%;
        }
    }

    &.car_type {
        width: 100%;
    }
`,
);

export const Button = styled(MuiButton)(
    ({ theme }) => `
    margin-top: 36px;
    height: 66px;

    background-color: ${theme.palette.primary.main};
    color: ${theme.palette.common.white};

    :hover {
        background-color: ${theme.palette.primary.dark};
    }
    :active {
        opacity: 0.7;
    }

    @media only screen and (max-width: 640px) {
        width: 60%;
    }
    @media only screen and (min-width: 641px) {
        width: 40%;
    }
    `,
);

export const Divider = styled(MuiDivider)(
    ({ theme }) => `
    margin: 12px auto;

    @media only screen and (max-width: 640px) {
        width: 75%;
    }
    @media only screen and (min-width: 641px) {
        width: 65%;
    }
`,
);

export const Stack = styled(MuiStack)(
    ({ theme }) => `
`,
);

export const Typography = styled(MuiTypography)(
    ({ theme }) => `
    &.car_number {
        font-size: 2.75rem;
        font-weight: 700;
        
        text-align: center;

        border: 3px solid #131313;
        border-radius: 8px;

        @media only screen and (max-width: 640px) {
            letter-spacing: 0.3rem;
        }
        @media only screen and (min-width: 641px) {
            letter-spacing: 0.5rem;
        }
    }
`,
);
