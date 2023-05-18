import { web3 } from '@/const/klaytn';
import REGISTER from '../abi/register';
import { CarDataType } from '@/components/containers/Manage/Manage.types';
import { delay } from '@/utils/delay';

const contract = new web3.eth.Contract(REGISTER.abi, REGISTER.address);

export const readUserVehicleData = async (address: string) => {
    const result = await contract.methods.getOwnedTokenIds(address).call();
    console.log('result', result);
    return result;
};

export const createUserVehicleData = async (address: string, carNumber: string, carData: CarDataType) => {
    console.log('address', address);
    console.log('carNumber', carNumber);
    console.log('carData', carData);
    const result = await contract.methods
        .generateCarNFT(
            address,
            carData.brand,
            carData.model,
            carData.year,
            carNumber,
            carData.registerNumer,
            carData.fuel,
            carData.cc,
        )
        .send({
            from: address,
            gas: '200000',
        });
    console.log('result', result);

    return result;
};

export const deleteUserVehicleData = () => {};

export const updateUserVehicleData = () => {};
