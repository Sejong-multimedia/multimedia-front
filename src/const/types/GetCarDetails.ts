import { InsuranceType } from './RegisterCarSale';

type TransfetRecordType = {
    timestamp: string;
    seller: string;
    buyer: string;
    price: string;
    state: string;
};

export type GetCarDetailsType = {
    registDate: string;
    userName: string;
    userAddress: string;
    userContact: string;
    region: string;
    warranty: string;
    price: string;
    mileage: string;

    insuranceRecord: InsuranceType;
    transferRecord: TransfetRecordType[];
};
