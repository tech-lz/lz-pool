import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { provider } from 'web3-core'

import { getTotalUserLocked, getMasterChefContract } from '../sushi/utils'
import useSushi from './useSushi'
import useFarms from './useFarms'
import { VERSIONS } from '../sushi/lib/constants'

const useTotalLocked = (account: string) => {
  const [totalLocked, setTotalLocked] = useState({})
  const sushi = useSushi()
  const [farms] = useFarms()

  const fetchTokenLocked = useCallback(async () => {
    const tokenLockeds: any = await Promise.all(
      farms.map(
        ({
          pid,
          version
        }: {
          pid: number,
          version: string
        }) => {
          let masterChef = getMasterChefContract(sushi, version)

          return getTotalUserLocked(masterChef, account, pid)
        }
      )
    )

    let total: any = {}
    tokenLockeds.map((item: any, key: number) => {
      const symbol = farms[key].rewardToken.symbol

      if (total[symbol]) {
        total[symbol] += Number(item)
      } else {
        total[symbol] = 0
        total[symbol] = Number(item)
      }
    })

    setTotalLocked(total)
  }, [account])

  useEffect(() => {
    if (account) {
      fetchTokenLocked()
    }
  }, [setTotalLocked, account])

  return totalLocked
}

export default useTotalLocked
