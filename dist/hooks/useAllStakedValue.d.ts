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
    rewardTokenPrice: BigNumber;
    version: string;
    avaiableReward: BigNumber;
}
declare const useAllStakedValue: () => StakedValue[];
export default useAllStakedValue;
