import { web3 } from '@/const/klaytn';
import { InsuranceType, RegisterCarSaleType } from '@/const/types/RegisterCarSale';
import TRADE from '../abi/trade';

const contract = new web3.eth.Contract(TRADE.abi, TRADE.address);

export const readUserTradeVehicleData = async () => {};

export const createUserTradeVehicleData = async (
    address: string,
    registerData: RegisterCarSaleType & { insurance: InsuranceType },
) => {
    // const result = await contract.methods.registerCarSale(...Object.values(registerData)).send({
    //     from: address,
    // });
    const result = await contract.methods
        .registerCarSale(0, '', '', '', '', '', 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
        .send({
            from: address,
        });

    console.log('result', result);

    return result;
};

export const deleteUserTradeVehicleData = async () => {};

export const updateUserTradeVehicleData = async () => {};
