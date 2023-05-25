import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { RootState } from '@/reducers';
import { Box, ListBox, Typography } from './List.styled';
import { useActions } from '@/components/providers/ActionsProvider';
import { Loading } from '@/components/commons/Loadings';
import { VehicleDataType } from '@/const/types/VehicleDataType';

const List = () => {
    const { RegisterActions } = useActions();
    const {
        wallet: { account },
        register: { vehicleData },
    } = useSelector((state: RootState) => state);
    const history = useHistory();

    const routeToManage = () => {
        history.push('/manage');
    };

    useEffect(() => {
        const address = account.data?.address ?? '';
        RegisterActions.getUserVehicleData(address);
    }, []);

    return (
        <ListBox>
            <Box className="list_area">
                {vehicleData.error && <Typography variant="h4">차량 정보를 불러오는데 실패했습니다.</Typography>}
                {vehicleData.loading && <Loading />}
                {vehicleData.data && VehicleDataItems(vehicleData.data as any, routeToManage)}
            </Box>
        </ListBox>
    );
};

type DataTupleType = [string, string, string, string, string, string, string, string];
const VehicleDataItems = (data: (DataTupleType & VehicleDataType)[], onClick: () => void) => {
    if (!data) return;
    const dataHandled = data.map((item) => {
        const { TokenId, URI, brand, cc, fuel, licenseNum, model, registerNum, year } = item;
        return { TokenId, URI, brand, cc, fuel, licenseNum, model, registerNum, year };
    });
    if (dataHandled.length === 0)
        return (
            <Box className="item_no_data">
                <Typography variant="h4">보유한 차량이 없습니다.</Typography>
                <Typography variant="body1" onClick={onClick}>
                    차량 등록하러 가기
                </Typography>
            </Box>
        );
    else
        return (
            <React.Fragment>
                <Box className="list_area_item">
                    <Typography variant="h5">내 차 목록</Typography>
                </Box>
                {dataHandled.map((item) => (
                    <Box key={item.TokenId} className="list_area_item">
                        <div>
                            <img src={item.URI} alt="car_image" width="100%" height="100%" />
                        </div>
                        <Box>
                            {Object.entries(item).map(([key, value]) => {
                                if (key === 'TokenId' || key === 'URI') return;
                                return (
                                    <Box key={key}>
                                        <Typography variant="h6">{key}</Typography>
                                        <Typography variant="h5">{value}</Typography>
                                    </Box>
                                );
                            })}
                        </Box>
                    </Box>
                ))}
            </React.Fragment>
        );
};

export default List;
