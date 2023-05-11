import { BrowserRouter, Switch } from 'react-router-dom';
import RouteWrapper from '@/components/RouteWrapper';
import { routes } from '@/routes';
import { Box } from '@mui/material';

const RouterApp = () => {
    return (
        <Switch>
            {routes.map((item, i) => {
                return <RouteWrapper key={i} {...item} />;
            })}
        </Switch>
    );
};

const AppWrapper = () => {
    return (
        <BrowserRouter>
            <RouterApp />
        </BrowserRouter>
    );
};

export default AppWrapper;
