import { createContext, useContext, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

import * as walletActions from '@/reducers/module/wallet';
import * as registerActions from '@/reducers/module/register';

type ActionsProviderProps = {
    children: React.ReactNode;
};

const ActionsContext = createContext<{
    WalletActions: typeof walletActions;
    RegisterActions: typeof registerActions;
}>({ WalletActions: walletActions, RegisterActions: registerActions });

export const useActions = () => useContext(ActionsContext);

const ActionsContextProvider = (props: ActionsProviderProps) => {
    const { children } = props;
    const dispatch = useDispatch();

    const WalletActions = bindActionCreators(walletActions, dispatch);
    const RegisterActions = bindActionCreators(registerActions, dispatch);

    useEffect(() => {
        WalletActions.connectMetamask();
    }, []);

    return <ActionsContext.Provider value={{ WalletActions, RegisterActions }}>{children}</ActionsContext.Provider>;
};

export default ActionsContextProvider;
