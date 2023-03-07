import React, { createContext, useEffect, useState } from 'react'
import config from '../../config'

import { Sushi } from '../../sushi'

export interface SushiContext {
  sushi?: typeof Sushi
}

export const Context = createContext<SushiContext>({
  sushi: undefined,
})

declare global {
  interface Window {
    sushisauce: any
  }
}

interface SushiProps {
  provider: any
}

const SushiProvider: React.FC<SushiProps> = ({ children, provider }) => {
  const [sushi, setSushi] = useState<any>()

  // @ts-ignore
  window.sushi = sushi
  // @ts-ignore
  window.eth = provider

  useEffect(() => {
    if (provider) {
      const chainId = Number(provider.chainId)
      const sushiLib = new Sushi(provider, chainId, false, {
        defaultAccount: provider.selectedAddress,
        defaultConfirmations: 1,
        autoGasMultiplier: 1.5,
        testing: false,
        defaultGas: '6000000',
        defaultGasPrice: '1000000000000',
        accounts: [],
        ethereumNodeTimeout: 10000,
      })
      setSushi(sushiLib)
      window.sushisauce = sushiLib
    }
    else {
      const chainId = config.chainId
      const sushiLib = new Sushi(config.rpc, chainId, false, {
        defaultAccount: '0x0000000000000000000000000000000000000000',
        defaultConfirmations: 1,
        autoGasMultiplier: 1.5,
        testing: false,
        defaultGas: '6000000',
        defaultGasPrice: '1000000000000',
        accounts: [],
        ethereumNodeTimeout: 10000,
      })
      setSushi(sushiLib)
      window.sushisauce = sushiLib
    }
  }, [provider])

  return <Context.Provider value={{ sushi }}>{children}</Context.Provider>
}

export default SushiProvider
