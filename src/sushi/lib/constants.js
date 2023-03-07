import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000
export const START_REWARD_AT_BLOCK = 3525595 // TODO
export const NUMBER_BLOCKS_PER_YEAR = 10512000

export const START_NEW_POOL_AT = 1609255800 // 2020/12/29 22h30

export const BSCX_PRICE_POOL = 0
export const ZSEED_PRICE_POOL = 2
export const ZSEED_BSCX_PRICE_POOL = 1

export const CONSTANT_APY = 9000

export const LP_ADDRESSES_STAKE_BSCX = {
  56: '0x2d518fdcc1c8e89b1abc6ed73b887e12e61f06de',
  97: '0x8390ba50006860538936C96C1F283019Fbe72BFd'
}

// export const LP_BALANCE_LV1 = 5 // TEST
// export const LP_BALANCE_LV2 = 15 // TEST
export const LP_BALANCE_LV1 = 30
export const LP_BALANCE_LV2 = 300

export const LZ_TOKEN = '0x3B78458981eB7260d1f781cb8be2CaAC7027DbE2'
export const LZP_TOKEN = '0x4211959585C8F18B06dab8B5bB0Bc825cad4c1De'
export const BUSD_TOKEN = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
export const USDT_TOKEN = '0x55d398326f99059fF775485246999027B3197955'
export const USDC_TOKEN = '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d'
export const BSCX_TOKEN = '0x5ac52ee5b2a633895292ff6d8a89bb9190451587'
export const HEROEGG_TOKEN = '0xcfbb1bfa710cb2eba070cc3bec0c35226fea4baf'
export const HERON_TOKEN = '0x90451265fd0598e088e42c1768d6211f0978954a'
export const LZF_TOKEN = '0x080b9a7e78f3e61d1c08551e0f523969dd3ca96b'
export const LZT_TOKEN = '0xb07c21F9e219F1FB55A706a8bf21b1D9c355c8e5'
export const ROFI_TOKEN = '0x3244B3B6030f374bAFA5F8f80Ec2F06aAf104B64'
export const ROFI2_TOKEN = '0x65f6d9b1e4f4ef843049f5845b71531a5ce231eb'
export const ITAM_TOKEN = '0x04c747b40be4d535fc83d09939fb0f626f32800b'

export const LAUNCHPOOLX_V1 = '0x1070B9a998C4457C5f393e389F275012e91b31d2'
export const LAUNCHPOOLX_ZD_ZSEED = '0xaebbc1d47af8aef82717533347f116a58c81a0df'
export const LAUNCHPOOLX_TOOLS = '0x74842C1cF471031d1a5307c486049898CDc4468B'
export const LAUNCHPOOLX_XPO = '0x6B8220898d01676705Bbc118805D29bC0DB0FA3C' // ZDCASH 
export const REFERRAL = '0x12f10915dA4da6F7B09f622311Ef4fF6AdE579CA'

export const contractAddresses = {
  sushi: {
    56: '0x3B78458981eB7260d1f781cb8be2CaAC7027DbE2', // lz token
  },
  xSushi: {
    56: '0xF1CE70C337EcCD47A998be0Bb07E49188Bc60A3c', // BSCXSafe
  },
  maker: {
    56: '0xE162A4ac31086bb0B135c2bFE6434BA22b759c59',
  },
  masterChef: {
    56: '0x47f30f5189c979e9f71ac500e5cba0000b5ebd0c',
  },
  masterChefV2: {
    56: '0x92777004DEfC06856b8eAf581454A004F83eB3F8',
  },
  masterChefV3: {
    56: '0xdc9eddeebc97ff815cec3d52ff94b512a04b88c1',
  },
  masterChefV4: {
    56: '0x92777004DEfC06856b8eAf581454A004F83eB3F8',
  },
  weth: {
    56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    97: '0xae13d989dac2f0debff460ac112a837c89baa7cd' // wbnb
  }
}

export const VERSIONS = {
  V1: 'V1',
  V2: 'V2',
  V3: 'V3',
  V4: 'V4'
}

