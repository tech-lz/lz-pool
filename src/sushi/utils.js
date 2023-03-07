import BigNumber from 'bignumber.js'
import { ethers } from 'ethers'
import axios from 'axios'
import config from '../config'
import { supportedPools,
  START_NEW_POOL_AT,
  BSCX_TOKEN,
  LZ_TOKEN,
  LZP_TOKEN,
  HEROEGG_TOKEN,
  HERON_TOKEN,
  ROFI_TOKEN,
  ROFI2_TOKEN,
  LZT_TOKEN,
  ITAM_TOKEN,
  VERSIONS
} from './lib/constants'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const MaxUint256 = '999999999900000000000000000000000000000'

const GAS_LIMIT = {
  STAKING: {
    DEFAULT: 200000,
    SNX: 850000,
  },
}

export const getLPValue = async (
  masterChefContract,
  lpContract,
  tokenContract,
  token2Contract,
  pid,
  rewardToken,
  version,
  rewardTokenContract
) => {
  // Get balance of the token address
  let cacheValue = localStorage.getItem('CACHE_usePrice_value')
  cacheValue = cacheValue || {}
  let prices = JSON.parse(cacheValue)

  let tokenAmountWholeLP = await tokenContract.methods
    .balanceOf(lpContract.options.address)
    .call()

  const tokenDecimals = await tokenContract.methods.decimals().call()
  // Get the share of lpContract that masterChefContract owns
  const balance = await lpContract.methods
    .balanceOf(masterChefContract.options.address)
    .call()
  // Convert that into the portion of total lpContract = p1
  const totalSupply = await lpContract.methods.totalSupply().call()
  let avaiableReward = 0
  let totalLockedReward = await masterChefContract.methods.totalLock(rewardToken).call()
  let totalPoolSupply = await masterChefContract.methods.getLpPoolBalance(pid).call()

  const rewardBalance = await rewardTokenContract.methods
  .balanceOf(masterChefContract.options.address)
  .call()

  if (rewardToken.toLowerCase() === tokenContract._address.toLowerCase()) {
    avaiableReward = Number(rewardBalance) - Number(totalPoolSupply) - Number(totalLockedReward)
  } else {
    avaiableReward = Number(rewardBalance) - Number(totalLockedReward)
    // tokenAmountWholeLP = totalPoolSupply
  }

  avaiableReward = new BigNumber(avaiableReward)
  totalLockedReward = new BigNumber(totalLockedReward)
  totalPoolSupply = new BigNumber(totalPoolSupply)

  // Get total token2 value for the lpContract = w1
  const lpContractToken2 = await token2Contract.methods
    .balanceOf(lpContract.options.address)
    .call()

  const token2Decimals = await token2Contract.methods.decimals().call()
  // Return p1 * w1 * 2
  const portionLp = new BigNumber(totalPoolSupply).div(new BigNumber(totalSupply))
  const totalLpToken2Value = portionLp.times(lpContractToken2).times(new BigNumber(2))

  // Calculate
  const tokenAmount = new BigNumber(tokenAmountWholeLP)
    .times(portionLp)
    .div(new BigNumber(10).pow(tokenDecimals))
  const token2Amount = new BigNumber(lpContractToken2)
    .times(portionLp)
    .div(new BigNumber(10).pow(token2Decimals))

   const tokenAmountTotal = new BigNumber(tokenAmountWholeLP)
    .times(portionLp)
    .div(new BigNumber(10).pow(tokenDecimals))
  const token2AmountTotal = new BigNumber(lpContractToken2)
    .times(portionLp)
    .div(new BigNumber(10).pow(token2Decimals))

  let tokenPrice = 0
  if (tokenContract._address.toLowerCase() === BSCX_TOKEN.toLowerCase()) {
    tokenPrice = prices.bscx
  } else if (tokenContract._address.toLowerCase() === LZ_TOKEN.toLowerCase()) {
    tokenPrice = prices.lz
  } else if (tokenContract._address.toLowerCase() === HEROEGG_TOKEN.toLowerCase()) {
    tokenPrice = prices.heroegg
  } else if (tokenContract._address.toLowerCase() === HERON_TOKEN.toLowerCase()) {
    tokenPrice = prices.heron
  } else if (tokenContract._address.toLowerCase() === ROFI_TOKEN.toLowerCase()) {
    tokenPrice = prices.rofi
  } else if (tokenContract._address.toLowerCase() === ROFI2_TOKEN.toLowerCase()) {
    tokenPrice = prices.rofi
  } else if (tokenContract._address.toLowerCase() === LZP_TOKEN.toLowerCase()) {
    tokenPrice = prices.lzp
  }
  // console.log('tokenPrice: ', tokenPrice)

  let rewardPrice = 0
  if (rewardToken.toLowerCase() === LZP_TOKEN.toLowerCase()) {
    rewardPrice = prices.lzp
  } else if (rewardToken.toLowerCase() === LZT_TOKEN.toLowerCase()) {
    rewardPrice = 160
  } else if (rewardToken.toLowerCase() === ITAM_TOKEN.toLowerCase()) {
    rewardPrice = prices.itam
  }

  tokenPrice = new BigNumber(tokenPrice)
  let rewardTokenPrice = new BigNumber(rewardPrice)
  var tokenPriceInToken2 = tokenPrice

  var totalToken2Value = totalLpToken2Value.div(new BigNumber(10).pow(token2Decimals))
  var usdValue = tokenAmountTotal.times(tokenPrice).times(2)
  if (token2Contract._address.toLowerCase() === tokenContract._address.toLowerCase()) {
    let amountToken = totalPoolSupply.div(new BigNumber(10).pow(tokenDecimals))
    usdValue = amountToken.times(tokenPrice)
  }

  return {
    pid,
    avaiableReward,
    totalPoolSupply,
    tokenAmount,
    token2Amount,
    totalToken2Value,
    tokenPriceInToken2,
    usdValue,
    poolWeight: await getPoolWeight(masterChefContract, pid),
    tokenAmountTotal,
    token2AmountTotal,
    rewardTokenPrice: rewardTokenPrice,
    version: version
  }
}

