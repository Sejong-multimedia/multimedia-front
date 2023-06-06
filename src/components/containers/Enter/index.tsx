import { useEffect, useMemo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { RootState } from '@/reducers';
import { useActions } from '@/components/providers/ActionsProvider';
import { Loading } from '@/components/commons/Loadings';
import { Box, Button, EnterBox, Stack, Typography } from './Enter.styled';

import MetamaskSvg from '@/assets/icon/icon_metamask.svg';
import LoginCarPng from '@/assets/img/login_car.png';

const Enter = () => {
    const { account } = useSelector((state: RootState) => state.wallet);
    const { WalletActions } = useActions();
    const history = useHistory();
    const imgRef = useRef<HTMLImageElement>(null);
    const [isHover, setHover] = useState(false);

    const moveToHowToUseMetamask = () => {
        window.open('https://support.metamask.io/hc/en-us/articles/360015489531-Getting-started-with-MetaMask');
    };

    const onClickConnetMetamask = async () => {
        await WalletActions.connectMetamask();
        history.push('/list');
    };

    useEffect(() => {
        if (!imgRef.current) return;
        imgRef.current.className = isHover ? 'show' : 'hide';
    }, [isHover]);

    useEffect(() => {
        WalletActions.disconnectMetamask();
    }, []);

    const IconMetamask = useMemo(() => {
        return (
            <img
                id="icon_metamask"
                className="hide"
                ref={imgRef}
                src={MetamaskSvg}
                alt="metamask"
                width={74}
                height={68}
            />
        );
    }, []);

    return (
        <EnterBox>
            <Box className="enter_area">
                <div className="img_group">
                    {IconMetamask}
                    <img id="logo_car" src={LoginCarPng} alt="login_car" width={526} height={174} />
                </div>
                <Stack>
                    <Button
                        disabled={account.loading}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        onClick={onClickConnetMetamask}
                    >
                        {account.loading && <Loading />}
                        <Typography variant="h5">메타마스크 연결하기</Typography>
                    </Button>
                    <div>
                        <Typography variant="body2" onClick={moveToHowToUseMetamask}>
                            지갑이 없으신가요?
                        </Typography>
                        <Typography variant="body2" onClick={moveToHowToUseMetamask}>
                            How to Use Metamask?
                        </Typography>
                    </div>
                </Stack>
            </Box>
        </EnterBox>
    );
};

export default Enter;
