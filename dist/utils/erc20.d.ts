import { provider } from 'web3-core';
import { Contract } from 'web3-eth-contract';
export declare const getContract: (provider: any, address: string) => Contract;
export declare const getAllowance: (lpContract: Contract, masterChefContract: Contract, account: string) => Promise<string>;
export declare const getAllowanceStaking: (contract: Contract, owner: string, spender: string) => Promise<string>;
export declare const getBalance: (provider: provider, tokenAddress: string, userAddress: string) => Promise<string>;
export declare const getTotalSupply: (provider: provider, tokenAddress: string) => Promise<string>;
export declare const getCirculatingSupply: (provider: provider, tokenAddress: string) => Promise<string>;
