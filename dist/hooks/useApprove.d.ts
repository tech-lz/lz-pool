import { Contract } from 'web3-eth-contract';
declare const useApprove: (lpContract: Contract, version: string, account: string) => {
    onApprove: () => Promise<any>;
};
export default useApprove;
