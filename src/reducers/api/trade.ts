import { web3 } from '@/const/klaytn';
import { InsuranceType, RegisterCarSaleType } from '@/const/types/RegisterCarSale';
import TRADE from '../abi/trade';
import REGISTER from '../abi/register';
import { GetCarNFTType } from '@/const/types/GetCarNFT';
import { GetCarDetailsType } from '@/const/types/GetCarDetails';

const contract = new web3.eth.Contract(TRADE.abi, TRADE.address);

export const readUserTradeVehicleData = async () => {
    const marketCarList: string[] = await contract.methods.getCarsOnSale().call();

    const carGeneralPromises: GetCarNFTType[] = [];
    const carDetailPromises: GetCarDetailsType[] = [];
    marketCarList.forEach((item) => {
        carGeneralPromises.push(contract.methods.getCarNFT(item).call());
        carDetailPromises.push(contract.methods.getCarDetails(item).call());
    });

    const carGeneral = await Promise.all(carGeneralPromises);
    const carDetail = await Promise.all(carDetailPromises);

    const result = marketCarList.map((item, index) => {
        return {
            tokenId: item,
            general: carGeneral[index],
            detail: carDetail[index],
        };
    });

    return result;
};

export const createUserTradeVehicleData = async (
    address: string,
    registerData: RegisterCarSaleType & { insurance: InsuranceType },
) => {
    const marketCarList: string[] = await contract.methods.getCarsOnSale().call();
    if (marketCarList.includes(registerData.tokenId)) return;
    const { insurance, ...rest } = registerData;

    const result = await contract.methods
        .registerCarSale(
            rest.tokenId,
            rest.userName,
            rest.userAddress,
            rest.userContact,
            rest.region,
            rest.warranty,
            rest.price,
            rest.mileage,
            [
                insurance.totalLoss,
                insurance.theft,
                insurance.flood,
                insurance.repurpose,
                insurance.changeOwner,
                insurance.changeNumber,
                insurance.myDamage,
                insurance.oppoDamage,
                insurance.myAmmount,
                insurance.oppoAmmount,
            ],
        )
        .send({
            from: address,
        });
    return result;
};

export const deleteUserTradeVehicleData = async () => {};

export const updateUserTradeVehicleData = async () => {};
