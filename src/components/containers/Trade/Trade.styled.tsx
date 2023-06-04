import { css, keyframes, styled } from '@mui/material/styles';
import { Box as MuiBox, Button as MuiButton, Typography as MuiTypography } from '@mui/material';

export const TradeBox = styled(MuiBox)(
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
        &.trade_area {
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

            .item_group {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 24px;

                overflow-y: scroll;

                padding: 24px 0;

                .trade_area_item:first-of-type {
                    width: 60%;

                    @media only screen and (max-width: 1024px) {
                        align-items: flex-start;
                    }
                }

                .trade_area_item:not(:first-of-type) {
                    position: relative;

                    width: 60%;
                    padding: 24px;

                    gap: 24px;

                    background-color: ${theme.palette.grey[50]};
                    border-radius: 24px;

                    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

                    cursor: pointer;

                    transition: all 0.3s ease-in-out;

                    :hover {
                        transform: translateY(-5px);
                    }

                    .car_description {
                        width: 100%;
                    }

                    div:first-of-type {
                        flex: 1 1 0;
                    }
                    div:last-of-type {
                        flex: 2 1 0;

                        div {
                            display: flex;
                            align-items: center;

                            * {
                                margin: 6px 0;
                            }

                            h6 {
                                color: ${theme.palette.grey[600]};
                            }

                            h5 {
                                width: 100%;
                                text-align: right;
                            }
                        }
                    }

                    @media only screen and (max-width: 1024px) {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    @media only screen and (min-width: 1025px) {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
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

export const Typography = styled(MuiTypography)(({ theme }) => css``);
