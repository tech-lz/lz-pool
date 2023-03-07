import BigNumber from 'bignumber.js';
export { default as formatAddress } from './formatAddress';
export declare const bnToDec: (bn: BigNumber, decimals?: number) => number;
export declare const decToBn: (dec: number, decimals?: number) => BigNumber;
export declare const isAddress: (address: string) => boolean;
