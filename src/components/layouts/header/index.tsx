import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from '@/reducers';
import { commonRoutes } from '@/routes';
import LogoSvg from '@/assets/icon/icon_logo.svg';
import { Box, Button, HeaderBox, IconButton, Stack, Typography } from './Header.styled';

import { useActions } from '@/components/providers/ActionsProvider';
import { Loading } from '@/components/commons/Loadings';
import { shortenAddress } from '@/utils/utilFunctions';

const Header = () => {
    const { account } = useSelector((state: RootState) => state.wallet);
    const { WalletActions } = useActions();
    const history = useHistory();
    const headList = commonRoutes
        .map((item) => ({ name: item.name, path: item.path }))
        .filter((item) => item.path !== '/');

    const routeToParams = (path: string) => {
        history.push(path);
    };

    const routeToManage = () => {
        history.push('/manage');
    };

    const onClickConnetMetamask = () => {
        WalletActions.connectMetamask();
    };

    return (
        <HeaderBox>
            <Stack className="navigate_list">
                <IconButton>
                    <img src={LogoSvg} alt="logo" width={48} height={22} />
                </IconButton>
                {headList.map((item, index) => {
                    return (
                        <Stack
                            key={item.name + index}
                            className="navigate_item"
                            onClick={() => routeToParams(item.path)}
                        >
                            <Typography variant="h6">{item.name}</Typography>
                        </Stack>
                    );
                })}
            </Stack>
            <Button variant="outlined" onClick={onClickConnetMetamask}>
                {account.loading && <Loading />}
                {!account.data && <Typography variant="h6">Connect Wallet</Typography>}
                {account.data && <Typography variant="h6">{shortenAddress(account.data.address)}</Typography>}
            </Button>
        </HeaderBox>
    );
};

export default Header;
