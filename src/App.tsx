import React, { useCallback, useEffect, useState } from 'react'
import { Switch } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { isMobile } from 'react-device-detect'
import { UseWalletProvider } from 'use-wallet'
import DisclaimerModal from './components/DisclaimerModal'
import TopBar from './components/TopBar'
import FarmsProvider from './contexts/Farms'
import ModalsProvider from './contexts/Modals'
import TransactionProvider from './contexts/Transactions'
import SushiProvider from './contexts/SushiProvider'
import useModal from './hooks/useModal'
import theme from './theme'
import Home from './views/Home'
import Referral from './views/Referral'
import config from './config'
import Menu from './components/Menu'
import { ethers } from 'ethers'

interface AppProps {
  theme: string,
  web3: any,
  subPage: string
  setVisibleWalletModal: any
  setVisibleUserWalletModal: any
  xStorageClient?: any
}

const App: React.FC<AppProps> = ({
  theme,
  web3,
  subPage,
  setVisibleWalletModal,
  setVisibleUserWalletModal,
  xStorageClient
}) => {
  const [showMenu, setShowMenu] = useState(true)

  useEffect(() => {
    if (isMobile) setShowMenu(false)
  }, [isMobile])

  useEffect(() => {
    if (xStorageClient) {
      xStorageClient
        .get('LZ_REFERRAL')
        .then((address: string) =>
          address ? ethers.utils.getAddress(address) : undefined
        )
        .then((address: string) => {
          localStorage.setItem('LZ_REFERRAL', address)
        })
        .catch(console.error)
    }
  }, [xStorageClient])

  return (
    <Providers web3={web3}>
      <BodyWrapper className={`pool-interface ${theme}`} showMenu={showMenu}>
        <Home theme={theme}
            web3={web3}
            setVisibleWalletModal={setVisibleWalletModal}
            setVisibleUserWalletModal={setVisibleUserWalletModal}
            subPage={subPage}  />
      </BodyWrapper>
      <Disclaimer />
    </Providers>
  )
}

interface ProvidersProps {
  web3: any
}

const Providers: React.FC<ProvidersProps> = ({ children, web3 }) => {
  const library = web3 && web3.library || {}
  const provider = library.provider || library._web3Provider

  return (
    <ThemeProvider theme={theme}>
      <UseWalletProvider
        chainId={config.chainId}
        connectors={{
          walletconnect: { rpcUrl: config.rpc },
        }}
      >
        <SushiProvider provider={provider}>
          <TransactionProvider>
            <FarmsProvider web3={web3}>
              <ModalsProvider>{children}</ModalsProvider>
            </FarmsProvider>
          </TransactionProvider>
        </SushiProvider>
      </UseWalletProvider>
    </ThemeProvider>
  )
}

const Disclaimer: React.FC = () => {
  const markSeen = useCallback(() => {
    localStorage.setItem('disclaimer', 'seen')
  }, [])

  const [onPresentDisclaimerModal] = useModal(
    <DisclaimerModal onConfirm={markSeen} />,
  )

  useEffect(() => {
    const seenDisclaimer = true // localStorage.getItem('disclaimer')
    if (!seenDisclaimer) {
      onPresentDisclaimerModal()
    }
  }, [])

  return <div />
}

const BodyWrapper = styled.div<{ showMenu: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 1;

  &.pool-interface {
    width: 100%;
    background: var(--layout-background-color);
    color: var(--color-text-default);
    padding-top: 2rem;
    height: 100vh;
    position: relative;
  }
`

export default App
