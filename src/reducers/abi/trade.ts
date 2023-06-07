import { AbiItem } from 'web3-utils';

type TradeType = {
    address: string;
    abi: AbiItem[];
};
const TRADE: TradeType = {
    address: '0x9F34661DfaEBB2c1ad36656D90446D89a95f5B46',
    abi: [
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'owner',
                    type: 'address',
                },
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'approved',
                    type: 'address',
                },
                {
                    indexed: true,
                    internalType: 'uint256',
                    name: 'tokenId',
                    type: 'uint256',
                },
            ],
            name: 'Approval',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'owner',
                    type: 'address',
                },
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'operator',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'bool',
                    name: 'approved',
                    type: 'bool',
                },
            ],
            name: 'ApprovalForAll',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'previousOwner',
                    type: 'address',
                },
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'newOwner',
                    type: 'address',
                },
            ],
            name: 'OwnershipTransferred',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'from',
                    type: 'address',
                },
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'to',
                    type: 'address',
                },
                {
                    indexed: true,
                    internalType: 'uint256',
                    name: 'tokenId',
                    type: 'uint256',
                },
            ],
            name: 'Transfer',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: 'timestamp',
                    type: 'uint256',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: 'tokenId',
                    type: 'uint256',
                },
                {
                    indexed: false,
                    internalType: 'address',
                    name: 'seller',
                    type: 'address',
                },
            ],
            name: 'registerSale',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: 'timestamp',
                    type: 'uint256',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: 'tokenId',
                    type: 'uint256',
                },
                {
                    indexed: false,
                    internalType: 'address',
                    name: 'seller',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'address',
                    name: 'buyer',
                    type: 'address',
                },
            ],
            name: 'transactionCompleted',
            type: 'event',
        },
        {
            stateMutability: 'payable',
            type: 'fallback',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'to',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: 'tokenId',
                    type: 'uint256',
                },
            ],
            name: 'approve',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'owner',
                    type: 'address',
                },
            ],
            name: 'balanceOf',
            outputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'uint256',
                    name: '_tokenId',
                    type: 'uint256',
                },
            ],
            name: 'cancelCarPurchase',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'uint256',
                    name: '_tokenId',
                    type: 'uint256',
                },
            ],
            name: 'cancelCarSale',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'uint256',
                    name: '_tokenId',
                    type: 'uint256',
                },
            ],
            name: 'confirmBuying',
            outputs: [
                {
                    internalType: 'bool',
                    name: '',
                    type: 'bool',
                },
            ],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'uint256',
                    name: '_tokenId',
                    type: 'uint256',
                },
            ],
            name: 'confirmSelling',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'uint256',
                    name: 'tokenId',
                    type: 'uint256',
                },
            ],
            name: 'deleteCarNFT',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'string',
                    name: 'brand',
                    type: 'string',
                },
                {
                    internalType: 'string',
                    name: 'model',
                    type: 'string',
                },
                {
                    internalType: 'string',
                    name: 'year',
                    type: 'string',
                },
                {
                    internalType: 'string',
                    name: 'licenseNum',
                    type: 'string',
                },
                {
                    internalType: 'string',
                    name: 'registerNum',
                    type: 'string',
                },
                {
                    internalType: 'string',
                    name: 'fuel',
                    type: 'string',
                },
                {
                    internalType: 'string',
                    name: 'cc',
                    type: 'string',
                },
            ],
            name: 'generateCarNFT',
            outputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'uint256',
                    name: 'tokenId',
                    type: 'uint256',
                },
            ],
            name: 'getApproved',
            outputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'uint256',
                    name: '_tokenId',
                    type: 'uint256',
                },
            ],
            name: 'getCarDetails',
            outputs: [
                {
                    components: [
                        {
                            internalType: 'uint256',
                            name: 'registDate',
                            type: 'uint256',
                        },
                        {
                            internalType: 'string',
                            name: 'userName',
                            type: 'string',
                        },
                        {
                            internalType: 'string',
                            name: 'userAddress',
                            type: 'string',
                        },
                        {
                            internalType: 'string',
                            name: 'userContact',
                            type: 'string',
                        },
                        {
                            internalType: 'string',
                            name: 'region',
                            type: 'string',
                        },
                        {
                            internalType: 'string',
                            name: 'warranty',
                            type: 'string',
                        },
                        {
                            internalType: 'uint256',
                            name: 'price',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'mileage',
                            type: 'uint256',
                        },
                        {
                            components: [
                                {
                                    internalType: 'uint256',
                                    name: 'tokenId',
                                    type: 'uint256',
                                },
                                {
                                    internalType: 'uint256',
                                    name: 'timestamp',
                                    type: 'uint256',
                                },
                                {
                                    internalType: 'address',
                                    name: 'seller',
                                    type: 'address',
                                },
                                {
                                    internalType: 'address',
                                    name: 'buyer',
                                    type: 'address',
                                },
                                {
                                    internalType: 'uint256',
                                    name: 'price',
                                    type: 'uint256',
                                },
                                {
                                    internalType: 'enum CarNFT_SaleRegistration.Status',
                                    name: 'state',
                                    type: 'uint8',
                                },
                            ],
                            internalType: 'struct CarNFT_SaleRegistration.Transaction[]',
                            name: 'transferRecord',
                            type: 'tuple[]',
                        },
                        {
                            components: [
                                {
                                    internalType: 'uint256',
                                    name: 'totalLoss',
                                    type: 'uint256',
                                },
                                {
                                    internalType: 'uint256',
                                    name: 'theft',
                                    type: 'uint256',
                                },
                                {
                                    internalType: 'uint256',
                                    name: 'flood',
                                    type: 'uint256',
                                },
                                {
                                    internalType: 'uint256',
                                    name: 'repurpose',
                                    type: 'uint256',
                                },
                                {
                                    internalType: 'uint256',
                                    name: 'changeOwner',
                                    type: 'uint256',
                                },
                                {
                                    internalType: 'uint256',
                                    name: 'changeNumber',
                                    type: 'uint256',
                                },
                                {
                                    internalType: 'uint256',
                                    name: 'myDamage',
                                    type: 'uint256',
                                },
                                {
                                    internalType: 'uint256',
                                    name: 'oppoDamage',
                                    type: 'uint256',
                                },
                                {
                                    internalType: 'uint256',
                                    name: 'myAmmount',
                                    type: 'uint256',
                                },
                                {
                                    internalType: 'uint256',
                                    name: 'oppoAmmount',
                                    type: 'uint256',
                                },
                            ],
                            internalType: 'struct CarNFT_SaleRegistration.Insurance',
                            name: 'insuranceRecord',
                            type: 'tuple',
                        },
                        {
                            internalType: 'string',
                            name: 'performanceRecord',
                            type: 'string',
                        },
                    ],
                    internalType: 'struct CarNFT_SaleRegistration.Detail',
                    name: '',
                    type: 'tuple',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'uint256',
                    name: 'tokenId',
                    type: 'uint256',
                },
            ],
            name: 'getCarNFT',
            outputs: [
                {
                    internalType: 'string',
                    name: 'brand',
                    type: 'string',
                },
                {
                    internalType: 'string',
                    name: 'model',
                    type: 'string',
                },
                {
                    internalType: 'string',
                    name: 'year',
                    type: 'string',
                },
                {
                    internalType: 'string',
                    name: 'licenseNum',
                    type: 'string',
                },
                {
                    internalType: 'string',
                    name: 'registerNum',
                    type: 'string',
                },
                {
                    internalType: 'string',
                    name: 'fuel',
                    type: 'string',
                },
                {
                    internalType: 'string',
                    name: 'cc',
                    type: 'string',
                },
                {
                    internalType: 'string',
                    name: 'carSide',
                    type: 'string',
                },
                {
                    internalType: 'string',
                    name: 'carFront',
                    type: 'string',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'getCarsOnSale',
            outputs: [
                {
                    internalType: 'uint256[]',
                    name: '',
                    type: 'uint256[]',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'getEveryTokenIds',
            outputs: [
                {
                    internalType: 'uint256[]',
                    name: '',
                    type: 'uint256[]',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'user',
                    type: 'address',
                },
            ],
            name: 'getOwnedTokenIds',
            outputs: [
                {
                    components: [
                        {
                            internalType: 'uint256',
                            name: 'TokenId',
                            type: 'uint256',
                        },
                        {
                            internalType: 'string',
                            name: 'brand',
                            type: 'string',
                        },
                        {
                            internalType: 'string',
                            name: 'model',
                            type: 'string',
                        },
                        {
                            internalType: 'string',
                            name: 'year',
                            type: 'string',
                        },
                        {
                            internalType: 'string',
                            name: 'licenseNum',
                            type: 'string',
                        },
                        {
                            internalType: 'string',
                            name: 'registerNum',
                            type: 'string',
                        },
                        {
                            internalType: 'string',
                            name: 'fuel',
                            type: 'string',
                        },
                        {
                            internalType: 'string',
                            name: 'cc',
                            type: 'string',
                        },
                        {
                            internalType: 'string',
                            name: 'URI_Register',
                            type: 'string',
                        },
                        {
                            internalType: 'string',
                            name: 'URI_Trade',
                            type: 'string',
                        },
                    ],
                    internalType: 'struct CarNFT_Generate.CarDataWithTokenId[]',
                    name: '',
                    type: 'tuple[]',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'uint256',
                    name: '_tokenId',
                    type: 'uint256',
                },
            ],
            name: 'getPrevTransactions',
            outputs: [
                {
                    components: [
                        {
                            internalType: 'uint256',
                            name: 'tokenId',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'timestamp',
                            type: 'uint256',
                        },
                        {
                            internalType: 'address',
                            name: 'seller',
                            type: 'address',
                        },
                        {
                            internalType: 'address',
                            name: 'buyer',
                            type: 'address',
                        },
                        {
                            internalType: 'uint256',
                            name: 'price',
                            type: 'uint256',
                        },
                        {
                            internalType: 'enum CarNFT_SaleRegistration.Status',
                            name: 'state',
                            type: 'uint8',
                        },
                    ],
                    internalType: 'struct CarNFT_SaleRegistration.Transaction[]',
                    name: '',
                    type: 'tuple[]',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '_buyer',
                    type: 'address',
                },
            ],
            name: 'getReserveCar',
            outputs: [
                {
                    internalType: 'uint256[]',
                    name: '',
                    type: 'uint256[]',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'uint256',
                    name: '_tokenId',
                    type: 'uint256',
                },
            ],
            name: 'getState',
            outputs: [
                {
                    internalType: 'enum CarNFT_SaleRegistration.Status',
                    name: '',
                    type: 'uint8',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'owner',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: 'operator',
                    type: 'address',
                },
            ],
            name: 'isApprovedForAll',
            outputs: [
                {
                    internalType: 'bool',
                    name: '',
                    type: 'bool',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'uint256',
                    name: '_tokenId',
                    type: 'uint256',
                },
            ],
            name: 'isRegistered',
            outputs: [
                {
                    internalType: 'bool',
                    name: '',
                    type: 'bool',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'uint256',
                    name: '_tokenId',
                    type: 'uint256',
                },
            ],
            name: 'isTrading',
            outputs: [
                {
                    internalType: 'bool',
                    name: '',
                    type: 'bool',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'name',
            outputs: [
                {
                    internalType: 'string',
                    name: '',
                    type: 'string',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'operator',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: 'from',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: 'tokenId',
                    type: 'uint256',
                },
                {
                    internalType: 'bytes',
                    name: 'data',
                    type: 'bytes',
                },
            ],
            name: 'onKIP17Received',
            outputs: [
                {
                    internalType: 'bytes4',
                    name: '',
                    type: 'bytes4',
                },
            ],
            stateMutability: 'pure',
            type: 'function',
        },
        {
            inputs: [],
            name: 'owner',
            outputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'uint256',
                    name: 'tokenId',
                    type: 'uint256',
                },
            ],
            name: 'ownerOf',
            outputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'uint256',
                    name: '_tokenId',
                    type: 'uint256',
                },
                {
                    internalType: 'string',
                    name: '_userName',
                    type: 'string',
                },
                {
                    internalType: 'string',
                    name: '_userAddress',
                    type: 'string',
                },
                {
                    internalType: 'string',
                    name: '_userContact',
                    type: 'string',
                },
                {
                    internalType: 'string',
                    name: '_region',
                    type: 'string',
                },
                {
                    internalType: 'string',
                    name: '_warranty',
                    type: 'string',
                },
                {
                    internalType: 'uint256',
                    name: '_price',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: '_mileage',
                    type: 'uint256',
                },
                {
                    components: [
                        {
                            internalType: 'uint256',
                            name: 'totalLoss',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'theft',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'flood',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'repurpose',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'changeOwner',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'changeNumber',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'myDamage',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'oppoDamage',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'myAmmount',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'oppoAmmount',
                            type: 'uint256',
                        },
                    ],
                    internalType: 'struct CarNFT_SaleRegistration.Insurance',
                    name: '_insurance',
                    type: 'tuple',
                },
            ],
            name: 'registerCarSale',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'renounceOwnership',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'uint256',
                    name: '_tokenId',
                    type: 'uint256',
                },
            ],
            name: 'reserveCar',
            outputs: [],
            stateMutability: 'payable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'from',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: 'to',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: 'tokenId',
                    type: 'uint256',
                },
            ],
            name: 'safeTransferFrom',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'from',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: 'to',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: 'tokenId',
                    type: 'uint256',
                },
                {
                    internalType: 'bytes',
                    name: '_data',
                    type: 'bytes',
                },
            ],
            name: 'safeTransferFrom',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'operator',
                    type: 'address',
                },
                {
                    internalType: 'bool',
                    name: 'approved',
                    type: 'bool',
                },
            ],
            name: 'setApprovalForAll',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes4',
                    name: 'interfaceId',
                    type: 'bytes4',
                },
            ],
            name: 'supportsInterface',
            outputs: [
                {
                    internalType: 'bool',
                    name: '',
                    type: 'bool',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'symbol',
            outputs: [
                {
                    internalType: 'string',
                    name: '',
                    type: 'string',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'uint256',
                    name: 'tokenId',
                    type: 'uint256',
                },
            ],
            name: 'tokenURI',
            outputs: [
                {
                    internalType: 'string',
                    name: '',
                    type: 'string',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'from',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: 'to',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: 'tokenId',
                    type: 'uint256',
                },
            ],
            name: 'transferFrom',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'newOwner',
                    type: 'address',
                },
            ],
            name: 'transferOwnership',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'uint256',
                    name: 'tokenId',
                    type: 'uint256',
                },
                {
                    internalType: 'string',
                    name: 'brand',
                    type: 'string',
                },
                {
                    internalType: 'string',
                    name: 'model',
                    type: 'string',
                },
                {
                    internalType: 'string',
                    name: 'year',
                    type: 'string',
                },
                {
                    internalType: 'string',
                    name: 'licenseNum',
                    type: 'string',
                },
                {
                    internalType: 'string',
                    name: 'registerNum',
                    type: 'string',
                },
                {
                    internalType: 'string',
                    name: 'fuel',
                    type: 'string',
                },
                {
                    internalType: 'string',
                    name: 'cc',
                    type: 'string',
                },
            ],
            name: 'updateCarNFT',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            stateMutability: 'payable',
            type: 'receive',
        },
    ],
};

export default TRADE;
