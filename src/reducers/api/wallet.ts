import axios from 'axios';
import BigNumber from 'bignumber.js';

import { isDefined } from '@/utils/typeguard';
import { hexToDecimal } from '@/utils/utilFunctions';

const BAOBAB_CHAIN_ID = 1001;

const getChainID = async () => {
    const { ethereum } = window;
    if (!ethereum) throw new Error('Failed to detect wallet or browser.');
    try {
        const chainID: string = await ethereum.request({ method: 'eth_chainId' });
        if (typeof chainID !== 'string') throw new Error('Invalid chainID type.');
        return parseInt(chainID, 16);
    } catch (error) {
        throw new Error('Fail to get chain ID.');
    }
};

const switchChain = async (chainID: number) => {
    const { ethereum } = window;
    if (!ethereum) throw new Error('Failed to detect wallet or browser.');
    try {
        await ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
                {
                    chainId: `0x${chainID.toString(16)}`,
                    chainName: 'Klaytn Baobab',
                    nativeCurrency: {
                        name: 'klay',
                        symbol: 'KLAY',
                        decimals: 18,
                    },
                    rpcUrls: ['https://public-en-baobab.klaytn.net/'],
                    blockExplorerUrls: ['https://baobab.klaytnscope.com/'],
                },
            ],
        });
        await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: `0x${chainID.toString(16)}` }],
        });
    } catch (error) {
        throw new Error('Fail to switch chain.');
    }
};

export const getMetamaskAddress = async () => {
    const chainID = await getChainID();
    if (chainID !== BAOBAB_CHAIN_ID) await switchChain(BAOBAB_CHAIN_ID);
    const { ethereum } = window;
    if (!ethereum) throw new Error('Failed to detect wallet or browser.');
    try {
        const addresses: string[] = await ethereum.request({ method: 'eth_requestAccounts' });
        if (!Array.isArray(addresses)) throw new Error('The value returned is not of the correct type.');
        const address = addresses.filter(isDefined).shift();
        if (!address) throw new Error('The returned value was returned as an empty array.');
        return {
            wallet: 'metamask',
            address,
        };
    } catch (error) {
        throw new Error('Unknown error is occured.');
    }
};

type GetBalanceType = {
    id: number;
    jsonrpc: string;
    result: string;
};
export const getMetamaskAddressBalance = async () => {
    const { address } = await getMetamaskAddress();

    const result = await axios.post<GetBalanceType>(
        'https://polygon-testnet-rpc.allthatnode.com:8545',
        {
            jsonrpc: '2.0',
            method: 'eth_getBalance',
            params: [address, 'latest'],
            id: 1,
        },
        {
            headers: {
                'Content-Type': 'application/json',
            },
        },
    );

    const { result: balanceHex } = result?.data ?? { result: '0x0' };
    const balanceDecimal = hexToDecimal(balanceHex);
    const balance = new BigNumber(balanceDecimal).div(Math.pow(10, 18)).toString();

    return balance;
};