export const getPrices = async () => {
  var { data } = await axios.get(`${config.api}/block/price`)

  return data
}

export const getTVL = async () => {
  var { data } = await axios.get(`${config.api}/block/total-value-lock`)

  return data
}

export const getReferral = async (account) => {
  var { data } = await axios.get(`${config.api}/user/referral/${account}`)

  return data.data
}

export const saveCountry = async (account) => {
  var { data } = await axios.get(`${config.api}/detail/${account}`)

  return data.data
}

export async function UnknownBlock(address, method, params, cache) {
  var { data } = await axios.post(`${config.api}/read/${address}`, {
      method,
      params,
      cache
  })

  return data.data
}

export const getMasterChefAddress = (sushi) => {
  return sushi && sushi.masterChefAddress
}
export const getSushiAddress = (sushi) => {
  return sushi && sushi.sushiAddress
}

export const getXBSCXAddress = (sushi) => {
  return sushi && sushi.xSushiAddress
}

export const getMasterChefContract = (sushi, version) => {
  var chef = sushi && sushi.contracts && sushi.contracts.masterChef
  if (version === VERSIONS.V2) {
    chef = sushi && sushi.contracts && sushi.contracts.masterChefV2
  } else if (version === VERSIONS.V3) {
    chef = sushi && sushi.contracts && sushi.contracts.masterChefV3
  } else if (version === VERSIONS.V4) {
    chef = sushi && sushi.contracts && sushi.contracts.masterChefV4
  }

  return chef
}
export const getMasterChefContractV2 = (sushi) => {
  return sushi && sushi.contracts && sushi.contracts.masterChefV2
}
export const getMasterChefContractV3 = (sushi) => {
  return sushi && sushi.contracts && sushi.contracts.masterChefV3
}
export const getMasterChefContractV4 = (sushi) => {
  return sushi && sushi.contracts && sushi.contracts.masterChefV4
}
export const getLaunchPoolV1Contract = (sushi) => {
  return sushi && sushi.contracts && sushi.contracts.launchPoolXV1
}
export const getLaunchPoolZDContract = (sushi) => {
  return sushi && sushi.contracts && sushi.contracts.launchPoolZD
}
export const getReferralContract = (sushi) => {
  return sushi && sushi.contracts && sushi.contracts.referralContract
}
export const getLaunchPoolTOOLSContract = (sushi) => {
  return sushi && sushi.contracts && sushi.contracts.launchPoolXTOOLS
}
export const getLaunchPoolXPOContract = (sushi) => {
  return sushi && sushi.contracts && sushi.contracts.launchPoolXXPO
}
export const getSushiContract = (sushi) => {
  return sushi && sushi.contracts && sushi.contracts.sushi
}
export const getXSushiStakingContract = (sushi) => {
  return sushi && sushi.contracts && sushi.contracts.xSushiStaking
}
export const getMakerContract = (sushi) => {
  return sushi && sushi.contracts && sushi.contracts.maker
}
export const getMakerAddress = (sushi) => {
  return sushi && sushi.makerAddress
}

