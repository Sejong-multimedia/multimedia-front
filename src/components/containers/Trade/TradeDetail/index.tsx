import { useSelector } from 'react-redux';
import { Box, TradeDetailBox, IconButton, Typography, Button } from './TradeDetail.styled';
import { RootState } from '@/reducers';
import { useDialog } from '@/components/providers/DialogProvider';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GetCarNFTType } from '@/const/types/GetCarNFT';
import { GetCarDetailsType } from '@/const/types/GetCarDetails';
import { ArrowBack, KeyboardArrowRight, KeyboardArrowLeft } from '@mui/icons-material';
import { licenseNumberFormatter } from '@/utils/utilFunctions';
import useResponsive from '@/hooks/useResponsive';
import { useActions } from '@/components/providers/ActionsProvider';
import { Loading } from '@/components/commons/Loadings';

enum GeneralType {
    brand = '차량 회사',
    model = '차량 모델',
    cc = '차량 엔진',
    fuel = '차량 연료',
    year = '차량 연식',
    registerNum = '등록 번호',
}

enum DetailType {
    userName = '소유자 이름',
    userAddress = '소유자 주소',
    userContact = '소유자 연락처',
    region = '국가',
    registerDate = '등록 날짜',
    warranty = '보증 기간',
    mileage = '주행 거리',
    price = '가격',
    insuranceRecord = '상세 내역',
}
const TradeDetail = () => {
    const {
        wallet: { account },
        trade: { marketVehicleList, reserveCar },
    } = useSelector((state: RootState) => state);
    const { TradeActions } = useActions();
    const history = useHistory();
    const isMobile = useResponsive('down', 'md');
    const [carData, setCarData] = useState<{
        tokenId: string;
        general: GetCarNFTType | undefined;
        detail: GetCarDetailsType | undefined;
    } | null>(null);
    const [step, setStep] = useState<number>(0);

    const routeToTrade = () => {
        history.push('/trade');
    };

    const onClickNext = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const onClickBefore = () => {
        setStep((prevStep) => prevStep - 1);
    };

    const onClickReserveCar = async () => {
        const address = account.data?.address;
        if (address) {
            await TradeActions.reserveCar(address, carData?.tokenId ?? '');
            history.push('/mypage');
        }
    };

    useEffect(() => {
        const index = history.location.search
            .split('?')
            .find((item) => item.includes('index'))
            ?.split('=')[1];
        if (index === undefined) return;

        const targetVehicleData = marketVehicleList.data?.[Number(index)];
        if (!targetVehicleData) return;
        setCarData(targetVehicleData);
    }, []);

    return (
        <TradeDetailBox>
            {carData && (
                <Box className="trade_detail_area">
                    <Box className="trade_detail_content">
                        <Box className="content_top_area">
                            <IconButton onClick={routeToTrade}>
                                <ArrowBack />
                            </IconButton>
                            <Box className="license_number">
                                {licenseNumberFormatter(carData.general?.licenseNum ?? '')}
                            </Box>
                            <IconButton />
                        </Box>
                        {!isMobile && (
                            <Box className="stepper">
                                <IconButton className="prev" disabled={step === 0} onClick={onClickBefore}>
                                    <KeyboardArrowLeft />
                                </IconButton>
                                <Typography className={`select-${step === 0}`}>0</Typography>
                                <Typography className={`select-${step === 1}`}>1</Typography>
                                <IconButton className="next" disabled={step === 1} onClick={onClickNext}>
                                    <KeyboardArrowRight />
                                </IconButton>
                            </Box>
                        )}
                        <Box className="content_description_area">
                            <Box className="image">
                                <img src={carData.general?.carFront ?? ''} alt="car_img" width={400} height={200} />
                            </Box>
                            {isMobile && (
                                <Box className="stepper">
                                    {step === 1 && (
                                        <IconButton className="prev" onClick={onClickBefore}>
                                            <KeyboardArrowLeft />
                                        </IconButton>
                                    )}
                                    <Typography className={`select-${step === 0}`}>0</Typography>
                                    <Typography className={`select-${step === 1}`}>1</Typography>
                                    {step === 0 && (
                                        <IconButton className="next" onClick={onClickNext}>
                                            <KeyboardArrowRight />
                                        </IconButton>
                                    )}
                                </Box>
                            )}
                            {step === 0 && (
                                <Box className="description">
                                    {Object.entries(carData.general ?? {}).map(([key, value]) => {
                                        if (!Object.keys(GeneralType).includes(key)) return;
                                        return (
                                            <Box key={key} className="description_item">
                                                <Typography className="key">{(GeneralType as any)[key]}</Typography>
                                                <Typography className="value">{value}</Typography>
                                            </Box>
                                        );
                                    })}
                                </Box>
                            )}
                            {step === 1 && (
                                <Box className="description">
                                    {Object.entries(carData.detail ?? {}).map(([key, value]) => {
                                        if (!Object.keys(DetailType).includes(key)) return;
                                        if (key === 'insuranceRecord' || key === 'transferRecord') return;
                                        return (
                                            <Box key={key} className="description_item">
                                                <Typography className="key">{(DetailType as any)[key]}</Typography>
                                                <Typography className="value">{value as any}</Typography>
                                            </Box>
                                        );
                                    })}
                                </Box>
                            )}
                        </Box>
                        <Box className="content_bottom_area">
                            <Button variant="contained" onClick={onClickReserveCar}>
                                구매하기
                                {reserveCar.loading && <Loading />}
                            </Button>
                        </Box>
                    </Box>
                </Box>
            )}
        </TradeDetailBox>
    );
};

export default TradeDetail;
