import Web3 from 'web3';

const KLAYTN_CYPRESS_RPC = 'https://klaytn-mainnet-rpc.allthatnode.com:8551/8556797ngIBvFv0VQ5uJIFQoc8jPKpSM';
const KLAYTN_BAOBAB_RPC = 'https://klaytn-baobab-rpc.allthatnode.com:8551/8556797ngIBvFv0VQ5uJIFQoc8jPKpSM';

export const web3 = new Web3(KLAYTN_BAOBAB_RPC);
