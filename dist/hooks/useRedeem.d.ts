import { Contract } from 'web3-eth-contract';
declare const useRedeem: (masterChefContract: Contract) => {
    onRedeem: () => Promise<any>;
};
export default useRedeem;
