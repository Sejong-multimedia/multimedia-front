import { ComponentType, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { RootState } from '@/reducers';
import { useActions } from '../providers/ActionsProvider';

type LoadableComponent<T, P> = ComponentType<
    T extends {
        default: ComponentType<infer Props>;
    }
        ? Props
        : P
>;

type RouteWrapperProps = {
    layout: React.FunctionComponent<any>;
    component: React.FunctionComponent<any> | LoadableComponent<any, any>;
    checkAuth?: boolean;
    path: string;
};

const RouteWrapper = (props: RouteWrapperProps) => {
    const { component: Component, layout: Layout, checkAuth, path, ...rest } = props;
    const auth = useSelector((state: RootState) => state.wallet);
    const { WalletActions } = useActions();

    return (
        <Route
            {...rest}
            render={(renderProps) => {
                if (path === '/*') return <Redirect to={'/'} />;

                if (checkAuth) {
                    if (auth.account.data) {
                        return (
                            <Layout>
                                <Component {...renderProps} />
                            </Layout>
                        );
                    } else {
                        return <Redirect to={'/enter'} />;
                    }
                }

                return (
                    <Layout>
                        <Component {...renderProps} />
                    </Layout>
                );
            }}
        />
    );
};

export default RouteWrapper;
