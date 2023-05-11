import { styled } from '@mui/material/styles';
import { Box as MuiBox, Button as MuiButton, Typography as MuiTypography } from '@mui/material';

export const Sidebar = styled(MuiBox)(
    ({ theme }) => `
    position: absolute;
    top: 0;
    left: 0;

    height: 100vh;
    width: 200px;

    border-right: 1px solid #F3F3F3;
`,
);

export const Box = styled(MuiBox)(
    ({ theme }) => `
`,
);

export const Button = styled(MuiButton)(
    ({ theme }) => `
`,
);

export const Typography = styled(MuiTypography)(
    ({ theme }) => `
`,
);
