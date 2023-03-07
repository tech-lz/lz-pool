export const SUBTRACT_GAS_LIMIT: 100000;
export const START_REWARD_AT_BLOCK: 3525595;
export const NUMBER_BLOCKS_PER_YEAR: 10512000;
export const START_NEW_POOL_AT: 1609255800;
export const BSCX_PRICE_POOL: 0;
export const ZSEED_PRICE_POOL: 2;
export const ZSEED_BSCX_PRICE_POOL: 1;
export const CONSTANT_APY: 9000;
export const LP_ADDRESSES_STAKE_BSCX: {
    56: string;
    97: string;
};
export const LP_BALANCE_LV1: 30;
export const LP_BALANCE_LV2: 300;
export const LZ_TOKEN: "0x3B78458981eB7260d1f781cb8be2CaAC7027DbE2";
export const LZP_TOKEN: "0x4211959585C8F18B06dab8B5bB0Bc825cad4c1De";
export const BUSD_TOKEN: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
export const USDT_TOKEN: "0x55d398326f99059fF775485246999027B3197955";
export const USDC_TOKEN: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d";
export const BSCX_TOKEN: "0x5ac52ee5b2a633895292ff6d8a89bb9190451587";
export const HEROEGG_TOKEN: "0xcfbb1bfa710cb2eba070cc3bec0c35226fea4baf";
export const HERON_TOKEN: "0x90451265fd0598e088e42c1768d6211f0978954a";
export const LZF_TOKEN: "0x080b9a7e78f3e61d1c08551e0f523969dd3ca96b";
export const LZT_TOKEN: "0xb07c21F9e219F1FB55A706a8bf21b1D9c355c8e5";
export const ROFI_TOKEN: "0x3244B3B6030f374bAFA5F8f80Ec2F06aAf104B64";
export const ROFI2_TOKEN: "0x65f6d9b1e4f4ef843049f5845b71531a5ce231eb";
export const ITAM_TOKEN: "0x04c747b40be4d535fc83d09939fb0f626f32800b";
export const LAUNCHPOOLX_V1: "0x1070B9a998C4457C5f393e389F275012e91b31d2";
export const LAUNCHPOOLX_ZD_ZSEED: "0xaebbc1d47af8aef82717533347f116a58c81a0df";
export const LAUNCHPOOLX_TOOLS: "0x74842C1cF471031d1a5307c486049898CDc4468B";
export const LAUNCHPOOLX_XPO: "0x6B8220898d01676705Bbc118805D29bC0DB0FA3C";
export const REFERRAL: "0x12f10915dA4da6F7B09f622311Ef4fF6AdE579CA";
export namespace contractAddresses {
    export const sushi: {
        56: string;
    };
    export const xSushi: {
        56: string;
    };
    export const maker: {
        56: string;
    };
    export const masterChef: {
        56: string;
    };
    export const masterChefV2: {
        56: string;
    };
    export const masterChefV3: {
        56: string;
    };
    export const masterChefV4: {
        56: string;
    };
    export const weth: {
        56: string;
        97: string;
    };
}
export namespace VERSIONS {
    export const V1: string;
    export const V2: string;
    export const V3: string;
    export const V4: string;
}
export namespace LOGOS {
    export const LZ: string;
    export const LZP: string;
    export const BUSD: string;
    export const USDT: string;
    export const USDC: string;
    export const HEROEGG: string;
    export const HERON: string;
    export const ROFI: string;
    export const FarmTools: string;
    export const FarmCage: string;
    export const WindMill: string;
    export const ITAM: string;
}
export namespace PAIRS {
    export const LZ_BUSD: string;
    export const LZ_USDT: string;
    export const LZ_USDC: string;
    export const LZP_BUSD: string;
    export const HEROEGG_BUSD: string;
    export const HERON_BUSD: string;
    export const HERON_ROFI: string;
    export const ROFI_BUSD: string;
}
export const LINK_LIQUIDITY: "https://liquidity.lz.finance/#";
export const supportedPools: ({
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
} | {
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
})[];
export namespace PROJECTS {
    export namespace LZ_1 {
        export const name: string;
        export const status: string;
        import logo = LZ;
        export { logo };
        export const description: string;
        export const totalReward: number;
        export const farmPeriod: number;
        export const timeEnded: number;
        export { LZ_TOKEN as tokenAddress };
    }
    export { LZ_1 as LZ };
}
export namespace INTEGERS {
    export { ONE_MINUTE_IN_SECONDS };
    export { ONE_HOUR_IN_SECONDS };
    export { ONE_DAY_IN_SECONDS };
    export { ONE_YEAR_IN_SECONDS };
    export const ZERO: BigNumber;
    export const ONE: BigNumber;
    export const ONES_31: BigNumber;
    export const ONES_127: BigNumber;
    export const ONES_255: BigNumber;
    export const INTEREST_RATE_BASE: BigNumber;
}
declare const ONE_MINUTE_IN_SECONDS: BigNumber;
declare const ONE_HOUR_IN_SECONDS: BigNumber;
declare const ONE_DAY_IN_SECONDS: BigNumber;
declare const ONE_YEAR_IN_SECONDS: BigNumber;
import BigNumber from "bignumber.js";
export {};
