import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Fade, Icon } from '@mui/material';
import { NavigateNext, NavigateBefore } from '@mui/icons-material';
import { Box, Button, IconButton, Typography } from './Main.styled';
import logoSvg from '@/assets/icon/icon_logo.svg';

const Main = () => {
    const history = useHistory();
    const [step, setStep] = useState(0);

    const onClickNext = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const onClickBefore = () => {
        setStep((prevStep) => prevStep - 1);
    };

    const routeToLogin = () => {
        history.push('/enter');
    };

    return (
        <Box>
            {step === 0 && (
                <React.Fragment>
                    <Button onClick={routeToLogin}>Move to enter page</Button>
                    {/* <Fade in={true} timeout={1000}>
                        <img src={logoSvg} alt="logo" width={136} height={62} />
                    </Fade>
                    <div>
                        <Fade in={true} timeout={3000}>
                            <Typography className="main" variant="h1">
                                Block Moters
                            </Typography>
                        </Fade>
                    </div>
                    <Typography variant="h3">Your own car trading platform</Typography> */}
                </React.Fragment>
            )}
            {step === 1 && (
                <Fade in={true} timeout={3000}>
                    <Typography className="main" variant="h3">
                        You can register your car
                        <br />
                        and manage information about it.
                    </Typography>
                </Fade>
            )}
            {step === 2 && (
                <Fade in={true} timeout={3000}>
                    <Typography className="main" variant="h3">
                        You can check the information
                        <br />
                        of a vehicle registered by someone else,
                    </Typography>
                </Fade>
            )}
            {step === 3 && (
                <Fade in={true} timeout={3000}>
                    <Typography className="main" variant="h3">
                        Furthermore, you can trade in vehicles.
                    </Typography>
                </Fade>
            )}
            {step !== 0 && (
                <IconButton className="before" onClick={onClickBefore}>
                    <NavigateBefore fontSize="large" />
                </IconButton>
            )}
            {step < 3 && (
                <IconButton className="next" onClick={onClickNext}>
                    <NavigateNext fontSize="large" />
                </IconButton>
            )}
            {step === 3 && (
                <IconButton className="log_in" onClick={routeToLogin}>
                    Block Moters
                </IconButton>
            )}
        </Box>
    );
};

export default Main;
