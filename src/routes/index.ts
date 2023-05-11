import Loadable from '@react-loadable/revised';
import { ContainerLoading } from '@/components/commons/Loadings';
import { LayoutType1, LayoutType2, LayoutType3 } from '@/components/layouts';

const LoadableMain = Loadable({
    loader: () => import('@/components/containers/Main'),
    loading: ContainerLoading,
});

const LoadableEnter = Loadable({
    loader: () => import('@/components/containers/Enter'),
    loading: ContainerLoading,
});

const LoadableManage = Loadable({
    loader: () => import('@/components/containers/Manage'),
    loading: ContainerLoading,
});

const LoadableTrade = Loadable({
    loader: () => import('@/components/containers/Trade'),
    loading: ContainerLoading,
});

export const homeDomainName = 'Donation';

export const commonRoutes = [
    {
        name: '메인',
        path: '/',
        exact: true,
        component: LoadableMain,
        layout: LayoutType1,
        checkAuth: false,
    },
    {
        name: '로그인',
        path: '/enter',
        exact: true,
        component: LoadableEnter,
        layout: LayoutType3,
        checkAuth: false,
    },
    {
        name: '차량관리',
        path: '/manage',
        exact: true,
        component: LoadableManage,
        layout: LayoutType3,
        checkAuth: true,
    },
    {
        name: '차량관리',
        path: '/trade',
        exact: true,
        component: LoadableTrade,
        layout: LayoutType3,
        checkAuth: true,
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
