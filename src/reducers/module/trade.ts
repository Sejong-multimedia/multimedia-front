import { Dispatch, createAction, createReducer } from '@reduxjs/toolkit';
import { RootState } from '@/reducers';
import {
    createUserTradeVehicleData,
    readMarketVehicleData,
    readUserPurchaseVehicleData,
    readUserSaleVehicleData,
    userConfirmBuyCar,
    userConfirmSellCar,
    userReservedCar,
} from '../api/trade';
import { InsuranceType, RegisterCarSaleType } from '@/const/types/RegisterCarSale';

type TraderActionType = ReturnType<
    | typeof addUserVehicleToMarketPending
    | typeof addUserVehicleToMarketSuccess
    | typeof addUserVehicleToMarketFailure
    | typeof searchMarketVehicleListPending
    | typeof searchMarketVehicleListSuccess
    | typeof searchMarketVehicleListFailure
    | typeof getUserCarOnSalePending
    | typeof getUserCarOnSaleSuccess
    | typeof getUserCarOnSaleFailure
    | typeof getUserCarOnPurchasePending
    | typeof getUserCarOnPurchaseSuccess
    | typeof getUserCarOnPurchaseFailure
    | typeof reserveCarPending
    | typeof reserveCarSuccess
    | typeof reserveCarFailure
    | typeof confirmSellCarPending
    | typeof confirmSellCarSuccess
    | typeof confirmSellCarFailure
    | typeof confirmBuyCarPending
    | typeof confirmBuyCarSuccess
    | typeof confirmBuyCarFailure
>;

const addUserVehicleToMarketPending = createAction('trade/ADD_USER_VEHICLE_TO_MARKET_PENDING');
const addUserVehicleToMarketSuccess = createAction<any>('trade/ADD_USER_VEHICLE_TO_MARKET_SUCCESS');
const addUserVehicleToMarketFailure = createAction('trade/ADD_USER_VEHICLE_TO_MARKET_FAILURE');

const searchMarketVehicleListPending = createAction('trade/SEARCH_MARKET_VEHICLE_LIST_PENDING');
const searchMarketVehicleListSuccess = createAction<Awaited<ReturnType<typeof readMarketVehicleData>>>(
    'trade/SEARCH_MARKET_VEHICLE_LIST_SUCCESS',
);
const searchMarketVehicleListFailure = createAction('trade/SEARCH_MARKET_VEHICLE_LIST_FAILURE');

const getUserCarOnSalePending = createAction('trade/GET_USER_CAR_ON_SALE_PENDING');
const getUserCarOnSaleSuccess = createAction<Awaited<ReturnType<typeof readUserSaleVehicleData>>>(
    'trade/GET_USER_CAR_ON_SALE_SUCCESS',
);
const getUserCarOnSaleFailure = createAction('trade/GET_USER_CAR_ON_SALE_FAILURE');

const getUserCarOnPurchasePending = createAction('trade/GET_USER_CAR_ON_PURCHASE_PENDING');
const getUserCarOnPurchaseSuccess = createAction<Awaited<ReturnType<typeof readUserPurchaseVehicleData>>>(
    'trade/GET_USER_CAR_ON_PURCHASE_SUCCESS',
);
const getUserCarOnPurchaseFailure = createAction('trade/GET_USER_CAR_ON_PURCHASE_FAILURE');

const reserveCarPending = createAction('trade/RESERVE_CAR_PENDING');
const reserveCarSuccess = createAction<any>('trade/RESERVE_CAR_SUCCESS');
const reserveCarFailure = createAction('trade/RESERVE_CAR_FAILURE');

const confirmSellCarPending = createAction('trade/CONFIRM_SELL_CAR_PENDING');
const confirmSellCarSuccess = createAction<any>('trade/CONFIRM_SELL_CAR_SUCCESS');
const confirmSellCarFailure = createAction('trade/CONFIRM_SELL_CAR_FAILURE');

const confirmBuyCarPending = createAction('trade/CONFIRM_BUY_CAR_PENDING');
const confirmBuyCarSuccess = createAction<any>('trade/CONFIRM_BUY_CAR_SUCCESS');
const confirmBuyCarFailure = createAction('trade/CONFIRM_BUY_CAR_FAILURE');

