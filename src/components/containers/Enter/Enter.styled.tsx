import { css, keyframes, styled } from '@mui/material/styles';
import { Box as MuiBox, Button as MuiButton, Stack as MuiStack, Typography as MuiTypography } from '@mui/material';

export const EnterBox = styled(MuiBox)(
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
        &.enter_area {
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

            .img_group {
                position: relative;
                width: 526px;
                height: 174px;

                #icon_metamask {
                    position: absolute;
                    top: 20px;
                    left: 150px;

                    transform: rotate(12deg);
                }
                #icon_metamask.show {
                    animation: ${slideRight} 0.5s ease-in-out forwards;
                }
                #icon_metamask.hide {
                    animation: ${slideLeft} 0.5s ease-in-out forwards;
                }
                #logo_car {
                    position: absolute;

                    z-index: 1;
                }
            }

            @media only screen and (max-width: 640px) {
                margin-top: 40vh;
                height: 60vh;
            }
            @media only screen and (min-width: 641px) {
                margin-top: 10vh;
                height: 90vh;
            }
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
// background-color: ${theme.palette.primary.main};
// color: ${theme.palette.common.white};

// width: 482px;
// height: 76px;

// font-family: 'Hauora';

// :hover {
//     background-color: ${theme.palette.primary.main};
//     color: ${theme.palette.common.white};
//     opacity: 0.8;
// }

const slideRight = keyframes`
    0% {
        left: 150px;
    }
    100% {
        left: 320px;
    }
`;
const slideLeft = keyframes`
    0% {
        left: 320px;
    }
    100% {
        left: 150px;
    }
`;

export const Stack = styled(MuiStack)(
    ({ theme }) => `
    margin: 48px 12px;
    gap: 30px;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    p {
        margin-bottom: 10px;
        text-align: center;
        color: ${theme.palette.primary.main};

        text-decoration: underline;
        cursor: pointer;
    }
`,
);

export const Typography = styled(MuiTypography)(
    ({ theme }) => `
    &.MuiTypography-h5 {
        font-weight: 600;
    }
`,
);
