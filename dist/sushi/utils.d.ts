export function UnknownBlock(address: any, method: any, params: any, cache: any): Promise<any>;
export function getLPValue(masterChefContract: any, lpContract: any, tokenContract: any, token2Contract: any, pid: any, rewardToken: any, version: any, rewardTokenContract: any): Promise<{
    pid: any;
    avaiableReward: number;
    totalPoolSupply: any;
    tokenAmount: BigNumber;
    token2Amount: BigNumber;
    totalToken2Value: BigNumber;
    tokenPriceInToken2: number;
    usdValue: BigNumber;
    poolWeight: BigNumber;
    tokenAmountTotal: BigNumber;
    token2AmountTotal: BigNumber;
    rewardTokenPrice: BigNumber;
    version: any;
}>;
export function getPrices(): Promise<any>;
export function getTVL(): Promise<any>;
export function getReferral(account: any): Promise<any>;
export function saveCountry(account: any): Promise<any>;
export function getMasterChefAddress(sushi: any): any;
export function getSushiAddress(sushi: any): any;
export function getXBSCXAddress(sushi: any): any;
export function getMasterChefContract(sushi: any, version: any): any;
export function getMasterChefContractV2(sushi: any): any;
export function getMasterChefContractV3(sushi: any): any;
export function getMasterChefContractV4(sushi: any): any;
export function getLaunchPoolV1Contract(sushi: any): any;
export function getLaunchPoolZDContract(sushi: any): any;
export function getReferralContract(sushi: any): any;
export function getLaunchPoolTOOLSContract(sushi: any): any;
export function getLaunchPoolXPOContract(sushi: any): any;
export function getSushiContract(sushi: any): any;
export function getXSushiStakingContract(sushi: any): any;
export function getMakerContract(sushi: any): any;
export function getMakerAddress(sushi: any): any;
export function getFarms(sushi: any): any;
export function getPoolWeight(masterChefContract: any, pid: any): Promise<BigNumber>;
export function getEarned(masterChefContract: any, pid: any, account: any, isConvertNft: any): Promise<any>;
export function getAmountNFTConvert(masterChefContract: any, pid: any, account: any, isConvertNft: any): Promise<number>;
export function getPercentLockReward(masterChefContract: any, pid: any): Promise<any>;
export function getTotalLocked(masterChefContract: any, rewardToken: any): Promise<any>;
export function getTotalUserLocked(masterChefContract: any, account: any, pid: any): Promise<any>;
export function getTotalUserLockedV1(masterChefV1Contract: any, account: any): Promise<any>;
export function getLPValuePrice(lpContract: any, tokenContract: any, token2Contract: any): Promise<{
    price: BigNumber;
}>;
export function getLPTokenStaked(sushi: any, pid: any, version: any): Promise<BigNumber>;
export function getPendingNFT(sushi: any, account: any, pid: any): Promise<number>;
export function approve(lpContract: any, masterChefContract: any, account: any): Promise<any>;
export function approveAddress(lpContract: any, address: any, account: any): Promise<any>;
export function getSushiSupply(sushi: any): Promise<BigNumber>;
export function getAmountLPStakeBSCX(sushi: any, account: any): Promise<any>;
export function getLZBalance(sushi: any, account: any): Promise<any>;
export function getRewardTokenBalance(sushi: any, project: any, version: any): Promise<any>;
export function getBSCXCirculatingSupply(sushi: any): Promise<BigNumber>;
export function checkPoolActive(pid: any): Promise<any>;
export function getNewRewardPerBlock(sushi: any, pid1: number, version: any, rewardToken: any): Promise<BigNumber>;
export function stake(masterChefContract: any, pid: any, amount: any, account: any, referral: any, decimals: any): Promise<any>;
export function emergencyWithdraw(masterChefContract: any, pid: any, account: any): Promise<any>;
export function setReferral(sushi: any, referral: any, account: any): Promise<any>;
export function unstake(masterChefContract: any, pid: any, amount: any, account: any, decimals: any): Promise<any>;
export function harvest(masterChefContract: any, pid: any, account: any): Promise<any>;
export function claimNft(masterChefContract: any, pid: any, account: any): Promise<any>;
export function getStaked(masterChefContract: any, pid: any, account: any): Promise<BigNumber>;
export function getRefBy(sushi: any, account: any): Promise<any>;
export function redeem(masterChefContract: any, account: any): Promise<any>;
export function getCanUnlockBSCX(contractBSCX: any, account: any): Promise<BigNumber>;
export function getCanUnlockToken(contract: any, account: any, pid: any): Promise<BigNumber>;
export function getXSushiSupply(sushi: any): Promise<BigNumber>;
export function getLockOf(sushi: any, account: any): Promise<BigNumber>;
export function getReferralAmountLv1(sushi: any, account: any, rewardToken: any): Promise<BigNumber>;
export function getReferralAmountLv2(sushi: any, account: any, rewardToken: any): Promise<BigNumber>;
export function unlock(contract: any, account: any): Promise<any>;
export function unlockZD(contract: any, account: any, pid: any): Promise<any>;
export function enter(contract: any, amount: any, account: any): Promise<any>;
export function makerConvert(contract: any, token0: any, token1: any, account: any): Promise<any>;
export function leave(contract: any, amount: any, account: any): Promise<any>;
import BigNumber from "bignumber.js";
