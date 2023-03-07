import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import useSushi from './useSushi'
import { provider } from 'web3-core'
import { Contract } from 'web3-eth-contract'
import { VERSIONS } from '../sushi/lib/constants'

import { getAllowance } from '../utils/erc20'
import { getMasterChefContract } from '../sushi/utils'

const useAllowance = (lpContract: Contract, version: string, account: string) => {
  const [allowance, setAllowance] = useState(new BigNumber(0))
  const sushi = useSushi()
  const masterChefContract = getMasterChefContract(sushi, version)

  const fetchAllowance = useCallback(async () => {
    let masterChef = masterChefContract

    const allowance = await getAllowance(
      lpContract,
      masterChef,
      account,
    )
    setAllowance(new BigNumber(allowance))
  }, [account, masterChefContract, lpContract])

  useEffect(() => {
    if (account && masterChefContract && lpContract) {
      fetchAllowance()
    }
    let refreshInterval = setInterval(fetchAllowance, 6000)
    return () => clearInterval(refreshInterval)
  }, [account, masterChefContract, lpContract])

  return allowance
}

export default useAllowance
