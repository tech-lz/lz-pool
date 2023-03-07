import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'
import { Contract } from 'web3-eth-contract'
import { VERSIONS } from '../sushi/lib/constants'

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

export interface StakedValue {
  tokenAmount: BigNumber
  token2Amount: BigNumber
  totalToken2Value: BigNumber
  tokenPriceInToken2: BigNumber
  poolWeight: BigNumber
  usdValue: BigNumber
  rewardToken: any
  pid: string,
  avaiableReward: BigNumber
  totalPoolSupply: BigNumber
  rewardTokenPrice: BigNumber
}

const useStakedValue = (pid: number, project: string, versionPool: string) => {
  const [balance, setBalance] = useState<StakedValue>()
  const sushi = useSushi()
  const farms = getFarms(sushi)
  const masterChefContract = getMasterChefContract(sushi)
  const block = 0//useBlock()

  const fetchStakedValue = useCallback(async () => {
    const balances: Array<StakedValue> = await Promise.all(
      farms.filter((e: any) => e.pid == pid && e.version == versionPool).map(
        ({
          pid,
          lpContract,
          tokenContract,
          token2Contract,
          rewardToken,
          version,
          rewardTokenContract
        }: {
          pid: number
          lpContract: Contract
          tokenContract: Contract
          token2Contract: Contract
          rewardTokenContract: Contract
          rewardToken: any,
          version: string
        }) => {
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
    // const { data: balances } = await axios.get(`${config.api}/pools/${pid}`)
    setBalance(balances[0])
  }, [block, sushi])

  useEffect(() => {
    if (sushi) {
      fetchStakedValue()
    }
  }, [block, setBalance, sushi])

  return balance
}

export default useStakedValue
