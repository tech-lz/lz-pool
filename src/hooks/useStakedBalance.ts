import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { getStaked, getMasterChefContract } from '../sushi/utils'
import useSushi from './useSushi'
import useBlock from './useBlock'
import { VERSIONS } from '../sushi/lib/constants'

const useStakedBalance = (pid: number, version: string, account: string) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const sushi = useSushi()
  const masterChefContract = getMasterChefContract(sushi, version)
  const block = useBlock()

  let masterChef = masterChefContract

  const fetchBalance = useCallback(async () => {
    const balance = await getStaked(masterChef, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, pid, sushi])

  useEffect(() => {
    if (account && sushi) {
      fetchBalance()
    }
  }, [account, pid, setBalance, block, sushi])

  return balance
}

export default useStakedBalance
