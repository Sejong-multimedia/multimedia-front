import { useState } from 'react';
import { Box, TextField, ManageBox, Typography, IconButton } from './Manage.styled';
import { ArrowForwardIos, ArrowBackIos } from '@mui/icons-material';
import Register from './components/Register';
import RegisterDetail from './components/RegisterDetail';
import { CarDataType } from './Manage.types';

const Manage = () => {
    const [step, setStep] = useState(0);
    const [valid, setValid] = useState(true);
    const [carNumber, setCarNumber] = useState('12가3456');
    const [carData, setCarData] = useState<CarDataType>({
        model: null,
        brand: null,
        year: null,
        fuel: null,
        fuelEfficiency: null,
        cc: null,
        transmission: null,
        registerNumer: null,
    });

    const onClickNext = () => {
        setStep((prevStep) => prevStep + 1);
    };
    const onClickPrev = () => {
        setStep((prevStep) => prevStep - 1);
    };

    return (
        <ManageBox>
            <Box className="manage_area">
                {step === 0 && (
                    <Register valid={valid} setValid={setValid} carNumber={carNumber} setCarNumber={setCarNumber} />
                )}
                {step === 1 && <RegisterDetail carNumber={carNumber} carData={carData} setCarData={setCarData} />}
                {step > 0 && (
                    <IconButton className="prev" onClick={onClickPrev}>
                        <ArrowBackIos />
                    </IconButton>
                )}
                {valid && step < 1 && (
                    <IconButton className="next" onClick={onClickNext}>
                        <ArrowForwardIos />
                    </IconButton>
                )}
            </Box>
        </ManageBox>
    );
};

export default Manage;
