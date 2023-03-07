import BigNumber from 'bignumber.js';
export interface StakedValue {
    lpAddresses: string;
    lpBalance: BigNumber;
    token0Addresses: string;
    token0Symbol: string;
    token0Balance: BigNumber;
    token1Addresses: string;
    token1Symbol: string;
    token1Balance: BigNumber;
}
declare const useAllMakerValue: () => StakedValue[];
export default useAllMakerValue;
