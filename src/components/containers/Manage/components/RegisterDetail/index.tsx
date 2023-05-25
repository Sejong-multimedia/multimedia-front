import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { RootState } from '@/reducers';
import { Box, Button, Divider, RegisterDetailBox, Typography } from './RegisterDetail.styled';
import { useActions } from '@/components/providers/ActionsProvider';
import { Loading } from '@/components/commons/Loadings';
import { CarTypeSelector } from './components/CarTypeSelector';
import { CarDataType } from '../../Manage.types';
import { delay } from '@/utils/delay';

type RegisterDetailProps = {
    carNumber: string;
    carData: CarDataType;
    setCarData: React.Dispatch<React.SetStateAction<CarDataType>>;
};
const RegisterDetail = (props: RegisterDetailProps) => {
    const history = useHistory();
    const { carNumber, carData, setCarData } = props;
    const { RegisterActions } = useActions();
    const {
        register: { setVehicle },
        wallet: { account },
    } = useSelector((state: RootState) => state);

    const onClickRegister = async () => {
        const address = account.data?.address ?? '';
        await RegisterActions.setUserVehicleData(address, carNumber, carData);
        history.push('/list');
    };

    return (
        <RegisterDetailBox>
            <Box className="register_datail_item">
                <span>
                    <Typography variant="h6">차량 번호</Typography>
                </span>
                <span>
                    <Typography className="car_number">{carNumber}</Typography>
                </span>
            </Box>
            <Box className="register_datail_item">
                <div>
                    <Typography variant="h6">차량 종류</Typography>
                </div>
                <div className="car_type">
                    <CarTypeSelector carData={carData} setCarData={setCarData} />
                </div>
            </Box>
            <Divider flexItem />
            <Box className="register_datail_item">
                <span>
                    <Typography variant="h6">모델</Typography>
                </span>
                <span>
                    {/* <TextField variant="standard" fullWidth autoComplete="off" /> */}
                    <Typography variant="h6">{carData.brand}</Typography>
                </span>
            </Box>
            <Box className="register_datail_item">
                <span>
                    <Typography variant="h6">연료</Typography>
                </span>
                <span>
                    <Typography variant="h6">{carData.fuel}</Typography>
                </span>
            </Box>
            <Box className="register_datail_item">
                <span>
                    <Typography variant="h6">연식</Typography>
                </span>
                <span>
                    <Typography variant="h6">{carData.year}</Typography>
                </span>
            </Box>
            <Box className="register_datail_item">
                <span>
                    <Typography variant="h6">연비</Typography>
                </span>
                <span>
                    <Typography variant="h6">{carData.fuelEfficiency}</Typography>
                </span>
            </Box>
            <Box className="register_datail_item">
                <span>
                    <Typography variant="h6">엔진</Typography>
                </span>
                <span>
                    <Typography variant="h6">{carData.cc}</Typography>
                </span>
            </Box>
            <Box className="register_datail_item">
                <span>
                    <Typography variant="h6">기어</Typography>
                </span>
                <span>
                    <Typography variant="h6">{carData.transmission}</Typography>
                </span>
            </Box>
            <Button onClick={onClickRegister}>
                {setVehicle.loading && <Loading />}
                <Typography variant="h5">위 정보로 내 차량 등록하기</Typography>
            </Button>
        </RegisterDetailBox>
    );
};

export default RegisterDetail;
