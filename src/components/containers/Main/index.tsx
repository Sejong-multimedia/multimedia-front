import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Fade, Icon } from '@mui/material';
import { NavigateNext, NavigateBefore } from '@mui/icons-material';
import { Box, Button, IconButton, MainBox, Typography } from './Main.styled';

import mainLogoSvg from '@/assets/icon/icon_main_lgoo.svg';
import stepperSvg from '@/assets/icon/icon_stepper.svg';

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
        <MainBox>
            {step === 0 && (
                <Box className="logo">
                    <img src={mainLogoSvg} alt="logo" width={200} height={200} />
                    <Typography variant="h1">Block Moters</Typography>
                </Box>
            )}
            {step === 1 && (
                <Box className="step_box">
                    <Fade in={true} timeout={3000}>
                        <Typography className="main">
                            <span>블록체인</span>으로 관리되어
                            <br />
                            믿을 수 있는 <span>중고차 거래 마켓</span>
                        </Typography>
                    </Fade>
                </Box>
            )}
            {step === 2 && (
                <Box className="step_box">
                    <Fade in={true} timeout={3000}>
                        <Typography className="main">
                            <span>차량번호판을 입력</span>하여
                            <br />
                            블록체인 상에 내 차량 정보를
                            <br />
                            등록하고 관리하세요.
                        </Typography>
                    </Fade>
                </Box>
            )}
            {step === 3 && (
                <Box className="step_box">
                    <Fade in={true} timeout={3000}>
                        <Typography className="main">
                            마켓에 등록된 <span>모든 중고 차량</span>의
                            <br />
                            정보도 <span>투명하게 조회</span>할 수 있습니다.
                        </Typography>
                    </Fade>
                </Box>
            )}
            {step === 4 && (
                <Box className="step_box">
                    <Fade in={true} timeout={3000}>
                        <Typography className="main">
                            <span>투명하게 기록된 모든 이력</span>과
                            <br />
                            정보를 따져본 뒤, 원하는 중고 차량을
                            <br />
                            <span>중개수수료 없이</span> 거래하세요.
                        </Typography>
                    </Fade>
                </Box>
            )}
            {step !== 0 && (
                <IconButton className="before" onClick={onClickBefore}>
                    <NavigateBefore fontSize="large" />
                </IconButton>
            )}
            {step === 0 && (
                <IconButton className="start" onClick={onClickNext}>
                    <NavigateNext fontSize="large" />
                </IconButton>
            )}
            {step > 0 && step < 4 && (
                <IconButton className="next" onClick={onClickNext}>
                    <NavigateNext fontSize="large" />
                </IconButton>
            )}
            {step !== 0 && (
                <Button disableRipple onClick={routeToLogin}>
                    <Typography variant="body1">Click to Skip</Typography>
                </Button>
            )}
            {step !== 0 && (
                <Box className={`button_group step_${step}`}>
                    <img src={stepperSvg} alt="stepper" width={32} height={8} />
                    <img src={stepperSvg} alt="stepper" width={32} height={8} />
                    <img src={stepperSvg} alt="stepper" width={32} height={8} />
                    <img src={stepperSvg} alt="stepper" width={32} height={8} />
                </Box>
            )}
        </MainBox>
    );
};

export default Main;
