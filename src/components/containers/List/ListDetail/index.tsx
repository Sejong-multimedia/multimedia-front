import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import { ArrowBack, Delete } from '@mui/icons-material';
import { RootState } from '@/reducers';
import { useDialog } from '@/components/providers/DialogProvider';
import { VehicleDataType } from '@/const/types/VehicleDataType';
import { licenseNumberFormatter } from '@/utils/utilFunctions';
import { Box, Button, IconButton, ListDetailBox, Typography } from './ListDetail.styled';
import { RegisterMarket } from './components/RegisterMarket';

enum DetailType {
    brand = '차량 회사',
    model = '차량 모델',
    cc = '차량 엔진',
    fuel = '차량 연료',
    year = '차량 연식',
    registerNum = '등록 번호',
}

const ListDetail = () => {
    const { vehicleData } = useSelector((state: RootState) => state.register);
    const history = useHistory();
    const [openDialog, closeDialog] = useDialog();
    const [carData, setCarData] = useState<VehicleDataType | null>(null);

    const routeToList = () => {
        history.push('/list');
    };

    const handleRegisterMarket = () => {
        if (carData)
            openDialog({
                children: <RegisterMarket history={history} onClose={closeDialog} vehicleData={carData} />,
            });
    };

    useEffect(() => {
        const index = history.location.search
            .split('?')
            .find((item) => item.includes('index'))
            ?.split('=')[1];
        if (index === undefined) return;

        const targetVehicleData = vehicleData.data?.[Number(index)];
        if (!targetVehicleData) return;
        const { TokenId, URI, brand, cc, fuel, licenseNum, model, registerNum, year } = targetVehicleData;
        setCarData({ TokenId, URI, brand, cc, fuel, licenseNum, model, registerNum, year });
    }, []);

    return (
        <ListDetailBox>
            {carData && (
                <Box className="list_detail_area">
                    <Box className="list_detail_content">
                        <Box className="content_top_area">
                            <IconButton onClick={routeToList}>
                                <ArrowBack />
                            </IconButton>
                            <Box className="license_number">{licenseNumberFormatter(carData.licenseNum)}</Box>
                            <IconButton>
                                <Delete />
                            </IconButton>
                        </Box>
                        <Box className="content_description_area">
                            <Box className="image">
                                <img src={carData.URI} alt="car_img" width={400} height={200} />
                            </Box>
                            <Box className="description">
                                {Object.entries(carData).map(([key, value]) => {
                                    if (!Object.keys(DetailType).includes(key)) return;
                                    return (
                                        <Box key={key} className="description_item">
                                            <Typography className="key">{(DetailType as any)[key]}</Typography>
                                            <Typography className="value">{value}</Typography>
                                        </Box>
                                    );
                                })}
                            </Box>
                        </Box>
                        <Box className="content_bottom_area">
                            <Button variant="contained" onClick={handleRegisterMarket}>
                                시장 등록
                            </Button>
                        </Box>
                    </Box>
                </Box>
            )}
        </ListDetailBox>
    );
};

export default ListDetail;