export const LOGOS = {
  LZ: 'https://raw.githubusercontent.com/ezDeFi/ezdefi-media/master/launchzone-logo/lz-logo.png',
  LZP: 'https://raw.githubusercontent.com/ezDeFi/ezdefi-media/master/launchzone-logo/128x128%20lzp.png',
  BUSD: 'https://s2.coinmarketcap.com/static/img/coins/128x128/4687.png',
  USDT: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
  USDC: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png',
  HEROEGG: 'https://lzp.s3.ap-southeast-1.amazonaws.com/heroegg_logo.png',
  HERON: 'https://s2.coinmarketcap.com/static/img/coins/64x64/13045.png',
  ROFI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/13164.png',
  FarmTools: 'https://lzp.s3.ap-southeast-1.amazonaws.com/farmtool_1+3.png',
  FarmCage: 'https://lzp.s3.ap-southeast-1.amazonaws.com/farmcage_1+1.png',
  WindMill: 'https://lzp.s3.ap-southeast-1.amazonaws.com/windmill_1+2.png',
  ITAM: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6490.png'
}

export const PAIRS = {
  LZ_BUSD: '0x2d518fdcc1c8e89b1abc6ed73b887e12e61f06de',
  LZ_USDT: '0x9Ce4fc52f2fd82873e8239a243F7c69Ed961204C',
  LZ_USDC: '0x3a9478210ca89e5c83a57f6059d45ef0fac7f2ce',
  LZP_BUSD: '0x0bf9ac4c4d9e380b37505b9357363deae0ac3e6e',
  HEROEGG_BUSD: '0xdb5be93d8830d93d2a406b2e235038db4ee7d9b1',
  HERON_BUSD: '0x0D8df4eBE4d113779ed6cC74eD897342a63429d9',
  HERON_ROFI: '0x20e28f8d6709679ed304db467e6f3c40e305d954',
  ROFI_BUSD: '0x46bC5607fC6aD331Ae7feC53ccb5Cf0865438363'
}

export const LINK_LIQUIDITY = 'https://liquidity.lz.finance/#'

