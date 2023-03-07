import { useCallback } from 'react'
import cookie from 'js-cookie'
import useSushi from './useSushi'
import {isAddress} from '../utils'
import { VERSIONS } from '../sushi/lib/constants'

import { stake, getMasterChefContract, getRefBy, setReferral } from '../sushi/utils'

const useStake = (pid: number, version: string, decimals: number, account: string) => {
  const sushi = useSushi()
  
  const masterChefContract = getMasterChefContract(sushi, version)
  let masterChef = masterChefContract

  const handleStake = useCallback(
    async (amount: string) => {
      try {
        let referral = localStorage.getItem('LZ_REFERRAL')

        if (!isAddress(referral)) {
          referral = cookie.get('_ezdnewref') || cookie.get('_ezdref')
        }

        if (!isAddress(referral)) {
          referral = '0x0000000000000000000000000000000000000000'
        }
        
        // const refBy = await getRefBy(sushi, account)
        // if (isAddress(refBy)) {
        //   referral = refBy
        // }

        // let setedRef = false
        // if (!isAddress(referral)) {
        //   referral = '0x0000000000000000000000000000000000000000'
        // } else {
        //   if (!isAddress(refBy)) {
        //     setedRef = await setReferral(sushi, referral, account)
        //   }
        // }

        const txHash = await stake(
          masterChef,
          pid,
          amount,
          account,
          referral,
          decimals
        )
        return txHash
      }
      catch (ex) {
        console.log('xxx: ', ex)
        return ''
      }
    },
    [account, pid, sushi, masterChef],
  )

  return { onStake: handleStake }
}

export default useStake
