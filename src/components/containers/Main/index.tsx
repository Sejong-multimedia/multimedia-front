import React, { useState } from 'react';

import { Fade } from '@mui/material';
import { NavigateNext, NavigateBefore } from '@mui/icons-material';
import { Box, IconButton, Typography } from './Main.styled';

const Main = () => {
    const [step, setStep] = useState(0);

    const onClickNext = () => {
        setStep((prevStep) => prevStep++);
    };

    const onClickBefore = () => {
        setStep((prevStep) => prevStep--);
    };

    return (
        <Box>
            {step === 0 && (
                <React.Fragment>
                    <Typography variant="h3">Your own car trading platform</Typography>
                    <div>
                        <Fade in={true} timeout={3000}>
                            <Typography className="main" variant="h1">
                                Chain Moters
                            </Typography>
                        </Fade>
                    </div>
                </React.Fragment>
            )}
            {step !== 0 && (
                <IconButton className="before" onClick={onClickBefore}>
                    <NavigateBefore fontSize="large" />
                </IconButton>
            )}
            {step < 4 && (
                <IconButton className="next" onClick={onClickNext}>
                    <NavigateNext fontSize="large" />
                </IconButton>
            )}
        </Box>
    );
};

export default Main;
