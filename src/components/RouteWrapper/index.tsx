import { ComponentType } from 'react';
import { Route, Redirect } from 'react-router-dom';

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
    checkAuthToken?: boolean;
    path: string;
};

const RouteWrapper = (props: RouteWrapperProps) => {
    const { component: Component, layout, checkAuthToken, path, ...rest } = props;
    // const auth = useSelector((state: RootState) => state.auth);

    return (
        <Route
            {...rest}
            render={(renderProps) => {
                if (path === '/*') return <Redirect to={'/'} />;

                // if(checkAuthToken) {
                // if (auth.token) {
                //     return (
                //         <Layout>
                //             <Component {...renderProps} />
                //         </Layout>
                //     );
                // } else {
                //     return <Redirect to={'/'} />;
                // }
                // }

                return <Component {...renderProps} />;
            }}
        />
    );
};

export default RouteWrapper;