export const getFarms = (sushi) => {
  return sushi
    ? sushi.contracts.pools.map(
        ({
          pid,
          project,
          name,
          symbol,
          icon,
          icon2,
          description,
          tokenAddress,
          tokenSymbol,
          token2Symbol,
          token2Address,
          symbolShort,
          tokenContract,
          token2Contract,
          isHot,
          isNew,
          lpAddress,
          lpContract,
          protocal,
          iconProtocal,
          pairLink,
          addLiquidityLink,
          removeLiquidityLink,
          rewardToken,
          version,
          old,
          stake,
          isConvertNft,
          decimals,
          decimalsReward,
          rewardTokenContract,
          rewardLogo
        }) => ({
          pid,
          project,
          id: symbol,
          name,
          lpToken: symbol,
          lpTokenAddress: lpAddress,
          lpContract,
          tokenAddress,
          token2Address,
          tokenSymbol,
          token2Symbol,
          token2Contract,
          symbol,
          symbolShort,
          isHot,
          isNew,
          tokenContract,
          earnToken: 'bscx',
          earnTokenAddress: sushi.contracts.sushi.options.address,
          icon,
          icon2,
          description,
          protocal,
          iconProtocal,
          pairLink,
          addLiquidityLink,
          removeLiquidityLink,
          rewardToken,
          version,
          old,
          stake,
          isConvertNft,
          decimals,
          decimalsReward,
          rewardTokenContract,
          rewardLogo
        }),
      )
    : []
}

export const getPoolWeight = async (masterChefContract, pid) => {
  const { allocPoint, rewardToken } = await masterChefContract.methods.poolInfo(pid).call()
  const totalAllocPoint = await masterChefContract.methods
    .totalAllocPoints(rewardToken)
    .call()
  return new BigNumber(allocPoint).div(new BigNumber(totalAllocPoint))
}

export const getEarned = async (masterChefContract, pid, account, isConvertNft) => {
  try {
    const reward = await masterChefContract.methods.pendingReward(pid, account).call()

    var realReward = reward;
    if (isConvertNft) {
      // const collection = await masterChefContract.methods.collections(pid).call()
      // const convertNftAmount = await masterChefContract.methods.convertNftAmounts(collection).call()

      const userNftInfo = await masterChefContract.methods.userNftInfo(pid, account).call()
      realReward = Number(realReward) + Number(userNftInfo.rewardDebt);
      // realReward = realReward / convertNftAmount;
    }

    return realReward
  } catch(e) {
    return 0
  }
}

export const getAmountNFTConvert = async (masterChefContract, pid, account, isConvertNft) => {
  try {
    var amount = 0;
    if (isConvertNft) {
      const collection = await masterChefContract.methods.collections(pid).call()
      amount = await masterChefContract.methods.convertNftAmounts(collection).call()
    }

    return amount
  } catch(e) {
    return 0
  }
}

