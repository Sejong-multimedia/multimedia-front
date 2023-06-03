import { combineReducers } from 'redux';
import trade from './module/trade';
import wallet from './module/wallet';
import register from './module/register';

const rootReducer = combineReducers({ wallet, register, trade });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
