import Loadable from '@react-loadable/revised';
import { ContainerLoading } from '@/components/commons/Loadings';
import { LayoutType1, LayoutType2 } from '@/components/layouts';

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
        layout: LayoutType2,
        checkAuth: false,
    },
    {
        name: 'Todo',
        path: '/todo',
        exact: true,
        component: LoadableTodo,
        layout: LayoutType1,
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
        layout: LayoutType1,
        checkAuth: false,
    },
];
