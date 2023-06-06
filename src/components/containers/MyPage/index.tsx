import { useActions } from '@/components/providers/ActionsProvider';
import { Box, Button, Divider, MyPageBox, Typography } from './MyPage.styled';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/reducers';
import { readUserPurchaseVehicleData, readUserSaleVehicleData } from '@/reducers/api/trade';
import React from 'react';
import { Loading } from '@/components/commons/Loadings';
import { licenseNumberFormatter } from '@/utils/utilFunctions';
import useResponsive from '@/hooks/useResponsive';
import { confirmBuyCar, confirmSellCar } from '@/reducers/module/trade';
import { useHistory } from 'react-router-dom';

const MyPage = () => {
    const {
        wallet: { account },
        trade: { userCarOnSale, userCarOnPurchase, confirmSellCar, confirmBuyCar },
    } = useSelector((state: RootState) => state);
    const { TradeActions } = useActions();
    const history = useHistory();
    const isMobile = useResponsive('down', 'md') ?? false;
    const [status, setStatus] = useState<'Sale' | 'Purchase'>('Sale');

    const onClickStatus = (status: 'Sale' | 'Purchase') => {
        setStatus(status);
    };

    const onClickConfirmSell = async (tokenId: string) => {
        const address = account.data?.address;
        if (address) {
            await TradeActions.confirmSellCar(address, tokenId);
            history.push('/mypage');
            TradeActions.getUserCarOnSale(address);
        }
    };

    const onClickConfirmBuy = async (tokenId: string) => {
        const address = account.data?.address;
        if (address) {
            await TradeActions.confirmBuyCar(address, tokenId);
            history.push('/mypage');
            TradeActions.getUserCarOnPurchase(address);
        }
    };

    useEffect(() => {
        const address = account.data?.address;
        if (address) {
            TradeActions.getUserCarOnSale(address);
            TradeActions.getUserCarOnPurchase(address);
        }
    }, []);

    return (
        <MyPageBox>
            <Box className="my_page_area">
                <Box className="contents_header">
                    <Typography className={`status_${status === 'Purchase'}`} onClick={() => onClickStatus('Purchase')}>
                        구매 중 차량
                    </Typography>
                    <Divider variant="middle" flexItem orientation="vertical" />
                    <Typography className={`status_${status === 'Sale'}`} onClick={() => onClickStatus('Sale')}>
                        판매 중 차량
                    </Typography>
                </Box>
                {status === 'Sale' && UserCarOnSale(userCarOnSale, confirmSellCar, isMobile, onClickConfirmSell)}
                {status === 'Purchase' &&
                    UserCarOnPurchase(userCarOnPurchase, confirmBuyCar, isMobile, onClickConfirmBuy)}
            </Box>
        </MyPageBox>
    );
};

const UserCarOnSale = (
    sale: {
        loading: boolean;
        error: boolean;
        data: Awaited<ReturnType<typeof readUserSaleVehicleData>> | null;
    },
    confirmSell: {
        loading: boolean;
        error: boolean;
        data: Awaited<ReturnType<typeof confirmSellCar>> | null;
    },
    isMobile: boolean,
    onClick: (tokenId: string) => void,
) => {
    const { loading, error, data } = sale;
    return (
        <Box className="contents_body">
            {loading && <Loading />}
            {data && data.length === 0 && (
                <Box className="item_empty">
                    <Typography variant="h5">등록 중인 차량이 없습니다.</Typography>
                </Box>
            )}
            {data &&
                data.length > 0 &&
                data.map((item) => {
                    return (
                        <Box key={item.tokenId} className="item">
                            <img src={item.general?.URI_Register} alt="차량 이미지" width="100%" height="100%" />
                            <Box className="item_trade">
                                <span>
                                    <Typography variant="h5">
                                        {licenseNumberFormatter(item.general?.licenseNum ?? '')}
                                    </Typography>
                                    {!isMobile && (
                                        <Typography variant="h4">
                                            {item.general?.brand} {item.general?.model}
                                        </Typography>
                                    )}
                                    <Typography className="state">{item.state}</Typography>
                                </span>
                                <Button
                                    disabled={item.state !== '거래 예약'}
                                    variant="contained"
                                    onClick={() => onClick(item.tokenId ?? '')}
                                >
                                    {confirmSell.loading && <Loading />}
                                    거래 진행
                                </Button>
                            </Box>
                        </Box>
                    );
                })}
        </Box>
    );
};

const UserCarOnPurchase = (
    purchase: {
        loading: boolean;
        error: boolean;
        data: Awaited<ReturnType<typeof readUserPurchaseVehicleData>> | null;
    },
    confirmBuy: {
        loading: boolean;
        error: boolean;
        data: Awaited<ReturnType<typeof confirmBuyCar>> | null;
    },
    isMobile: boolean,
    onClick: (tokenId: string) => void,
) => {
    const { loading, data } = purchase;
    return (
        <Box className="contents_body">
            {loading && <Loading />}
            {data && data.length === 0 && (
                <Box className="item_empty">
                    <Typography variant="h5">등록 중인 차량이 없습니다.</Typography>
                </Box>
            )}
            {data &&
                data.length > 0 &&
                data.map((item) => {
                    return (
                        <Box key={item.tokenId} className="item">
                            <img src={item.general?.carFront} alt="차량 이미지" width="100%" height="100%" />
                            <Box className="item_trade">
                                <span>
                                    <Typography variant="h5">
                                        {licenseNumberFormatter(item.general?.licenseNum ?? '')}
                                    </Typography>
                                    {!isMobile && (
                                        <Typography variant="h4">
                                            {item.general?.brand} {item.general?.model}
                                        </Typography>
                                    )}
                                    <Typography className="state">{item.state}</Typography>
                                </span>
                                <Button
                                    variant="contained"
                                    disabled={item.state !== '거래 진행중'}
                                    onClick={() => onClick(item.tokenId ?? '')}
                                >
                                    {confirmBuy.loading && <Loading />}
                                    거래 진행
                                </Button>
                            </Box>
                        </Box>
                    );
                })}
        </Box>
    );
};

export default MyPage;
