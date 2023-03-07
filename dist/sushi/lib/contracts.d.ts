export class Contracts {
    constructor(provider: any, networkId: any, web3: any, options: any);
    web3: any;
    defaultConfirmations: any;
    autoGasMultiplier: any;
    confirmationType: any;
    defaultGas: any;
    defaultGasPrice: any;
    sushi: any;
    masterChef: any;
    masterChefV2: any;
    masterChefV3: any;
    masterChefV4: any;
    lpStakeBSCX: any;
    referralContract: any;
    xSushiStaking: any;
    weth: any;
    maker: any;
    launchPoolXV1: any;
    launchPoolXTOOLS: any;
    launchPoolXXPO: any;
    launchPoolZD: any;
    pools: (({
        pid: number;
        isConvertNft: boolean;
        stake: boolean;
        decimals: number;
        decimalsReward: number;
        version: string;
        project: string;
        lpAddresses: {
            56: string;
        };
        tokenAddresses: {
            56: string;
        };
        token2Addresses: {
            56: string;
        };
        rewardToken: {
            address: string;
            symbol: string;
        };
        name: string;
        symbol: string;
        symbolShort: string;
        description: string;
        tokenSymbol: string;
        token2Symbol: string;
        icon: string;
        icon2: string;
        isHot: boolean;
        isNew: boolean;
        protocal: string;
        iconProtocal: string;
        pairLink: string;
        addLiquidityLink: string;
        removeLiquidityLink: string;
        rewardLogo: string;
    } & {
        lpAddress: any;
        tokenAddress: any;
        token2Address: any;
        rewardTokenAddress: string;
        rewardTokenContract: any;
        lpContract: any;
        tokenContract: any;
        token2Contract: any;
    }) | ({
        pid: number;
        stake: boolean;
        decimals: number;
        decimalsReward: number;
        version: string;
        project: string;
        lpAddresses: {
            56: string;
        };
        tokenAddresses: {
            56: string;
        };
        token2Addresses: {
            56: string;
        };
        rewardToken: {
            address: string;
            symbol: string;
        };
        name: string;
        symbol: string;
        symbolShort: string;
        description: string;
        tokenSymbol: string;
        token2Symbol: string;
        icon: string;
        icon2: string;
        isHot: boolean;
        isNew: boolean;
        protocal: string;
        iconProtocal: string;
        pairLink: string;
        addLiquidityLink: string;
        removeLiquidityLink: string;
        rewardLogo: string;
        isConvertNft?: undefined;
    } & {
        lpAddress: any;
        tokenAddress: any;
        token2Address: any;
        rewardTokenAddress: string;
        rewardTokenContract: any;
        lpContract: any;
        tokenContract: any;
        token2Contract: any;
    }))[];
    setProvider(provider: any, networkId: any): void;
    setDefaultAccount(account: any): void;
}
