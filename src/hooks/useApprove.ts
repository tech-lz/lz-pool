import { useCallback } from 'react'

import useSushi from './useSushi'
import { provider } from 'web3-core'
import { Contract } from 'web3-eth-contract'
import { VERSIONS } from '../sushi/lib/constants'

import { approve, getMasterChefContract } from '../sushi/utils'

const useApprove = (lpContract: Contract, version: string, account: string) => {
  const sushi = useSushi()
  const masterChefContract = getMasterChefContract(sushi, version)

  const handleApprove = useCallback(async () => {
    try {
      let masterChef = masterChefContract

      const tx = await approve(lpContract, masterChef, account)
      return tx
    } catch (e) {
      return false
    }
  }, [account, lpContract, masterChefContract])

  return { onApprove: handleApprove }
}

export default useApprove
