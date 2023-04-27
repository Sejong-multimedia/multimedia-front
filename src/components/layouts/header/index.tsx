import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { RootState } from '@/reducers';
import { useActions } from '@/components/providers/ActionsProvider';
import { Loading } from '@/components/commons/Loadings';
import { Box, Button, Typography } from './header.styled';
import metamask from '@/assets/icon/icon_metamask.svg';

import { shortenAddress } from '@/utils/utilFunctions';

const Header = () => {
    const { account } = useSelector((state: RootState) => state.wallet);
    const { WalletActions } = useActions();
    const history = useHistory();

    const onClickWalletConnect = () => {
        WalletActions.connectMetamask();
    };

    return (
        <Box>
            <Button variant="text" onClick={onClickWalletConnect}>
                {account.loading && <Loading />}
                {!account.data && <Typography variant="h6">Wallet Connect</Typography>}
                {account.data && (
                    <React.Fragment>
                        <img src={metamask} alt="metamask" width="24" height="24" />
                        <Typography variant="h6">{shortenAddress(account.data.address)}</Typography>
                    </React.Fragment>
                )}
            </Button>
        </Box>
    );
};

export default Header;
