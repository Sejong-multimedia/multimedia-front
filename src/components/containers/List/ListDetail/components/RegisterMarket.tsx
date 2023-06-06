import { ChangeEvent, useState } from 'react';
import { Box, Button, IconButton, RegisterMarketBox, TextField, Typography } from './RegisterMarket.styled';
import { VehicleDataType } from '@/const/types/VehicleDataType';
import { Close, ArrowBack, ArrowForward } from '@mui/icons-material';
import { InsuranceType, RegisterCarSaleType } from '@/const/types/RegisterCarSale';
import { useActions } from '@/components/providers/ActionsProvider';
import { useSelector } from 'react-redux';
import { RootState } from '@/reducers';
import { Loading } from '@/components/commons/Loadings';
import { useHistory } from 'react-router-dom';

const carDataTextFields: {
    label: string;
    key: keyof RegisterCarSaleType;
    example: string;
    type?: string;
}[] = [
    {
        label: '성함',
        key: 'userName',
        example: 'e.g. 홍길동',
    },
    {
        label: '주소',
        key: 'userAddress',
        example: 'e.g. 서울특별시 강남구',
    },
    {
        label: '연락처',
        key: 'userContact',
        example: 'e.g. 010-1234-5678',
    },
    {
        label: '국가',
        key: 'region',
        example: 'e.g. 대한민국',
    },
    {
        label: '보증',
        key: 'warranty',
        example: 'e.g. 2023-05-05',
    },
    {
        label: '가격 (만원)',
        key: 'price',
        example: 'e.g. 4000',
        type: 'number',
    },
    {
        label: '주행거리 (km)',
        key: 'mileage',
        example: 'e.g. 16000',
        type: 'number',
    },
];

const insuranceDataTextFields: {
    label: string;
    key: keyof InsuranceType;
    type?: string;
}[] = [
    {
        label: '전손 횟수',
        key: 'totalLoss',
        type: 'number',
    },
    {
        label: '도난 횟수',
        key: 'theft',
        type: 'number',
    },
    {
        label: '침수 횟수',
        key: 'flood',
        type: 'number',
    },
    {
        label: '용도 변경 이력',
        key: 'repurpose',
        type: 'number',
    },
    {
        label: '소유자 변경 이력',
        key: 'changeOwner',
        type: 'number',
    },
    {
        label: '차량번호 변경 이력',
        key: 'changeNumber',
        type: 'number',
    },
    {
        label: '내 차 피해 횟수',
        key: 'myDamage',
        type: 'number',
    },
    {
        label: '상대 차 피해 횟수',
        key: 'oppoDamage',
        type: 'number',
    },
    {
        label: '내 차 총 피해액',
        key: 'myAmmount',
        type: 'number',
    },
    {
        label: '상대 차 총 피해액',
        key: 'oppoAmmount',
        type: 'number',
    },
];

type History = ReturnType<typeof useHistory>;
type RegisterMarketProps = {
    history: History;
    vehicleData: VehicleDataType;
    onClose: () => void;
};
export const RegisterMarket = (props: RegisterMarketProps) => {
    const { history, vehicleData, onClose } = props;
    const { TradeActions } = useActions();
    const {
        wallet: { account },
        trade: { registerTrade },
    } = useSelector((state: RootState) => state);
    const [step, setStep] = useState<number>(0);
    const [carData, setCarData] = useState<RegisterCarSaleType>({
        tokenId: vehicleData.TokenId,
        userName: '',
        userAddress: '',
        userContact: '',
        region: '',
        price: 0,
        warranty: '',
        mileage: 0,
    });
    const [insuranceData, setInsuranceData] = useState<InsuranceType>({
        totalLoss: 0,
        theft: 0,
        flood: 0,
        repurpose: 0,
        changeOwner: 0,
        changeNumber: 0,
        myDamage: 0,
        oppoDamage: 0,
        myAmmount: 0,
        oppoAmmount: 0,
    });

    const onClickNext = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const onClickBefore = () => {
        setStep((prevStep) => prevStep - 1);
    };

    const onClickRegister = async () => {
        const address = account.data?.address;
        if (address) {
            await TradeActions.addUserVehicleToMarket(address, {
                ...carData,
                insurance: insuranceData,
            });
            history.push('/trade');
            onClose();
        }
    };

    const onChangeCarData = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, key: string) => {
        setCarData((prevCarData: any) => ({
            ...prevCarData,
            [key]: event.target.value,
        }));
    };

    const onChangeInsuranceData = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, key: string) => {
        setInsuranceData((prevInsuranceData: any) => ({
            ...prevInsuranceData,
            [key]: event.target.value,
        }));
    };

    return (
        <RegisterMarketBox>
            {registerTrade.loading && <Loading />}
            <Box className="dialog_header">
                <Typography variant="h6">추가 정보 입력</Typography>
                <IconButton onClick={onClose}>
                    <Close />
                </IconButton>
            </Box>
            <Box className="dialog_content">
                {step === 0 &&
                    carDataTextFields.map((item) => (
                        <TextField
                            key={item.key}
                            type={item.type ?? 'text'}
                            variant="standard"
                            label={item.label}
                            placeholder={item.example}
                            autoComplete="off"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={carData[item.key] ?? ''}
                            onChange={(event) => onChangeCarData(event, item.key)}
                        />
                    ))}
                {step === 1 &&
                    insuranceDataTextFields.map((item) => (
                        <TextField
                            key={item.key}
                            type={item.type ?? 'text'}
                            variant="standard"
                            label={item.label}
                            autoComplete="off"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={insuranceData[item.key] ?? 0}
                            onChange={(event) => onChangeInsuranceData(event, item.key)}
                        />
                    ))}
            </Box>
            <Box className="button_group">
                <Box className="stepper">
                    <Typography className={`select-${step === 0}`}>0</Typography>
                    <Typography className={`select-${step === 1}`}>1</Typography>
                </Box>
                {step === 1 && (
                    <IconButton className="prev" onClick={onClickBefore}>
                        <ArrowBack />
                    </IconButton>
                )}
                {step === 0 && (
                    <IconButton className="next" onClick={onClickNext}>
                        <ArrowForward />
                    </IconButton>
                )}
                {step === 1 && (
                    <Button className="next" onClick={onClickRegister}>
                        <Typography variant="body1">등록</Typography>
                    </Button>
                )}
            </Box>
        </RegisterMarketBox>
    );
};