export const getPercentLockReward  = async (masterChefContract, pid) => {
  const poolInfo = await masterChefContract.methods.poolInfo(pid).call()

  return poolInfo.percentLockReward
}

export const getTotalLocked = async (masterChefContract, rewardToken) => {
  return masterChefContract.methods.totalLocks(rewardToken).call()
}

export const getTotalUserLocked = async (masterChefContract, account, pid) => {
  return masterChefContract.methods.lockOf(account, pid).call()
}

export const getTotalUserLockedV1 = async (masterChefV1Contract, account) => {
  return masterChefV1Contract.methods.lockOf(account).call()
}

export const getLPValuePrice = async (
  lpContract,
  tokenContract,
  token2Contract
) => {
  const tokenAmountWholeLP = await tokenContract.methods
    .balanceOf(lpContract.options.address)
    .call()
  const tokenDecimals = await tokenContract.methods.decimals().call()
  const lpContractToken2 = await token2Contract.methods
    .balanceOf(lpContract.options.address)
    .call()
  const token2Decimals = await token2Contract.methods.decimals().call()

  const tokenAmountTotal = new BigNumber(tokenAmountWholeLP)
    .div(new BigNumber(10).pow(tokenDecimals))

  const token2AmountTotal = new BigNumber(lpContractToken2)
    .div(new BigNumber(10).pow(token2Decimals))

  return {
    price: token2AmountTotal.div(tokenAmountTotal)
  }
}


export const getLPTokenStaked = async (
  sushi,
  pid,
  version
) => {
  var chef = getMasterChefContract(sushi, version)

  try {
    // const balance = await lpContract.methods
    //   .balanceOf(chef.options.address)
    //   .call()
    const balance = await chef.methods.getLpPoolBalance(pid).call()
    return new BigNumber(balance)
  } catch (e) {
    console.log(e)
    return
  }
}

export const getPendingNFT = async (
  sushi,
  account,
  pid
) => {
  var chef = getMasterChefContract(sushi, 'V3')

  try {
    const userNftInfo = await chef.methods.userNftInfo(pid, account).call()
    const collection = await chef.methods.collections(pid).call()
    const convertNftAmount = await chef.methods.convertNftAmounts(collection).call()

    return Math.floor(userNftInfo.rewardTokenNftAmount / convertNftAmount)
  } catch (e) {
    console.log(e)
    return 0
  }
}

export const approve = async (lpContract, masterChefContract, account) => {
  return lpContract.methods
    .approve(masterChefContract.options.address, MaxUint256)
    .send({ from: account })
}

export const approveAddress = async (lpContract, address, account) => {
  return lpContract.methods
      .approve(address, MaxUint256)
      .send({ from: account })
}

export const getSushiSupply = async (sushi) => {
  return new BigNumber(
    await UnknownBlock(sushi.contracts.sushi._address, 'totalSupply():(uint256)', [], true)
  )
}

export const getAmountLPStakeBSCX = async (sushi, account) => {
  try {
    const lpStakeBSCX = sushi.contracts.lpStakeBSCX
    return await lpStakeBSCX.methods.balanceOf(account).call()
  } catch(e) {console.log(e)}
}

export const getLZBalance = async (sushi, account) => {
  try {
    const contract = sushi.contracts.sushi
    return await contract.methods.balanceOf(account).call()
  } catch(e) {console.log(e)}
}

export const getRewardTokenBalance = async (sushi, project, version) => {
  let contract = sushi.contracts.zseedContract

  if (project === 'ZD') {
    contract = sushi.contracts.zdContract
  } else if (project === 'TOOLS') {
    contract = sushi.contracts.toolsContract
  } else if (project === 'ZDCASH') {
    contract = sushi.contracts.zdcashContract
  } else if (project === 'XPO') {
    contract = sushi.contracts.xpoContract
  } else if (project === 'TWIN') {
    contract = sushi.contracts.twinContract
  }

  let masterChefAddress = getMasterChefContract(sushi, version)

  let balance = await contract.methods.balanceOf(masterChefAddress._address).call()
  let balanceLocked = await masterChefAddress.methods.totalLocks(contract._address).call()
  balance = Number(balance) - Number(balanceLocked)
  balance = balance > 0 ? balance : 0

  return balance
}

