import Loadable from '@react-loadable/revised';
import { ContainerLoading } from '@/components/commons/Loadings';
import Layout from '@/components/layouts';

const LoadableMain = Loadable({
    loader: () => import('@/components/containers/Main'),
    loading: ContainerLoading,
});

const LoadableTodo = Loadable({
    loader: () => import('@/components/containers/Todo'),
    loading: ContainerLoading,
});

export const homeDomainName = 'Donation';

export const commonRoutes = [
    {
        name: 'Main',
        path: '/',
        exact: true,
        component: LoadableMain,
        layout: Layout,
        checkAuth: false,
    },
    {
        name: 'Todo',
        path: '/todo',
        exact: true,
        component: LoadableTodo,
        layout: Layout,
        checkAuth: false,
    },
];

export const routes = [
    ...commonRoutes,
    {
        name: 'Base URL',
        path: '/*',
        exact: true,
        component: LoadableMain,
        layout: Layout,
        checkAuth: false,
    },
];
