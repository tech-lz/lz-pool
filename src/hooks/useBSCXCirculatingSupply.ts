import { useCallback, useEffect, useState } from 'react'
import Web3 from 'web3'
import { provider } from 'web3-core'
import config from '../config'
import useSushi from './useSushi'
import { getBSCXCirculatingSupply } from '../sushi/utils'
import BigNumber from 'bignumber.js'
// import debounce from 'debounce'

var CACHE = {
  time: parseInt(localStorage.getItem('CACHE_useBSCXCirculatingSupply_time') || '0'),
  old: 2 * 60 * 1000,
  value: new BigNumber(localStorage.getItem('CACHE_useBSCXCirculatingSupply_value') || '0')
}

const useBSCXCirculatingSupply = () => {
  const sushi = useSushi()
  const [newReward, setNewRewad] = useState<BigNumber>(CACHE.value)

  useEffect(() => {
    async function fetchData() {
      const v = await getBSCXCirculatingSupply(sushi)
      CACHE.time = new Date().getTime()
      CACHE.value = v;

      localStorage.setItem('CACHE_useBSCXCirculatingSupply_time', CACHE.time.toString())
      localStorage.setItem('CACHE_useBSCXCirculatingSupply_value', CACHE.value.toString())

      setNewRewad(v)
    }
    if (sushi
      && CACHE.time + CACHE.old <= new Date().getTime()) {
      fetchData()
    }
  }, [sushi, setNewRewad])

  return newReward
}

export default useBSCXCirculatingSupply
