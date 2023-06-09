import Web3 from 'web3';
import { CarDataType } from '@/components/containers/Manage/Manage.types';
import { VehicleDataType } from '@/const/types/VehicleDataType';
import REGISTER from '../abi/register';
import { delay } from '@/utils/delay';

const web3 = new Web3('https://klaytn-baobab-rpc.allthatnode.com:8551/Z4uSyu9UgJKl3jSP1F2J5KZeeroaSK1T');

const contract = new web3.eth.Contract(REGISTER.abi, REGISTER.address);

export const readUserVehicleData = async (address: string) => {
    const result: VehicleDataType[] = await contract.methods.getOwnedTokenIds(address).call();
    return result;
};

export const createUserVehicleData = async (address: string, carNumber: string, carData: CarDataType) => {
    const result = await contract.methods
        .generateCarNFT(carData.brand, carData.model, carData.year, carNumber, '215215', carData.fuel, carData.cc)
        .send({
            from: address,
        });
    return result;
};
