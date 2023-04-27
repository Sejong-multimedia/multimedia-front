import { styled } from '@mui/material/styles';
import { Box as MuiBox, Button as MuiButton, Typography as MuiTypography } from '@mui/material';

export const Box = styled(MuiBox)(
    ({ theme }) => `
    padding: 12px;

    height: 100px;

    display: flex;
    justify-content: flex-end;
`,
);

export const Button = styled(MuiButton)(
    ({ theme }) => `
    text-transform: none;
    min_height: unset;

    img {
        margin-right: 12px;
    }
`,
);

export const Typography = styled(MuiTypography)(
    ({ theme }) => `
    margin: 0;
`,
);
