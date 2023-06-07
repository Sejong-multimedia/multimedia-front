import { css, keyframes, styled } from '@mui/material/styles';
import {
    Box as MuiBox,
    Button as MuiButton,
    Divider as MuiDivider,
    IconButton as MuiIconButton,
    TextField as MuiTextField,
    Typography as MuiTypography,
} from '@mui/material';

export const MyPageBox = styled(MuiBox)(
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
        &.my_page_area {
            padding: 24px;

            position: relative;
            top: 100%;

            display: flex;
            flex-direction: column;
            align-items: center;

            width: 100%;

            background: ${theme.palette.common.white};

            border-top-right-radius: 24px;
            border-top-left-radius: 24px;

            animation: ${slideUp} 0.5s ease-in-out forwards;

            margin-top: 10vh;
            height: 90vh;

            .item_no_data {
                width: 60%;

                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 24px;

                p:last-of-type {
                    text-decoration: underline;

                    cursor: pointer;
                }
            }
        }

        .contents_header {
            display: flex;
            align-items: center;
            justify-content: center;

            gap: 12px;

            .refresh {
                cursor: pointer;
                color: ${theme.palette.primary.main};
            }
            .loading {
                color: ${theme.palette.primary.main};
            }
        }

        .contents_body {
            position: relative;
            margin: 48px;

            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;

            overflow-y: scroll;

            .item_empty {
                width: 100%;
                height: 100%;

                display: flex;
                align-items: center;
                justify-content: center;
            }

            .item {
                display: flex;

                @media only screen and (max-width: 1024px) {
                    flex-direction: column;
                    width: 100%;

                    span {
                        display: flex;
                        align-items: center;

                        gap: 12px;
                    }
                }
                @media only screen and (min-width: 1025px) {
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    gap: 24px;

                    width: 100%;

                    img {
                        width: 40%;
                    }
                }

                .item_trade {
                    margin: 24px 0;
                    @media only screen and (max-width: 1024px) {
                        width: 100%;

                        margin-top: 12px;

                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                    @media only screen and (min-width: 1025px) {
                        width: 20%;

                        display: flex;
                        flex-direction: column;
                        gap: 24px;
                    }
                }
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

export const Divider = styled(MuiDivider)(
    ({ theme }) => `
`,
);

export const IconButton = styled(MuiIconButton)(
    ({ theme }) => `
`,
);

export const TextField = styled(MuiTextField)(
    ({ theme }) => `
`,
);

export const Typography = styled(MuiTypography)(
    ({ theme }) => `
        &.status_true {
            font-size: 1.5rem;
            font-weight: 700;
            cursor: pointer;
        }
        &.status_false {
            font-size: 1.2rem;
            font-weight: 400;
            color: ${theme.palette.grey[500]};
            cursor: pointer;
        }
        &.state {
            font-size: 1rem;
            font-weight: 500;
            color: ${theme.palette.primary.main};
        }
`,
);
