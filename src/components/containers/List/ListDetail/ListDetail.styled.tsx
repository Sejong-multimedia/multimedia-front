import { css, keyframes, styled } from '@mui/material/styles';
import {
    Box as MuiBox,
    Button as MuiButton,
    IconButton as MuiIconButton,
    Typography as MuiTypography,
} from '@mui/material';

export const ListDetailBox = styled(MuiBox)(
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
        &.list_detail_area {
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

            .list_detail_content {
                @media only screen and (max-width: 1024px) {
                    width: 80%;
                }
                @media only screen and (min-width: 1025px) {
                    width: 60%;
                }


                .content_top_area {
                    width 100%;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    button:first-of-type {
                        position: absolute;
                        @media only screen and (max-width: 1024px) {
                            left: 10%;
                        }
                        @media only screen and (min-width: 1025px) {
                            left: 20%;
                        }
                    }
                    button:last-of-type {
                        position: absolute;
                        @media only screen and (max-width: 1024px) {
                            right: 10%;
                        }
                        @media only screen and (min-width: 1025px) {
                            right: 20%;
                        }
                    }

                    .license_number {
                        padding: 4px 24px;
                        font-size: 2rem;
                        font-weight: 700;

                        border: 3px solid #131313;
                        border-radius: 6px;
                        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
                    }
                }

                .content_description_area {
                    margin-top: 60px;
                    width: 100%;

                    display: flex;
                    algin-items: center;

                    @media only screen and (max-width: 1024px) {
                        flex-direction: column;
                    }
                    @media only screen and (min-width: 1025px) {
                        flex-direction: row;
                    }

                    .image {
                        flex: 1 1 0;

                        margin: auto;
                    }

                    .description {
                        flex: 1 1 0;

                        .description_item {
                            margin: 10px 0;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;

                            .key {
                                font-size: 1.2rem;
                                font-weight: 500;
                            }
                            .value {
                                font-size: 1.2rem;
                                font-weight: 700;
                            }
                        }
                    }
                }

                .content_bottom_area {
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    margin-top: 80px;
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

export const IconButton = styled(MuiIconButton)(
    ({ theme }) => `
`,
);

export const Button = styled(MuiButton)(
    ({ theme }) => `
    margin: 0 auto;
    padding: 10px 0;

    background-color: #FFA62B;
    color: #131313;

    font-size: 2rem;
    font-weight: 500;

    @media only screen and (max-width: 1024px) {
        width: 80%;
    }
    @media only screen and (min-width: 1025px) {
        width: 60%;
    }

`,
);

export const Typography = styled(MuiTypography)(
    ({ theme }) => `
`,
);
