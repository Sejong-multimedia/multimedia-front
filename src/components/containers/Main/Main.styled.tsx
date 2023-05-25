import { css, keyframes, styled } from '@mui/material/styles';
import {
    Box as MuiBox,
    Button as MuiButton,
    Typography as MuiTypography,
    IconButton as MuiIconButton,
} from '@mui/material';

export const MainBox = styled(MuiBox)(
    ({ theme }) => `
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`,
);

export const Box = styled(MuiBox)(
    ({ theme }) => `
    &.logo {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        

        background-color: ${theme.palette.primary.main};

        @media screen and (max-width: 1024px) {
            gap: 60px;
        }
        @media screen and (min-width: 1025px) {
            gap: 90px;
        }

        .MuiTypography-h1 {
            color: ${theme.palette.common.white};
        }
    }

    &.step_box {
        width: 80%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;

        text-align: left;

        line-height: 1.5;

        @media screen and (max-width: 1024px) {
            width: 80%;

            p {
                font-size: 2rem;
                font-weight: 400;
            }
            span {
                font-weight: 700;
            }
        }
        @media screen and (min-width: 1025px) {
            width: 60%;

            p {
                font-size: 3rem;
                font-weight: 400;
            }
            span {
                font-weight: 700;
            }
        }
    }

    &.button_group {
        position: absolute;

        display: flex;
        flex-direction: column;
        gap: 32px;

        
        &.step_1 {
            img:not(:nth-of-type(1)) {
                filter: invert(100%) sepia(8%) saturate(96%) hue-rotate(197deg) brightness(113%) contrast(81%);
            }
            img:nth-of-type(1) {
                filter: invert(9%) sepia(100%) saturate(7498%) hue-rotate(224deg) brightness(91%) contrast(109%);
            }
        }
        &.step_2 {
            img:not(:nth-of-type(2)) {
                filter: invert(100%) sepia(8%) saturate(96%) hue-rotate(197deg) brightness(113%) contrast(81%);
            }
            img:nth-of-type(2) {
                filter: invert(9%) sepia(100%) saturate(7498%) hue-rotate(224deg) brightness(91%) contrast(109%);
            }
        }
        &.step_3 {
            img:not(:nth-of-type(3)) {
                filter: invert(100%) sepia(8%) saturate(96%) hue-rotate(197deg) brightness(113%) contrast(81%);
            }
            img:nth-of-type(3) {
                filter: invert(9%) sepia(100%) saturate(7498%) hue-rotate(224deg) brightness(91%) contrast(109%);
            }
        }
        &.step_4 {
            img:not(:nth-of-type(4)) {
                filter: invert(100%) sepia(8%) saturate(96%) hue-rotate(197deg) brightness(113%) contrast(81%);
            }
            img:nth-of-type(4) {
                filter: invert(9%) sepia(100%) saturate(7498%) hue-rotate(224deg) brightness(91%) contrast(109%);
            }
        }
        
        @media screen and (max-width: 1024px) {
            transform: rotate(270deg);
            bottom: 10%;
        }
        @media screen and (min-width: 1025px) {
            right: 10%;
        }
    }
`,
);

export const Button = styled(MuiButton)(
    ({ theme }) => `
    position: absolute;
    bottom: 30%;
    left: 10%;

    color: ${theme.palette.grey[600]};

    text-transform: none;

    :hover {
        background-color: transparent;
    }

    @media screen and (max-width: 1024px) {
        left: 10%;
    }
    @media screen and (min-width: 1025px) {
        left: 20%;
    }
`,
);

export const IconButton = styled(MuiIconButton)(
    ({ theme }) => `
    &.start {
        position: absolute;
        bottom: 24px;
        right: 24px;

        color: ${theme.palette.common.white};
    }

    &.log_in {
        position: absolute;
        bottom: 24px;
        right: 24px;

        &:hover {
            background-color: transparent;
        }
    }

    &.next {
        position: absolute;
        bottom: 24px;
        right: 24px;
    }

    &.before {
        position: absolute;
        bottom: 24px;
        left: 24px;
    }
`,
);

export const Typography = styled(MuiTypography)(
    ({ theme }) => css`
        &.main {
            animation: ${slideDown} 3s;
        }
    `,
);

const slideDown = keyframes`
    0% {
        transform: translateY(-10%);
    }
    100% {
        transform: translateY(0);
    }
`;
