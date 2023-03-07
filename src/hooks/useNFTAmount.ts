import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { getAmountNFTConvert, getMasterChefContract } from '../sushi/utils'
import useSushi from './useSushi'
import useBlock from './useBlock'
import { VERSIONS } from '../sushi/lib/constants'

const useNFTAmount = (pid: number, version: string, account: string, isConvertNft: boolean) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const sushi = useSushi()
  const masterChefContract = getMasterChefContract(sushi, version)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    let masterChef = masterChefContract

    const balance = await getAmountNFTConvert(masterChef, pid, account, isConvertNft)
    setBalance(new BigNumber(balance))
  }, [account, masterChefContract, sushi])

  useEffect(() => {
    if (account && masterChefContract && sushi) {
      fetchBalance()
      const interval = setInterval(async () => {
        fetchBalance()
      }, 3000)

      return () => clearInterval(interval)
    }
  }, [account, block, masterChefContract, setBalance, sushi])

  return balance
}

export default useNFTAmount
