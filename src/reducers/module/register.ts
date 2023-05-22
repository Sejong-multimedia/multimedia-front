import { Dispatch, createAction, createReducer } from '@reduxjs/toolkit';
import { RootState } from '@/reducers';
import { createUserVehicleData, readUserVehicleData } from '../api/register';
import { CarDataType } from '@/components/containers/Manage/Manage.types';
import { VehicleDataType } from '@/const/types/VehicleDataType';

type RegisterActionType = ReturnType<
    | typeof getUserVehicleDataPending
    | typeof getUserVehicleDataSuccess
    | typeof getUserVehicleDataFailure
    | typeof setUserVehicleDataPending
    | typeof setUserVehicleDataSuccess
    | typeof setUserVehicleDataFailure
>;

const getUserVehicleDataPending = createAction('user/GET_USER_VEHICLE_DATA_PENDING');
const getUserVehicleDataSuccess = createAction<VehicleDataType[]>('user/GET_USER_VEHICLE_DATA_SUCCESS');
const getUserVehicleDataFailure = createAction('user/GET_USER_VEHICLE_DATA_FAILURE');

const setUserVehicleDataPending = createAction('user/SET_USER_VEHICLE_DATA_PENDING');
const setUserVehicleDataSuccess = createAction<any>('user/SET_USER_VEHICLE_DATA_SUCCESS');
const setUserVehicleDataFailure = createAction('user/SET_USER_VEHICLE_DATA_FAILURE');

type InitialStateType = {
    vehicleData: {
        loading: boolean;
        error: boolean;
        data: VehicleDataType[] | null;
    };
    setVehicle: {
        loading: boolean;
        error: boolean;
        data: any | null;
    };
};

const initialState: InitialStateType = {
    vehicleData: {
        loading: false,
        error: false,
        data: null,
    },
    setVehicle: {
        loading: false,
        error: false,
        data: null,
    },
};

const register = createReducer(initialState, (builder) => {
    builder.addCase(getUserVehicleDataPending, (state) => ({
        ...state,
        vehicleData: {
            loading: true,
            error: false,
            data: null,
        },
    }));
    builder.addCase(getUserVehicleDataFailure, (state) => ({
        ...state,
        vehicleData: {
            loading: false,
            error: true,
            data: null,
        },
    }));
    builder.addCase(getUserVehicleDataSuccess, (state, action) => ({
        ...state,
        vehicleData: {
            loading: false,
            error: false,
            data: action.payload,
        },
    }));
    builder.addCase(setUserVehicleDataPending, (state) => ({
        ...state,
        setVehicle: {
            loading: true,
            error: false,
            data: null,
        },
    }));
    builder.addCase(setUserVehicleDataSuccess, (state, action) => ({
        ...state,
        setVehicle: {
            loading: false,
            error: false,
            data: action.payload,
        },
    }));
    builder.addCase(setUserVehicleDataFailure, (state) => ({
        ...state,
        setVehicle: {
            loading: false,
            error: true,
            data: null,
        },
    }));
});

export default register;

export const getUserVehicleData =
    (address: string) => (dispatch: Dispatch<RegisterActionType>, getState: () => RootState) => {
        dispatch(getUserVehicleDataPending());

        return new Promise(async (resolve, reject) => {
            await readUserVehicleData(address)
                .then((res) => {
                    dispatch(getUserVehicleDataSuccess(res));
                    resolve(res);
                })
                .catch((error) => {
                    dispatch(getUserVehicleDataFailure());
                    reject(error);
                });
        });
    };

export const setUserVehicleData =
    (address: string, carNumber: string, carData: CarDataType) =>
    (dispatch: Dispatch<RegisterActionType>, getState: () => RootState) => {
        dispatch(setUserVehicleDataPending());

        return new Promise(async (resolve, reject) => {
            await createUserVehicleData(address, carNumber, carData)
                .then((res) => {
                    dispatch(setUserVehicleDataSuccess(res));
                    resolve(res);
                })
                .catch((error) => {
                    dispatch(setUserVehicleDataFailure());
                    reject(error);
                });
        });
    };
