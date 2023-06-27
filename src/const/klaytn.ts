import Web3 from 'web3';

const KLAYTN_CYPRESS_RPC = 'https://klaytn-mainnet-rpc.allthatnode.com:8551/Z4uSyu9UgJKl3jSP1F2J5KZeeroaSK1T';
const KLAYTN_BAOBAB_RPC = 'https://klaytn-mainnet-rpc.allthatnode.com:8551/Z4uSyu9UgJKl3jSP1F2J5KZeeroaSK1T';

const provider = new Web3.providers.HttpProvider(KLAYTN_BAOBAB_RPC);
export const web3 = new Web3(provider);
