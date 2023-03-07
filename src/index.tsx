import React, { useEffect } from 'react'
import App from './App'
import './index.css'

export default ({
  theme,
  useWeb3React,
  useSubPage,
  setVisibleWalletModal,
  setVisibleUserWalletModal,
  xStorageClient
}: {
  theme: string
  useWeb3React: any
  useSubPage: any
  setVisibleWalletModal: any
  setVisibleUserWalletModal: any
  xStorageClient: any
}) => {
  const { account } = useWeb3React()
  const web3 = useWeb3React()
  const subPage = useSubPage()

  return (
    <App
      theme={theme}
      web3={web3}
      setVisibleWalletModal={setVisibleWalletModal}
      setVisibleUserWalletModal={setVisibleUserWalletModal}
      subPage={subPage} 
      xStorageClient={xStorageClient}
    />
  )
}
