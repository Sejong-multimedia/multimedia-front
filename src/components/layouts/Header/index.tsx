import React from 'react';
import { SyntheticEvent, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from '@/reducers';
import { commonRoutes } from '@/routes';
import LogoSvg from '@/assets/icon/icon_logo.svg';
import { KeyboardDoubleArrowDown, KeyboardDoubleArrowUp } from '@mui/icons-material';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    HeaderBox,
    IconButton,
    Stack,
    Typography,
} from './Header.styled';

import { useActions } from '@/components/providers/ActionsProvider';
import { Loading } from '@/components/commons/Loadings';
import { shortenAddress } from '@/utils/utilFunctions';
import useResponsive from '@/hooks/useResponsive';

const Header = () => {
    const { account } = useSelector((state: RootState) => state.wallet);
    const { WalletActions } = useActions();
    const history = useHistory();
    const isMobile = useResponsive('down', 'md');
    const headList = commonRoutes
        .map((item) => ({ name: item.name, path: item.path }))
        .filter((item) => {
            if (item.path === '/') return false;
            if (item.path.split('/').length > 2) return false;
            if (history.location.pathname === '/enter') {
                if (item.path === '/enter') return true;
                return false;
            }
            return true;
        });

    const [isAccordionOpen, setAccordionOpen] = useState(false);

    const routeToMain = () => {
        history.push('/');
    };

    const routeToParams = (path: string) => {
        history.push(path);
    };

    const onClickConnetMetamask = () => {
        WalletActions.connectMetamask();
    };

    const onChangeAccordionOpen = (_: SyntheticEvent<Element, Event>, expanded: boolean) => {
        setAccordionOpen(expanded);
    };

    return (
        <HeaderBox>
            <Stack className="navigate_list">
                <IconButton disableRipple onClick={routeToMain}>
                    <img src={LogoSvg} alt="logo" width={48} height={22} />
                </IconButton>
                {isMobile && (
                    <Accordion onChange={onChangeAccordionOpen}>
                        <AccordionSummary>
                            {isAccordionOpen ? <KeyboardDoubleArrowUp /> : <KeyboardDoubleArrowDown />}
                        </AccordionSummary>
                        <AccordionDetails>
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
                            <Button variant="outlined" onClick={onClickConnetMetamask}>
                                {account.loading && <Loading />}
                                {!account.data && <Typography variant="h6">Connect Wallet</Typography>}
                                {account.data && (
                                    <Typography variant="h6">{shortenAddress(account.data.address)}</Typography>
                                )}
                            </Button>
                        </AccordionDetails>
                    </Accordion>
                )}
                {!isMobile && (
                    <React.Fragment>
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
                        <Button variant="outlined" onClick={onClickConnetMetamask}>
                            {account.loading && <Loading />}
                            {!account.data && <Typography variant="h6">Connect Wallet</Typography>}
                            {account.data && (
                                <Typography variant="h6">{shortenAddress(account.data.address)}</Typography>
                            )}
                        </Button>
                    </React.Fragment>
                )}
            </Stack>
        </HeaderBox>
    );
};

export default Header;
