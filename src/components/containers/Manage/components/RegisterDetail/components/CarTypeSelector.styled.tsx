import { alpha, styled } from '@mui/material/styles';
import {
    Box as MuiBox,
    Collapse as MuiCollapse,
    Divider as MuiDivider,
    Stack as MuiStack,
    TextField as MuiTextField,
    Typography as MuiTypography,
    List as MuiList,
    ListItem as MuiListItem,
    ListItemText as MuiListItemText,
    ListProps,
} from '@mui/material';

export const Box = styled(MuiBox)(
    ({ theme }) => `
`,
);

export const Collapse = styled(MuiCollapse)(
    ({ theme }) => `
`,
);

export const Divider = styled(MuiDivider)(
    ({ theme }) => `
`,
);

export const Stack = styled(MuiStack)(
    ({ theme }) => `
`,
);

export const TextField = styled(MuiTextField)(
    ({ theme }) => `
`,
);

export const Typography = styled(MuiTypography)(
    ({ theme }) => `
`,
);

type MuiListProps = {
    width: string;
} & ListProps;
export const List = styled(MuiList, {
    shouldForwardProp: (prop) => prop !== 'width',
})<MuiListProps>(
    ({ theme, width }) => `
    position: absolute;

    width: ${width}px;

    background-color: ${theme.palette.common.white};
    box-shadow: ${theme.shadows[4]};
    border-radius: ${theme.shape.borderRadius}px;

    *:first-of-type {
        margin: 0;
    }
`,
);

export const ListItem = styled(MuiListItem)(
    ({ theme }) => `
    &.car_model {
        padding: 12px 24px;
        cursor: pointer;

        border-bottom: 1px solid ${theme.palette.grey[50]};
    }

    &.item_button {
        display: flex;
        align-items: center;
    
        border: 1px solid ${theme.palette.grey[300]};
        border-radius: ${theme.shape.borderRadius}px;
    }

    
`,
);

export const ListItemText = styled(MuiListItemText)(
    ({ theme }) => `
    
`,
);
