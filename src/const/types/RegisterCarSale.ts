export type InsuranceType = {
    totalLoss: number;
    theft: number;
    flood: number;
    repurpose: number;
    changeOwner: number;
    changeNumber: number;
    myDamage: number;
    oppoDamage: number;
    myAmmount: number;
    oppoAmmount: number;
};

export type RegisterCarSaleType = {
    tokenId: string;
    userName: string;
    userAddress: string;
    userContact: string;
    region: string;
    warranty: string;
    price: number;
    mileage: number;
};
