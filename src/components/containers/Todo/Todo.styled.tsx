import { styled } from '@mui/material';
import {
    Box as MuiBox,
    Checkbox as MuiCheckbox,
    Stack as MuiStack,
    Typography as MuiTypography,
    TextField as MuiTextField,
    Button as MuiButton,
} from '@mui/material';

export const Box = styled(MuiBox)(
    ({ theme }) => `
    padding: 12px;
`,
);

export const Checkbox = styled(MuiCheckbox)(
    ({ theme }) => `
`,
);

export const Stack = styled(MuiStack)(
    ({ theme }) => `

    &.month-field {
        flex-direction: row;
        align-items: center;
        gap: 12px;
    }
    
    &.input-field {
        flex-direction: row;
        align-items: center;
        gap: 12px;
    }

    &.todo-list {
        flex-direction: row;
        align-items: center;
        gap: 12px;
        padding 8px;
    }
`,
);

export const Typography = styled(MuiTypography)(
    ({ theme }) => `
    &.subtitle {
        margin-bottom: 12px;
    }

    &.todo-done {
        text-decoration: line-through;
    }

    &.todo-undone {
        text-decoration: none;
    }
`,
);

export const TextField = styled(MuiTextField)(
    ({ theme }) => `
    width: 400px;
`,
);

export const Button = styled(MuiButton)(
    ({ theme }) => `
    &.input-button {
        height: 100%;
    }
`,
);