export const getBSCXCirculatingSupply = async (sushi) => {
  var chef = getMasterChefContract(sushi)
  var a = new BigNumber(
    await UnknownBlock(sushi.contracts.sushi._address, 'circulatingSupply():(uint256)', [], true)
  )

  var b = new BigNumber(
    await UnknownBlock(sushi.contracts.sushi._address, 'balanceOf(address):(uint256)', [chef._address], true)
  )
  return a.minus(b)
}

export const checkPoolActive = async (pid) => {
  var p = supportedPools.find(e => e.pid === pid)
  if (p) {
    if (p.startAt >= new Date().getTime() / 1000) {
      return false
    }
    else if (!p.startAt) {
      return true
    }
    else {
      if (localStorage.getItem('POOLACTIVE' + pid + '-' + p.startAt)) {
        return true
      }
      else {
        var { data } = await axios.get(`${config.api}/poolActive/${pid}`)
        if (data.active) {
          localStorage.setItem('POOLACTIVE' + pid + '-' + p.startAt, true)
        }
        return data.active
      }
    }
  }
  else {
    return false
  }

}

export const getNewRewardPerBlock = async (sushi, pid1 = 0, version, rewardToken) => {
  var chef = getMasterChefContract(sushi, version)

  try {
    const reward = await chef.methods.tokenRewardPerBlock(rewardToken).call()
    const totalAllocPoints = await chef.methods.totalAllocPoints(rewardToken).call()
    const poolInfo = await chef.methods.poolInfo(pid1).call()
    const realReward = (poolInfo.allocPoint / totalAllocPoints) * reward
    // let realReward = reward * ((100 - poolInfo.percentForDev) / 100)
    // realReward = realReward * 0.9
    return new BigNumber(realReward)
  } catch (e) {
    return
  }

  // if (pid1 === 0) {
  //   var chef = getMasterChefContract(sushi)
  //   return new BigNumber(
  //     await UnknownBlock(chef._address, 'getNewRewardPerBlock(uint256):(uint256)', [pid1], true)
  //   )
  // }
  // else {
  //   if (await checkPoolActive(pid1 - 1)) {
  //     var chef = getMasterChefContract(sushi)
  //     return new BigNumber(
  //       await UnknownBlock(chef._address, 'getNewRewardPerBlock(uint256):(uint256)', [pid1], true)
  //     )
  //   }
  //   else {
  //     return new BigNumber("0")
  //   }
  // }
}

export const stake = async (masterChefContract, pid, amount, account, referral, decimals) => {
  return masterChefContract.methods
    .deposit(
      pid,
      new BigNumber(amount).times(new BigNumber(10).pow(decimals)).toString(),
      referral,
    )
    .send({ from: account })
    .on('transactionHash', (tx) => {
      console.log(tx)
      return tx.transactionHash
    })
}

export const emergencyWithdraw = async (masterChefContract, pid, account) => {
  return masterChefContract.methods
    .emergencyWithdraw(
      pid
    )
    .send({ from: account })
    .on('transactionHash', (tx) => {
      console.log(tx)
      return tx.transactionHash
    })
}

export const setReferral = async (sushi, referral, account) => {
  var referralContract = getReferralContract(sushi)

  try {
    return referralContract.methods
      .setReferral(
        referral
      )
      .send({ from: account })
      .on('transactionHash', (tx) => {
        return tx.transactionHash
      })
  } catch (e) {
    console.log(e)
  }
}

