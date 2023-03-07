import BigNumber from 'bignumber.js';
import { Contract } from 'web3-eth-contract';
declare const useAllowance: (lpContract: Contract, version: string, account: string) => BigNumber;
export default useAllowance;
