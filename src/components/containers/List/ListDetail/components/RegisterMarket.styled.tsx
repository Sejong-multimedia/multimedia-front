import { styled } from '@mui/material/styles';
import {
    Box as MuiBox,
    Button as MuiButton,
    IconButton as MuiIconButton,
    TextField as MuiTextField,
    Typography as MuiTypography,
} from '@mui/material';

export const RegisterMarketBox = styled(MuiBox)(
    ({ theme }) => `
    padding: 12px;  
`,
);

export const Box = styled(MuiBox)(
    ({ theme }) => `
    &.dialog_header {
        position: relative;

        h6 {
            font-weight: bold;
            text-align: center;
        }

        button {
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;

            color: ${theme.palette.grey[500]};
        }
    }

    &.dialog_content {
        margin: 12px 0;
        padding: 12px;

        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    &.button_group {
        height: 40px;
        position: relative;

        display:flex;
        align-items: center;
        justify-content: center;

        .stepper {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
    
            p {
                font-size: 1rem;
            }
            p.select-true {
                font-size: 1.2rem;
                font-weight: bold;
            }
        }
    }
`,
);

export const Button = styled(MuiButton)(
    ({ theme }) => `
    &.next {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
    }
`,
);

export const IconButton = styled(MuiIconButton)(
    ({ theme }) => `
    &.prev {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        margin: auto;
    }

    &.next {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
    }
`,
);

export const TextField = styled(MuiTextField)(
    ({ theme }) => `
    margin: 10px 0;

    .MuiInputBase-root {
        margin-top: 24px;
    }
    .MuiFormLabel-root {
        font-size: 1.5rem;
        font-weight: bold;
        color: #131313;
    }

    input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`,
);

export const Typography = styled(MuiTypography)(
    ({ theme }) => `
`,
);
