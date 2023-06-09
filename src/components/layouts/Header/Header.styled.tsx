import { alpha, styled } from '@mui/material/styles';
import {
    Accordion as MuiAccordion,
    AccordionSummary as MuiAccordionSummary,
    AccordionDetails as MuiAccordionDetails,
    Box as MuiBox,
    Button as MuiButton,
    IconButton as MuiIconButton,
    Stack as MuiStack,
    Typography as MuiTypography,
} from '@mui/material';

export const AccordionSummary = styled(MuiAccordionSummary)(
    ({ theme }) => `
    &.MuiAccordionSummary-root {
        min-height: unset;
        height: 40px;
    }
    &.MuiAccordionSummary-root > .MuiAccordionSummary-content {
        width: 100%; 
        height: 20px;

        display: flex;
        align-items: center;
        justify-content: center;
    }
`,
);

export const AccordionDetails = styled(MuiAccordionDetails)(
    ({ theme }) => `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`,
);

export const Accordion = styled(MuiAccordion)(
    ({ theme }) => `
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;

    color: ${theme.palette.common.white};
    background-color: ${alpha(theme.palette.primary.main, 0.8)};

    box-shadow: unset;
`,
);

export const Box = styled(MuiBox)(
    ({ theme }) => `
`,
);

export const HeaderBox = styled(MuiBox)(
    ({ theme }) => `
    position: fixed;
    width: 100vw;
    height: 10vh;

    background-color: ${theme.palette.primary.main};
    color: ${theme.palette.common.white};

    z-index: 1;


    @media only screen and (max-width: 1024px) {
        padding: 12px 0;
    }

    @media only screen and (min-width: 1025px) {
        padding: 12px;
    }
`,
);

export const Button = styled(MuiButton)(
    ({ theme }) => `
    border: 1px solid ${theme.palette.common.white};
    border-radius: 40px;
    color: ${theme.palette.common.white};
    height: 48px;
    
    :hover {
        border: 1px solid ${theme.palette.common.white};
        opacity: 0.7;
    }

    @media only screen and (min-width: 1025px) {
        display: inline;
        margin-left: auto;
    }
`,
);

export const IconButton = styled(MuiIconButton)(
    ({ theme }) => `
    :hover {
        background-color: transparent;
    }
    img {
        filter: invert(100%) sepia(1%) saturate(7429%) hue-rotate(155deg) brightness(115%) contrast(90%);
    }
`,
);

export const Stack = styled(MuiStack)(
    ({ theme }) => `
    &.navigate_list {
        
        @media only screen and (min-width: 1025px) {
            width: 100%;

            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 40px;
        }

        .navigate_item {
            position: relative;
            cursor: pointer;

            @media only screen and (min-width: 1025px) {
                display: flex;
                justify-content: center;
                height: calc(10vh - 24px);
            }
        }
    }

`,
);

export const Typography = styled(MuiTypography)(
    ({ theme }) => `
    &.MuiTypography-h6 {
        font-size: 18px;
        font-weight: 600;
        line-height: 25px;
    }
    
`,
);
