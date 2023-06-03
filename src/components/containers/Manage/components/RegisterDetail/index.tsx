import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { RootState } from '@/reducers';
import { Box, Button, Divider, RegisterDetailBox, TextField, Typography } from './RegisterDetail.styled';
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

    const onChangeCarData = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, elementName: string) => {
        setCarData({ ...carData, [elementName]: event.currentTarget.value });
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
                    <Typography variant="h6">차량 모델</Typography>
                </span>
                <span>
                    <TextField
                        variant="standard"
                        fullWidth
                        autoComplete="off"
                        value={carData.brand}
                        onChange={(event) => onChangeCarData(event, 'brand')}
                    />
                </span>
            </Box>
            <Box className="register_datail_item">
                <span>
                    <Typography variant="h6">차량 연료</Typography>
                </span>
                <span>
                    <TextField
                        variant="standard"
                        fullWidth
                        autoComplete="off"
                        value={carData.fuel}
                        onChange={(event) => onChangeCarData(event, 'fuel')}
                    />
                </span>
            </Box>
            <Box className="register_datail_item">
                <span>
                    <Typography variant="h6">차량 연식</Typography>
                </span>
                <span>
                    <TextField
                        variant="standard"
                        fullWidth
                        autoComplete="off"
                        value={carData.year}
                        onChange={(event) => onChangeCarData(event, 'year')}
                    />
                </span>
            </Box>
            <Box className="register_datail_item">
                <span>
                    <Typography variant="h6">차량 연비</Typography>
                </span>
                <span>
                    <TextField
                        variant="standard"
                        fullWidth
                        autoComplete="off"
                        value={carData.fuelEfficiency}
                        onChange={(event) => onChangeCarData(event, 'fuelEfficiency')}
                    />
                </span>
            </Box>
            <Box className="register_datail_item">
                <span>
                    <Typography variant="h6">차량 엔진</Typography>
                </span>
                <span>
                    <TextField
                        variant="standard"
                        fullWidth
                        autoComplete="off"
                        value={carData.cc}
                        onChange={(event) => onChangeCarData(event, 'cc')}
                    />
                </span>
            </Box>
            <Box className="register_datail_item">
                <span>
                    <Typography variant="h6">차량 기어</Typography>
                </span>
                <span>
                    <TextField
                        variant="standard"
                        fullWidth
                        autoComplete="off"
                        value={carData.fuelEfficiency}
                        onChange={(event) => onChangeCarData(event, 'fuelEfficiency')}
                    />
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
