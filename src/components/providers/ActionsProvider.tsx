import { createContext, useContext, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

import * as walletActions from '@/reducers/module/wallet';
import * as registerActions from '@/reducers/module/register';
import * as tradeActions from '@/reducers/module/trade';
import { commonRoutes } from '@/routes';

type ActionsProviderProps = {
    children: React.ReactNode;
};

const ActionsContext = createContext<{
    WalletActions: typeof walletActions;
    RegisterActions: typeof registerActions;
    TradeActions: typeof tradeActions;
}>({ WalletActions: walletActions, RegisterActions: registerActions, TradeActions: tradeActions });

export const useActions = () => useContext(ActionsContext);

const ActionsContextProvider = (props: ActionsProviderProps) => {
    const { children } = props;
    const dispatch = useDispatch();
    const currentLocation = window.location.pathname;

    const WalletActions = bindActionCreators(walletActions, dispatch);
    const RegisterActions = bindActionCreators(registerActions, dispatch);
    const TradeActions = bindActionCreators(tradeActions, dispatch);

    useEffect(() => {
        commonRoutes.forEach((item) => {
            if (item.checkAuth && item.path === currentLocation) {
                WalletActions.connectMetamask();
            }
        });
    }, []);

    return (
        <ActionsContext.Provider value={{ WalletActions, RegisterActions, TradeActions }}>
            {children}
        </ActionsContext.Provider>
    );
};

export default ActionsContextProvider;
