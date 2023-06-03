import { Dispatch, createAction, createReducer } from '@reduxjs/toolkit';
import { RootState } from '@/reducers';
import { createUserTradeVehicleData } from '../api/trade';
import { InsuranceType, RegisterCarSaleType } from '@/const/types/RegisterCarSale';

type TraderActionType = ReturnType<
    typeof addUserVehicleToMarketPending | typeof addUserVehicleToMarketSuccess | typeof addUserVehicleToMarketFailure
>;

const addUserVehicleToMarketPending = createAction('trade/ADD_USER_VEHICLE_TO_MARKET_PENDING');
const addUserVehicleToMarketSuccess = createAction<any>('trade/ADD_USER_VEHICLE_TO_MARKET_SUCCESS');
const addUserVehicleToMarketFailure = createAction('trade/ADD_USER_VEHICLE_TO_MARKET_FAILURE');

type InitialStateType = {
    registerTrade: {
        loading: boolean;
        error: boolean;
        data: any | null;
    };
};

const initialState: InitialStateType = {
    registerTrade: {
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
