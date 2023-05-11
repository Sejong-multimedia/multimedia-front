import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/reducers';
import { useActions } from '@/components/providers/ActionsProvider';
import { Loading } from '@/components/commons/Loadings';
import { Box, Button, EnterBox, Stack, Typography } from './Enter.styled';

const Enter = () => {
    const { account } = useSelector((state: RootState) => state.wallet);
    const { WalletActions } = useActions();

    const moveToHowToUseMetamask = () => {
        window.open('https://support.metamask.io/hc/en-us/articles/360015489531-Getting-started-with-MetaMask');
    };

    const onClickConnetWallet = () => {
        WalletActions.connectMetamask();
    };

    useEffect(() => {}, []);

    return (
        <EnterBox>
            <Box className="enter_area">
                <Stack>
                    <Typography variant="h5">어플을 사용하기 위해서 먼저 로그인을 해야해요.</Typography>
                    <Typography variant="h5">로그인을 위해 지갑 연결을 해주세요.</Typography>
                    <Typography variant="body2" onClick={moveToHowToUseMetamask}>
                        지갑 연결이 무엇인가요?
                    </Typography>
                </Stack>
                <Button variant="outlined" onClick={onClickConnetWallet}>
                    {account.loading && <Loading />}
                    {!account.data && <Typography variant="h5">지갑 연결하기</Typography>}
                </Button>
            </Box>
        </EnterBox>
    );
};

export default Enter;