export const supportedPools = [
  // {
  //   pid: 5,
  //   stake: true,
  //   decimals: 18,
  //   decimalsReward: 18,
  //   version: VERSIONS.V3,
  //   project: 'LZ',
  //   lpAddresses: {
  //     56: LZ_TOKEN
  //   },
  //   tokenAddresses: {
  //     56: LZ_TOKEN
  //   },
  //   token2Addresses: {
  //     56: LZ_TOKEN
  //   },
  //   rewardToken: {
  //     address: ITAM_TOKEN,
  //     symbol: 'ITAM'
  //   },
  //   name: 'LZ earn ITAM',
  //   symbol: 'LZ earn ITAM',
  //   symbolShort: 'LZ earn ITAM',
  //   description: `Deposit LZ Earn ITAM`,
  //   tokenSymbol: 'LZ',
  //   token2Symbol: 'LZ',
  //   icon: LOGOS.LZ,
  //   icon2: LOGOS.ITAM,
  //   isHot: true,
  //   isNew: true,
  //   protocal: 'LaunchZone',
  //   iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
  //   pairLink: '/',
  //   addLiquidityLink: ``,
  //   removeLiquidityLink: ``,
  //   rewardLogo: LOGOS.ITAM
  // },
  {
    pid: 2,
    isConvertNft: true,
    stake: true,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V3,
    project: 'LZ',
    lpAddresses: {
      56: HERON_TOKEN
    },
    tokenAddresses: {
      56: HERON_TOKEN
    },
    token2Addresses: {
      56: HERON_TOKEN
    },
    rewardToken: {
      address: LZF_TOKEN,
      symbol: 'LZF'
    },
    name: 'HERON earn FarmTools Level 1',
    symbol: 'HERON earn NFT',
    symbolShort: 'LZP earn NFT',
    description: `Deposit HERON Earn NFT`,
    tokenSymbol: 'HERON',
    token2Symbol: 'HERON',
    icon: LOGOS.HERON,
    icon2: LOGOS.HERON,
    isHot: true,
    isNew: true,
    protocal: 'LaunchZone',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: '',
    removeLiquidityLink: '',
    rewardLogo: LOGOS.FarmTools
  },
  {
    pid: 3,
    isConvertNft: true,
    stake: true,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V3,
    project: 'LZ',
    lpAddresses: {
      56: HERON_TOKEN
    },
    tokenAddresses: {
      56: HERON_TOKEN
    },
    token2Addresses: {
      56: HERON_TOKEN
    },
    rewardToken: {
      address: LZF_TOKEN,
      symbol: 'LZF'
    },
    name: 'HERON earn FarmCage Level 1',
    symbol: 'HERON earn NFT',
    symbolShort: 'HERON earn NFT',
    description: `Deposit HERON Earn NFT`,
    tokenSymbol: 'HERON',
    token2Symbol: 'HERON',
    icon: LOGOS.HERON,
    icon2: LOGOS.HERON,
    isHot: true,
    isNew: true,
    protocal: 'LaunchZone',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: '',
    removeLiquidityLink: '',
    rewardLogo: LOGOS.FarmCage
  },
  {
    pid: 4,
    isConvertNft: true,
    stake: true,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V3,
    project: 'LZ',
    lpAddresses: {
      56: HERON_TOKEN
    },
    tokenAddresses: {
      56: HERON_TOKEN
    },
    token2Addresses: {
      56: HERON_TOKEN
    },
    rewardToken: {
      address: LZF_TOKEN,
      symbol: 'LZF'
    },
    name: 'HERON earn WindMill Level 1',
    symbol: 'HERON earn NFT',
    symbolShort: 'HERON earn NFT',
    description: `Deposit HERON Earn NFT`,
    tokenSymbol: 'HERON',
    token2Symbol: 'HERON',
    icon: LOGOS.HERON,
    icon2: LOGOS.HERON,
    isHot: true,
    isNew: true,
    protocal: 'LaunchZone',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: '',
    removeLiquidityLink: '',
    rewardLogo: LOGOS.WindMill
  },

  {
    pid: 1,
    isConvertNft: true,
    stake: true,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V3,
    project: 'LZ',
    lpAddresses: {
      56: HERON_TOKEN
    },
    tokenAddresses: {
      56: HERON_TOKEN
    },
    token2Addresses: {
      56: HERON_TOKEN
    },
    rewardToken: {
      address: LZT_TOKEN,
      symbol: 'LZT'
    },
    name: 'HERON earn HERON NFT',
    symbol: 'HERON earn NFT',
    symbolShort: 'HERON earn NFT',
    description: `Deposit HERON Earn NFT`,
    tokenSymbol: 'HERON',
    token2Symbol: 'HERON',
    icon: LOGOS.HERON,
    icon2: LOGOS.HERON,
    isHot: true,
    isNew: true,
    protocal: 'LaunchZone',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: '',
    removeLiquidityLink: '',
    rewardLogo: LOGOS.HERON
  },

  {
    pid: 11,
    stake: false,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V2,
    project: 'LZ',
    lpAddresses: {
      56: PAIRS.HERON_BUSD
    },
    tokenAddresses: {
      56: HERON_TOKEN
    },
    token2Addresses: {
      56: BUSD_TOKEN
    },
    rewardToken: {
      address: LZP_TOKEN,
      symbol: 'LZP'
    },
    name: 'HERON - BUSD',
    symbol: 'HERON - BUSD LP',
    symbolShort: 'HERON - BUSD',
    description: `Deposit HERON - BUSD LP Earn LZP`,
    tokenSymbol: 'HERON',
    token2Symbol: 'BUSD',
    icon: LOGOS.HERON,
    icon2: LOGOS.BUSD,
    isHot: true,
    isNew: true,
    protocal: 'LaunchZone',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: `${LINK_LIQUIDITY}/add/${HERON_TOKEN}/${BUSD_TOKEN}`,
    removeLiquidityLink: `${LINK_LIQUIDITY}/remove/${HERON_TOKEN}/${BUSD_TOKEN}`,
    rewardLogo: LOGOS.LZP
  },
  {
    pid: 10,
    stake: false,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V2,
    project: 'LZ',
    lpAddresses: {
      56: PAIRS.HEROEGG_BUSD
    },
    tokenAddresses: {
      56: HEROEGG_TOKEN
    },
    token2Addresses: {
      56: BUSD_TOKEN
    },
    rewardToken: {
      address: LZP_TOKEN,
      symbol: 'LZP'
    },
    name: 'HEROEGG - BUSD',
    symbol: 'HEROEGG - BUSD LP',
    symbolShort: 'HEROEGG - BUSD',
    description: `Deposit HEROEGG - BUSD LP Earn LZP`,
    tokenSymbol: 'HEROEGG',
    token2Symbol: 'BUSD',
    icon: LOGOS.HEROEGG,
    icon2: LOGOS.BUSD,
    isHot: true,
    isNew: true,
    protocal: 'LaunchZone',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: `${LINK_LIQUIDITY}/add/${HEROEGG_TOKEN}/${BUSD_TOKEN}`,
    removeLiquidityLink: `${LINK_LIQUIDITY}/remove/${HEROEGG_TOKEN}/${BUSD_TOKEN}`,
    rewardLogo: LOGOS.LZP
  },
  {
    pid: 2,
    stake: false,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V2,
    project: 'LZ',
    lpAddresses: {
      56: PAIRS.LZ_BUSD
    },
    tokenAddresses: {
      56: LZ_TOKEN
    },
    token2Addresses: {
      56: BUSD_TOKEN
    },
    rewardToken: {
      address: LZP_TOKEN,
      symbol: 'LZP'
    },
    name: 'LZ - BUSD',
    symbol: 'LZ - BUSD LP',
    symbolShort: 'LZ - BUSD',
    description: `Deposit LZ - BUSD LP Earn LZP`,
    tokenSymbol: 'LZ',
    token2Symbol: 'BUSD',
    icon: LOGOS.LZ,
    icon2: LOGOS.BUSD,
    isHot: true,
    isNew: true,
    protocal: 'LaunchZone',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: `${LINK_LIQUIDITY}/add/${LZ_TOKEN}/${BUSD_TOKEN}`,
    removeLiquidityLink: `${LINK_LIQUIDITY}/remove/${LZ_TOKEN}/${BUSD_TOKEN}`,
    rewardLogo: LOGOS.LZP
  },
  {
    pid: 3,
    stake: false,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V2,
    project: 'LZ',
    lpAddresses: {
      56: PAIRS.LZ_USDT
    },
    tokenAddresses: {
      56: LZ_TOKEN
    },
    token2Addresses: {
      56: USDT_TOKEN
    },
    rewardToken: {
      address: LZP_TOKEN,
      symbol: 'LZP'
    },
    name: 'LZ - USDT',
    symbol: 'LZ - USDT LP',
    symbolShort: 'LZ - USDT',
    description: `Deposit LZ - USDT LP Earn LZP`,
    tokenSymbol: 'LZ',
    token2Symbol: 'USDT',
    icon: LOGOS.LZ,
    icon2: LOGOS.USDT,
    isHot: true,
    isNew: true,
    protocal: 'LaunchZone',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: `${LINK_LIQUIDITY}/add/${LZ_TOKEN}/${USDT_TOKEN}`,
    removeLiquidityLink: `${LINK_LIQUIDITY}/remove/${LZ_TOKEN}/${USDT_TOKEN}`,
    rewardLogo: LOGOS.LZP
  },
  {
    pid: 4,
    stake: false,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V4,
    project: 'LZ',
    lpAddresses: {
      56: PAIRS.LZ_USDC
    },
    tokenAddresses: {
      56: LZ_TOKEN
    },
    token2Addresses: {
      56: USDC_TOKEN
    },
    rewardToken: {
      address: LZP_TOKEN,
      symbol: 'LZP'
    },
    name: 'LZ - USDC',
    symbol: 'LZ - USDC LP',
    symbolShort: 'LZ - USDC',
    description: `Deposit LZ - USDC LP Earn LZP`,
    tokenSymbol: 'LZ',
    token2Symbol: 'USDC',
    icon: LOGOS.LZ,
    icon2: LOGOS.USDC,
    isHot: true,
    isNew: true,
    protocal: 'LaunchZone',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: `${LINK_LIQUIDITY}/add/${LZ_TOKEN}/${USDC_TOKEN}`,
    removeLiquidityLink: `${LINK_LIQUIDITY}/remove/${LZ_TOKEN}/${USDC_TOKEN}`,
    rewardLogo: LOGOS.LZP
  },
  {
    pid: 8,
    stake: false,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V2,
    project: 'LZ',
    lpAddresses: {
      56: PAIRS.LZP_BUSD
    },
    tokenAddresses: {
      56: LZP_TOKEN
    },
    token2Addresses: {
      56: BUSD_TOKEN
    },
    rewardToken: {
      address: LZP_TOKEN,
      symbol: 'LZP'
    },
    name: 'LZP - BUSD',
    symbol: 'LZP - BUSD LP',
    symbolShort: 'LZP - BUSD',
    description: `Deposit LZP - BUSD LP Earn LZP`,
    tokenSymbol: 'LZ',
    token2Symbol: 'BUSD',
    icon: LOGOS.LZP,
    icon2: LOGOS.BUSD,
    isHot: true,
    isNew: true,
    protocal: 'LaunchZone',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: `${LINK_LIQUIDITY}/add/${LZP_TOKEN}/${BUSD_TOKEN}`,
    removeLiquidityLink: `${LINK_LIQUIDITY}/remove/${LZP_TOKEN}/${BUSD_TOKEN}`,
    rewardLogo: LOGOS.LZP
  },

  {
    pid: 7,
    stake: true,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V2,
    project: 'LZ',
    lpAddresses: {
      56: LZ_TOKEN
    },
    tokenAddresses: {
      56: LZ_TOKEN
    },
    token2Addresses: {
      56: LZ_TOKEN
    },
    rewardToken: {
      address: LZP_TOKEN,
      symbol: 'LZP'
    },
    name: 'LZ earn LZP',
    symbol: 'LZ earn LZP',
    symbolShort: 'LZ earn LZP',
    description: `Deposit LZ Earn LZP`,
    tokenSymbol: 'LZ',
    token2Symbol: 'LZ',
    icon: LOGOS.LZ,
    icon2: LOGOS.LZP,
    isHot: true,
    isNew: true,
    protocal: 'LaunchZone',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: ``,
    removeLiquidityLink: ``,
    rewardLogo: LOGOS.LZP
  },
  {
    pid: 5,
    stake: true,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V2,
    project: 'LZ',
    lpAddresses: {
      56: LZP_TOKEN
    },
    tokenAddresses: {
      56: LZP_TOKEN
    },
    token2Addresses: {
      56: LZP_TOKEN
    },
    rewardToken: {
      address: LZP_TOKEN,
      symbol: 'LZP'
    },
    name: 'LZP earn LZP',
    symbol: 'LZP earn LZP',
    symbolShort: 'LZP earn LZP',
    description: `Deposit LZP Earn LZP`,
    tokenSymbol: 'LZP',
    token2Symbol: 'LZP',
    icon: LOGOS.LZP,
    icon2: LOGOS.LZP,
    isHot: true,
    isNew: true,
    protocal: 'LaunchZone',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: ``,
    removeLiquidityLink: ``,
    rewardLogo: LOGOS.LZP
  },
  {
    pid: 12,
    stake: true,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V2,
    project: 'LZ',
    lpAddresses: {
      56: HEROEGG_TOKEN
    },
    tokenAddresses: {
      56: HEROEGG_TOKEN
    },
    token2Addresses: {
      56: HEROEGG_TOKEN
    },
    rewardToken: {
      address: LZP_TOKEN,
      symbol: 'LZP'
    },
    name: 'HEROEGG earn LZP',
    symbol: 'HEROEGG earn LZP',
    symbolShort: 'HEROEGG earn LZP',
    description: `Deposit HEROEGG Earn LZP`,
    tokenSymbol: 'HEROEGG',
    token2Symbol: 'HEROEGG',
    icon: LOGOS.HEROEGG,
    icon2: LOGOS.HEROEGG,
    isHot: true,
    isNew: true,
    protocal: 'LaunchZone',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: ``,
    removeLiquidityLink: ``,
    rewardLogo: LOGOS.LZP
  },
  {
    pid: 15,
    stake: false,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V2,
    project: 'LZ',
    lpAddresses: {
      56: PAIRS.ROFI_BUSD
    },
    tokenAddresses: {
      56: ROFI_TOKEN
    },
    token2Addresses: {
      56: BUSD_TOKEN
    },
    rewardToken: {
      address: LZP_TOKEN,
      symbol: 'LZP'
    },
    name: 'ROFI - BUSD',
    symbol: 'ROFI - BUSD LP',
    symbolShort: 'ROFI - BUSD',
    description: `Deposit ROFI - BUSD LP Earn LZP`,
    tokenSymbol: 'ROFI',
    token2Symbol: 'BUSD',
    icon: LOGOS.ROFI,
    icon2: LOGOS.BUSD,
    isHot: true,
    isNew: true,
    protocal: 'LaunchZone',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: ``,
    removeLiquidityLink: ``,
    rewardLogo: LOGOS.LZP
  }
]
.sort((a, b) => (a.isNew ? -1 : 1) - (b.isNew ? -1 : 1) )

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const PROJECTS = {
  LZ: {
    name: 'Launch Zone',
    status: 'active',
    logo: LOGOS.LZ,
    description: "The Ultimate DeFi Platform",
    totalReward: 10000000 * 10 ** 18,
    farmPeriod: 30,
    timeEnded: 1611031410501,
    tokenAddress: LZ_TOKEN
  }
}

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}