export const unstake = async (masterChefContract, pid, amount, account, decimals) => {
  return masterChefContract.methods
    .withdraw(
      pid,
      new BigNumber(amount).times(new BigNumber(10).pow(decimals)).toString(),
    )
    .send({ from: account })
    .on('transactionHash', (tx) => {
      console.log(tx)
      return tx.transactionHash
    })
}
export const harvest = async (masterChefContract, pid, account) => {
  return masterChefContract.methods
    .claimReward(pid)
    .send({ from: account })
    .on('transactionHash', (tx) => {
      console.log(tx)
      return tx.transactionHash
    })
}

export const claimNft = async (masterChefContract, pid, account) => {
  var isLzFarm = pid == 1 ? false : true;

  return masterChefContract.methods
    .claimNFT(pid, isLzFarm)
    .send({ from: account })
    .on('transactionHash', (tx) => {
      console.log(tx)
      return tx.transactionHash
    })
}

export const getStaked = async (masterChefContract, pid, account) => {
  try {
    const { amount } = await masterChefContract.methods
      .userInfo(pid, account)
      .call()
    return new BigNumber(amount)
  } catch {
    return new BigNumber(0)
  }
}

export const getRefBy = async (sushi, account) => {
  var referralContract = getReferralContract(sushi)
  const refBy = await referralContract.methods
      .referrers(account)
      .call()

  if (refBy === '0x0000000000000000000000000000000000000000') {
    return false
  }

  return refBy
}

export const redeem = async (masterChefContract, account) => {
  let now = new Date().getTime() / 1000
  if (now >= 1597172400) {
    return masterChefContract.methods
      .exit()
      .send({ from: account })
      .on('transactionHash', (tx) => {
        console.log(tx)
        return tx.transactionHash
      })
  } else {
    alert('pool not active')
  }
}

export const getCanUnlockBSCX = async (contractBSCX, account) => {
  return new BigNumber(await contractBSCX.methods.canUnlockAmount(account).call())
}

export const getCanUnlockToken = async (contract, account, pid) => {
  return new BigNumber(await contract.methods.canUnlockAmount(account, pid).call())
}

export const getXSushiSupply = async (sushi) => {
  return new BigNumber(await sushi.contracts.xSushiStaking.methods.totalSupply().call())
}

export const getLockOf = async (sushi, account) => {
  var bscx = getSushiContract(sushi)

  return new BigNumber(await bscx.methods.lockOf(account).call())
}

export const getReferralAmountLv1 = async (sushi, account, rewardToken) => {
  var chef = getMasterChefContract(sushi)
  return new BigNumber(await chef.methods.referralAmountLv1(rewardToken, account).call())
}

export const getReferralAmountLv2 = async (sushi, account, rewardToken) => {
  var chef = getMasterChefContract(sushi)
  return new BigNumber(await chef.methods.referralAmountLv2(rewardToken, account).call())
}

export const unlock = async (contract, account) => {
  return contract.methods
    .unlock()
    .send({ from: account })
    .on('transactionHash', (tx) => {
      console.log(tx)
      return tx.transactionHash
    })
}
export const unlockZD = async (contract, account, pid) => {
  return contract.methods
    .unlock(pid)
    .send({ from: account })
    .on('transactionHash', (tx) => {
      console.log(tx)
      return tx.transactionHash
    })
}
export const enter = async (contract, amount, account) => {
  return contract.methods
      .enter(
          new BigNumber(amount).times(new BigNumber(10).pow(18)).toString(),
      )
      .send({ from: account })
      .on('transactionHash', (tx) => {
        console.log(tx)
        return tx.transactionHash
      })
}

export const makerConvert = async (contract, token0, token1, account) => {
  return contract.methods
      .convert(
        token0,
        token1,
      )
      .send({ from: account })
      .on('transactionHash', (tx) => {
        console.log(tx)
        return tx.transactionHash
      })
}

export const leave = async (contract, amount, account) => {
  return contract.methods
      .leave(
          new BigNumber(amount).times(new BigNumber(10).pow(18)).toString(),
      )
      .send({ from: account })
      .on('transactionHash', (tx) => {
        console.log(tx)
        return tx.transactionHash
      })
}
