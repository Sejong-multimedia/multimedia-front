import Loadable from '@react-loadable/revised';
import { ContainerLoading } from '@/components/commons/Loadings';
import { LayoutType1, LayoutType2 } from '@/components/layouts';

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

const LoadableTradeDetail = Loadable({
    loader: () => import('@/components/containers/Trade/TradeDetail'),
    loading: ContainerLoading,
});

const LoadableList = Loadable({
    loader: () => import('@/components/containers/List'),
    loading: ContainerLoading,
});

const LoadableListDetail = Loadable({
    loader: () => import('@/components/containers/List/ListDetail'),
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
        layout: LayoutType2,
        checkAuth: false,
    },
    {
        name: '차량등록',
        path: '/manage',
        exact: true,
        component: LoadableManage,
        layout: LayoutType2,
        checkAuth: true,
    },
    {
        name: '차량목록',
        path: '/list',
        exact: true,
        component: LoadableList,
        layout: LayoutType2,
        checkAuth: true,
    },
    {
        name: '차량목록',
        path: '/list/detail',
        exact: true,
        component: LoadableListDetail,
        layout: LayoutType2,
        checkAuth: true,
    },
    {
        name: '차량거래',
        path: '/trade',
        exact: true,
        component: LoadableTrade,
        layout: LayoutType2,
        checkAuth: true,
    },
    {
        name: '차량거래',
        path: '/trade/detail',
        exact: true,
        component: LoadableTradeDetail,
        layout: LayoutType2,
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
