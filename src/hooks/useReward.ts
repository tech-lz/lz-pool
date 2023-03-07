import { useCallback } from 'react'

import useSushi from './useSushi'
import { VERSIONS } from '../sushi/lib/constants'

import { harvest, getMasterChefContract } from '../sushi/utils'

const useReward = (pid: number, version: string, account: string) => {
  const sushi = useSushi()
  const masterChefContract = getMasterChefContract(sushi, version)

  const handleReward = useCallback(async () => {
    try {
      let masterChef = masterChefContract

      const txHash = await harvest(masterChef, pid, account)
      console.log(txHash)
      return txHash
    }
    catch (ex) {
      console.error(ex)
      return ''
    }
  }, [account, pid, sushi, masterChefContract])

  return { onReward: handleReward }
}

export default useReward