type InitialStateType = {
    registerTrade: {
        loading: boolean;
        error: boolean;
        data: any | null;
    };
    marketVehicleList: {
        loading: boolean;
        error: boolean;
        data: Awaited<ReturnType<typeof readMarketVehicleData>> | null;
    };
    userCarOnSale: {
        loading: boolean;
        error: boolean;
        data: Awaited<ReturnType<typeof readUserSaleVehicleData>> | null;
    };
    userCarOnPurchase: {
        loading: boolean;
        error: boolean;
        data: Awaited<ReturnType<typeof readUserPurchaseVehicleData>> | null;
    };
    reserveCar: {
        loading: boolean;
        error: boolean;
        data: Awaited<ReturnType<typeof reserveCar>> | null;
    };
    confirmSellCar: {
        loading: boolean;
        error: boolean;
        data: Awaited<ReturnType<typeof confirmSellCar>> | null;
    };
    confirmBuyCar: {
        loading: boolean;
        error: boolean;
        data: Awaited<ReturnType<typeof confirmBuyCar>> | null;
    };
};

const initialState: InitialStateType = {
    registerTrade: {
        loading: false,
        error: false,
        data: null,
    },
    marketVehicleList: {
        loading: false,
        error: false,
        data: null,
    },
    userCarOnSale: {
        loading: false,
        error: false,
        data: null,
    },
    userCarOnPurchase: {
        loading: false,
        error: false,
        data: null,
    },
    reserveCar: {
        loading: false,
        error: false,
        data: null,
    },
    confirmSellCar: {
        loading: false,
        error: false,
        data: null,
    },
    confirmBuyCar: {
        loading: false,
        error: false,
        data: null,
    },
};

const trade = createReducer(initialState, (builder) => {
    builder.addCase(addUserVehicleToMarketPending, (state) => ({
        ...state,
        registerTrade: {
            loading: true,
            error: false,
            data: null,
        },
    }));
    builder.addCase(addUserVehicleToMarketSuccess, (state, action) => ({
        ...state,
        registerTrade: {
            loading: false,
            error: false,
            data: action.payload,
        },
    }));
    builder.addCase(addUserVehicleToMarketFailure, (state) => ({
        ...state,
        registerTrade: {
            loading: false,
            error: true,
            data: null,
        },
    }));
    builder.addCase(searchMarketVehicleListPending, (state) => ({
        ...state,
        marketVehicleList: {
            loading: true,
            error: false,
            data: null,
        },
    }));
    builder.addCase(searchMarketVehicleListSuccess, (state, action) => ({
        ...state,
        marketVehicleList: {
            loading: false,
            error: false,
            data: action.payload,
        },
    }));
    builder.addCase(searchMarketVehicleListFailure, (state) => ({
        ...state,
        marketVehicleList: {
            loading: false,
            error: true,
            data: null,
        },
    }));
    builder.addCase(getUserCarOnSalePending, (state) => ({
        ...state,
        userCarOnSale: {
            loading: true,
            error: false,
            data: null,
        },
    }));
    builder.addCase(getUserCarOnSaleSuccess, (state, action) => ({
        ...state,
        userCarOnSale: {
            loading: false,
            error: false,
            data: action.payload,
        },
    }));
    builder.addCase(getUserCarOnSaleFailure, (state) => ({
        ...state,
        userCarOnSale: {
            loading: false,
            error: true,
            data: null,
        },
    }));
    builder.addCase(getUserCarOnPurchasePending, (state) => ({
        ...state,
        userCarOnPurchase: {
            loading: true,
            error: false,
            data: null,
        },
    }));
    builder.addCase(getUserCarOnPurchaseSuccess, (state, action) => ({
        ...state,
        userCarOnPurchase: {
            loading: false,
            error: false,
            data: action.payload,
        },
    }));
    builder.addCase(getUserCarOnPurchaseFailure, (state) => ({
        ...state,
        userCarOnPurchase: {
            loading: false,
            error: true,
            data: null,
        },
    }));
    builder.addCase(reserveCarPending, (state) => ({
        ...state,
        reserveCar: {
            loading: true,
            error: false,
            data: null,
        },
    }));
    builder.addCase(reserveCarSuccess, (state, action) => ({
        ...state,
        reserveCar: {
            loading: false,
            error: false,
            data: action.payload,
        },
    }));
    builder.addCase(reserveCarFailure, (state) => ({
        ...state,
        reserveCar: {
            loading: false,
            error: true,
            data: null,
        },
    }));
    builder.addCase(confirmSellCarPending, (state) => ({
        ...state,
        confirmSellCar: {
            loading: true,
            error: false,
            data: null,
        },
    }));
    builder.addCase(confirmSellCarSuccess, (state, action) => ({
        ...state,
        confirmSellCar: {
            loading: false,
            error: false,
            data: action.payload,
        },
    }));
    builder.addCase(confirmSellCarFailure, (state) => ({
        ...state,
        confirmSellCar: {
            loading: false,
            error: true,
            data: null,
        },
    }));
    builder.addCase(confirmBuyCarPending, (state) => ({
        ...state,
        confirmBuyCar: {
            loading: true,
            error: false,
            data: null,
        },
    }));
    builder.addCase(confirmBuyCarSuccess, (state, action) => ({
        ...state,
        confirmBuyCar: {
            loading: false,
            error: false,
            data: action.payload,
        },
    }));
    builder.addCase(confirmBuyCarFailure, (state) => ({
        ...state,
        confirmBuyCar: {
            loading: false,
            error: true,
            data: null,
        },
    }));
});

