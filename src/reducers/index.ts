import { combineReducers } from 'redux';
import wallet from './module/wallet';
import register from './module/register';

const rootReducer = combineReducers({ wallet, register });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
