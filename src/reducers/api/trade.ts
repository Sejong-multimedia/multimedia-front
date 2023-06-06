import { web3 } from '@/const/klaytn';
import { InsuranceType, RegisterCarSaleType } from '@/const/types/RegisterCarSale';
import TRADE from '../abi/trade';
import REGISTER from '../abi/register';
import { GetCarNFTType } from '@/const/types/GetCarNFT';
import { GetCarDetailsType } from '@/const/types/GetCarDetails';
import { VehicleDataType } from '@/const/types/VehicleDataType';
import { isDefined } from '@/utils/typeguard';
import { TRADE_STATUS } from '@/const/tradeStatus';

const contract = new web3.eth.Contract(TRADE.abi, TRADE.address);

export const readMarketVehicleData = async () => {
    const marketCarList: string[] = await contract.methods.getCarsOnSale().call();

    const carGeneralPromises: GetCarNFTType[] = [];
    const carDetailPromises: GetCarDetailsType[] = [];
    const carStatesPromises: string[] = [];
    marketCarList.forEach((item) => {
        carGeneralPromises.push(contract.methods.getCarNFT(item).call());
        carDetailPromises.push(contract.methods.getCarDetails(item).call());
        carStatesPromises.push(contract.methods.getState(item).call());
    });

    const carGeneral = await Promise.all(carGeneralPromises);
    const carDetail = await Promise.all(carDetailPromises);
    const carStates = await Promise.all(carStatesPromises);

    console.log('carGeneral', carGeneral);

    const result = marketCarList.map((item, index) => {
        return {
            tokenId: item,
            general: carGeneral[index],
            detail: carDetail[index],
            state: carStates[index],
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

export const readUserSaleVehicleData = async (address: string) => {
    const userOwnedCarList: VehicleDataType[] = await contract.methods.getOwnedTokenIds(address).call();
    const isRegisteredPromises: any[] = [];

    userOwnedCarList.forEach((item) => {
        isRegisteredPromises.push(contract.methods.isRegistered(item.TokenId).call());
    });
    const isRegistered: boolean[] = await Promise.all(isRegisteredPromises);

    const carDetailPromises: GetCarDetailsType[] = [];
    const carStatesPromises: string[] = [];

    isRegistered.forEach((item, index) => {
        if (item) {
            carDetailPromises.push(contract.methods.getCarDetails(userOwnedCarList[index]?.TokenId).call());
            carStatesPromises.push(contract.methods.getState(userOwnedCarList[index]?.TokenId).call());
        }
    });
    const carDetails = await Promise.all(carDetailPromises);
    const carStates = await Promise.all(carStatesPromises);

    const carDetailsHandled = userOwnedCarList
        .map((item, index) => {
            if (isRegistered[index]) {
                return {
                    tokenId: item.TokenId,
                    general: item,
                    detail: carDetails[index],
                    state: TRADE_STATUS[Number(carStates[index] ?? 0)],
                };
            }
        })
        .filter(isDefined);

    return carDetailsHandled;
};

export const readUserPurchaseVehicleData = async (address: string) => {
    const userReservedCarList: string[] = await contract.methods.getReserveCar(address).call();
    if (userReservedCarList.length === 0) return [];

    const carGeneralPromises: GetCarNFTType[] = [];
    const carDetailPromises: GetCarDetailsType[] = [];
    const carStatesPromises: string[] = [];
    userReservedCarList.forEach((item) => {
        carGeneralPromises.push(contract.methods.getCarNFT(item).call());
        carDetailPromises.push(contract.methods.getCarDetails(item).call());
        carStatesPromises.push(contract.methods.getState(item).call());
    });
    const carGeneral = await Promise.all(carGeneralPromises);
    const carDetail = await Promise.all(carDetailPromises);
    const carStates = await Promise.all(carStatesPromises);
    const result = userReservedCarList.map((item, index) => {
        return {
            tokenId: item,
            general: carGeneral[index],
            detail: carDetail[index],
            state: TRADE_STATUS[Number(carStates[index] ?? 0)],
        };
    });

    return result;
};

export const userReservedCar = async (address: string, tokenId: string) => {
    const result = await contract.methods.reserveCar(tokenId).send({
        from: address,
    });
    return result;
};

export const userConfirmSellCar = async (address: string, tokenId: string) => {
    const result = await contract.methods.confirmSelling(tokenId).send({
        from: address,
    });
    return result;
};

export const userConfirmBuyCar = async (address: string, tokenId: string) => {
    const result = await contract.methods.confirmBuying(tokenId).send({
        from: address,
    });
    return result;
};
