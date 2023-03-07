import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { Contract } from 'web3-eth-contract'

import {
  getMasterChefContract,
  getFarms,
  getLPValue,
} from '../sushi/utils'
import useSushi from './useSushi'
import useBlock from './useBlock'
import axios from 'axios'
import config from '../config'
import usePrice from './usePrice'
import { VERSIONS } from '../sushi/lib/constants'

export interface StakedValue {
  tokenAmount: BigNumber
  token2Amount: BigNumber
  totalToken2Value: BigNumber
  tokenPriceInToken2: BigNumber
  poolWeight: BigNumber
  usdValue: BigNumber
  rewardToken: any
  pid: string
  rewardTokenPrice: BigNumber,
  version: string,
  avaiableReward: BigNumber
}

var CACHE : {time: any, old: any, value: any} = {
  time: 0,
  old: 0,
  value: []
}


const useAllStakedValue = () => {
  const [balances, setBalance] = useState(CACHE.value as Array<StakedValue>)
  const sushi = useSushi()
  const farms = getFarms(sushi)
  const masterChefContract = getMasterChefContract(sushi)
  const block = 0//useBlock()

  const fetchAllStakedValue = useCallback(async () => {
    const balances: Array<StakedValue> = await Promise.all(
      farms.map(
        ({
          pid,
          lpContract,
          tokenContract,
          token2Contract,
          project,
          rewardToken,
          version,
          rewardTokenContract
        }: {
          pid: number
          lpContract: Contract
          tokenContract: Contract
          token2Contract: Contract,
          rewardTokenContract: Contract,
          project: string
          rewardToken: any,
          version: string
        }) => {
          let tokenPrice:BigNumber

          let masterChef = getMasterChefContract(sushi, version)

          return getLPValue(
            masterChef,
            lpContract,
            tokenContract,
            token2Contract,
            pid,
            rewardToken.address,
            version,
            rewardTokenContract
          )
        }
      ),
    )
    setBalance(balances)
  }, [sushi])

  useEffect(() => {
    if (sushi) {
      fetchAllStakedValue()
    }
  }, [block, setBalance, sushi])

  return balances
}

export default useAllStakedValue
