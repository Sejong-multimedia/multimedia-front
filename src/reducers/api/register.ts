import { web3 } from '@/const/klaytn';
import { CarDataType } from '@/components/containers/Manage/Manage.types';
import { VehicleDataType } from '@/const/types/VehicleDataType';
import REGISTER from '../abi/register';
import { delay } from '@/utils/delay';

const contract = new web3.eth.Contract(REGISTER.abi, REGISTER.address);

export const readUserVehicleData = async (address: string) => {
    const result: VehicleDataType[] = await contract.methods.getOwnedTokenIds(address).call();
    return result;
};

export const createUserVehicleData = async (address: string, carNumber: string, carData: CarDataType) => {
    console.log('address', address);
    console.log('carNumber', carNumber);
    console.log(
        'carData',
        carData.brand,
        carData.model,
        carData.year,
        carNumber,
        carData.registerNumer,
        carData.fuel,
        carData.cc,
    );
    const result = await contract.methods
        // .getEveryTokenIds()
        // .generateCarNFT('1', '1', '1', '1', '1', '1', '1')
        .generateCarNFT(carData.brand, carData.model, carData.year, carNumber, '215215', carData.fuel, carData.cc)
        .send({
            from: address,
        });
    console.log('result', result);

    return result;
};

export const deleteUserVehicleData = () => {};

export const updateUserVehicleData = () => {};
