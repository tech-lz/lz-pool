import BigNumber from 'bignumber.js';
export interface StakedValue {
    tokenAmount: BigNumber;
    token2Amount: BigNumber;
    totalToken2Value: BigNumber;
    tokenPriceInToken2: BigNumber;
    poolWeight: BigNumber;
    usdValue: BigNumber;
    pid: string;
    price: BigNumber;
}
declare const useBSCXPrice: () => BigNumber;
export default useBSCXPrice;
