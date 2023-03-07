import BigNumber from 'bignumber.js';
export interface StakedValue {
    tokenAmount: BigNumber;
    token2Amount: BigNumber;
    totalToken2Value: BigNumber;
    tokenPriceInToken2: BigNumber;
    poolWeight: BigNumber;
    usdValue: BigNumber;
    rewardToken: any;
    pid: string;
    avaiableReward: BigNumber;
    totalPoolSupply: BigNumber;
    rewardTokenPrice: BigNumber;
}
declare const useStakedValue: (pid: number, project: string, versionPool: string) => StakedValue;
export default useStakedValue;
