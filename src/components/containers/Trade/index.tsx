import { useActions } from '@/components/providers/ActionsProvider';
import { Box, TradeBox, Typography } from './Trade.styled';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/reducers';
import { Loading } from '@/components/commons/Loadings';
import { GetCarNFTType } from '@/const/types/GetCarNFT';
import { GetCarDetailsType } from '@/const/types/GetCarDetails';
import { useHistory } from 'react-router-dom';
import { TRADE_STATUS } from '@/const/tradeStatus';

const Trade = () => {
    const {
        trade: { marketVehicleList },
    } = useSelector((state: RootState) => state);
    const { TradeActions } = useActions();
    const history = useHistory();

    const routeToTrade = () => {
        history.push('/trade');
    };

    const routeToTradeDetail = (index: number) => {
        history.push({
            pathname: '/trade/detail',
            search: `?index=${index}`,
        });
    };

    useEffect(() => {
        TradeActions.searchMarketVehicleList();
    }, []);

    return (
        <TradeBox>
            <Box className="trade_area">
                {marketVehicleList.error && <Typography variant="h4">차량 정보를 불러오는데 실패했습니다.</Typography>}
                {marketVehicleList.loading && <Loading />}
                {marketVehicleList.data && marketDataItems(marketVehicleList.data, routeToTrade, routeToTradeDetail)}
            </Box>
        </TradeBox>
    );
};

const marketDataItems = (
    data:
        | {
              tokenId: string;
              general: GetCarNFTType | undefined;
              detail: GetCarDetailsType | undefined;
              state: (typeof TRADE_STATUS)[number] | undefined;
          }[]
        | null,
    routeToTrade: () => void,
    routeToTradeDetail: (index: number) => void,
) => {
    if (!data) return;

    if (data.length === 0)
        return (
            <Box className="item_no_data">
                <Typography variant="h4">시장에 등록된 차량이 없습니다.</Typography>
                <Typography variant="body1" onClick={routeToTrade}>
                    차량 등록하러 가기
                </Typography>
            </Box>
        );
    else {
        return (
            <Box className="item_group">
                <Box className="trade_area_item">
                    <Typography variant="h5">차량 목록</Typography>
                </Box>
                {data.map((item, index) => {
                    const { tokenId, general, state } = item;
                    return (
                        <Box key={tokenId} className="trade_area_item" onClick={() => routeToTradeDetail(index)}>
                            <div>
                                <img src={general?.carSide} alt="차량 이미지" width="100%" height="100%" />
                            </div>
                            <span>
                                <Typography>
                                    {general?.brand} {general?.model}
                                </Typography>
                                <Typography>{state}</Typography>
                            </span>
                        </Box>
                    );
                })}
            </Box>
        );
    }
};

export default Trade;