export default trade;

export const addUserVehicleToMarket =
    (address: string, registerData: RegisterCarSaleType & { insurance: InsuranceType }) =>
    (dispatch: Dispatch<TraderActionType>, getState: () => RootState) => {
        dispatch(addUserVehicleToMarketPending());

        return new Promise(async (resolve, reject) => {
            await createUserTradeVehicleData(address, registerData)
                .then((res) => {
                    dispatch(addUserVehicleToMarketSuccess(res));
                    resolve(res);
                })
                .catch((error) => {
                    dispatch(addUserVehicleToMarketFailure());
                    reject(error);
                });
        });
    };

export const searchMarketVehicleList = () => (dispatch: Dispatch<TraderActionType>, getState: () => RootState) => {
    dispatch(searchMarketVehicleListPending());

    return new Promise(async (resolve, reject) => {
        await readMarketVehicleData()
            .then((res) => {
                dispatch(searchMarketVehicleListSuccess(res));
                resolve(res);
            })
            .catch((error) => {
                dispatch(searchMarketVehicleListFailure());
                reject(error);
            });
    });
};

export const getUserCarOnSale =
    (address: string) => (dispatch: Dispatch<TraderActionType>, getState: () => RootState) => {
        dispatch(getUserCarOnSalePending());

        return new Promise(async (resolve, reject) => {
            await readUserSaleVehicleData(address)
                .then((res) => {
                    dispatch(getUserCarOnSaleSuccess(res));
                    resolve(res);
                })
                .catch((error) => {
                    dispatch(getUserCarOnSaleFailure());
                    reject(error);
                });
        });
    };

export const getUserCarOnPurchase =
    (address: string) => (dispatch: Dispatch<TraderActionType>, getState: () => RootState) => {
        dispatch(getUserCarOnPurchasePending());

        return new Promise(async (resolve, reject) => {
            await readUserPurchaseVehicleData(address)
                .then((res) => {
                    dispatch(getUserCarOnPurchaseSuccess(res));
                    resolve(res);
                })
                .catch((error) => {
                    dispatch(getUserCarOnPurchaseFailure());
                    reject(error);
                });
        });
    };

export const reserveCar =
    (address: string, tokenId: string) => (dispatch: Dispatch<TraderActionType>, getState: () => RootState) => {
        dispatch(reserveCarPending());

        return new Promise(async (resolve, reject) => {
            await userReservedCar(address, tokenId)
                .then((res) => {
                    dispatch(reserveCarSuccess(res));
                    resolve(res);
                })
                .catch((error) => {
                    dispatch(reserveCarFailure());
                    reject(error);
                });
        });
    };

export const confirmSellCar =
    (address: string, tokenId: string) => (dispatch: Dispatch<TraderActionType>, getState: () => RootState) => {
        dispatch(confirmSellCarPending());

        return new Promise(async (resolve, reject) => {
            await userConfirmSellCar(address, tokenId)
                .then((res) => {
                    dispatch(confirmSellCarSuccess(res));
                    resolve(res);
                })
                .catch((error) => {
                    dispatch(confirmSellCarFailure());
                    reject(error);
                });
        });
    };

export const confirmBuyCar =
    (address: string, tokenId: string) => (dispatch: Dispatch<TraderActionType>, getState: () => RootState) => {
        dispatch(confirmBuyCarPending());

        return new Promise(async (resolve, reject) => {
            await userConfirmBuyCar(address, tokenId)
                .then((res) => {
                    dispatch(confirmBuyCarSuccess(res));
                    resolve(res);
                })
                .catch((error) => {
                    dispatch(confirmBuyCarFailure());
                    reject(error);
                });
        });
    };
