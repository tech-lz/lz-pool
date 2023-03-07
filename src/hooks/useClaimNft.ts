import { useCallback } from 'react'

import useSushi from './useSushi'
import { VERSIONS } from '../sushi/lib/constants'

import { claimNft, getMasterChefContract } from '../sushi/utils'

const useClaimNft = (pid: number, version: string, account: string) => {
  const sushi = useSushi()
  const masterChefContract = getMasterChefContract(sushi, version)

  const claim = useCallback(async () => {
    try {
      const txHash = await claimNft(masterChefContract, pid, account)
      console.log(txHash)
      return txHash
    }
    catch (ex) {
      console.error(ex)
      return ''
    }
  }, [account, pid, sushi, masterChefContract, claimNft])

  return { onClaimNft: claim }
}

export default useClaimNft
