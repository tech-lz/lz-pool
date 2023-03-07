import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Page from '../../components/Page'
import LockedRewards from './components/LockedRewards'
import LockedRewardsModal from './components/LockedRewardsModal'
import 'react-toastify/dist/ReactToastify.css'
import { isMobile } from 'react-device-detect'
import usePrice from '../../hooks/usePrice'
import useStakeBSCX from '../../hooks/useStakeBSCX'
import useLZBalance from '../../hooks/useLZBalance'
import useTokenLocked from '../../hooks/useTokenLocked'
import useTotalLocked from '../../hooks/useTotalLocked'
import Loader from '../../components/Loader'
import { getBalanceNumber } from '../../utils/formatBalance'
import useModal from '../../hooks/useModal'
import BigNumber from 'bignumber.js'
import {isAddress} from '../../utils'
import useSaveCountry from '../../hooks/useSaveCountry'

import FarmCards from './components/FarmCards'

declare global {
  interface Window {
    ethereum: any,
    location: Location
  }
}

interface HomeProps {
  theme: string,
  web3: any,
  subPage: string,
  setVisibleWalletModal: any
  setVisibleUserWalletModal: any
}

const Home: React.FC<HomeProps> = ({theme, web3, subPage, setVisibleWalletModal, setVisibleUserWalletModal}) => {
  const [isBusy, setBusy] = useState(true)
  let dataPrices = usePrice('LZ')

  function checkData() {
    let cacheValue = localStorage.getItem('CACHE_usePrice_value')
    let prices = JSON.parse(cacheValue) || {}
    if (prices.lz && isBusy) {
      setBusy(false)
    }
  }
  useEffect(() => {
    setInterval(async () => {
      checkData()
    }, 1000)
  })

  const [isShowLockedToken, seIsShowLockedToken] = useState(false)
  const [balanceDetails, setBalanceDetails] = useState(localStorage.getItem('POOL_BALANCE_DETAILS') ? true : false)
  const stakeLPBalance = useStakeBSCX(web3 && web3.account)
  const lzBalance = useLZBalance(web3 && web3.account)
  const totalUserLocked = useTokenLocked(web3 && web3.account)
  const totalRewardLocked = useTotalLocked(web3 && web3.account)
  const country = useSaveCountry(web3 && web3.account)

  const toggleBalanceDetail = (value: any) => {
    setBalanceDetails(value)
    localStorage.setItem('POOL_BALANCE_DETAILS', value)
  }

  const [onPresentShowLockedRewards] = useModal(
    <LockedRewardsModal
      web3={web3}
      theme={theme}
    />,
  )

  if (web3.chainId !== 56 && web3.active) {
    return (
      <Page>
        <Box className="mt-4">
          <div className="warning-text">Please connect to Binance Smart Chain network.</div>
          <div className="box-bottom">
            {web3.account && <div className="wrap-box-bottom">
              <div className="address" onClick={setVisibleUserWalletModal}>
                <img src="https://lzp.s3.ap-southeast-1.amazonaws.com/logo.png" />&nbsp;&nbsp; {web3.account && <span>{web3.account.substr(0, 6)}...{web3.account.substr(web3.account.length - 4, web3.account.length)}</span>}
              </div>
            </div>}
          </div>
        </Box>
      </Page>)
  }

  const eyesOpen = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.99967 3.33301C4.62428 3.33301 2.64398 5.77443 1.80651 7.12551C1.57922 7.49221 1.46557 7.67556 1.47696 7.98045C1.48836 8.28533 1.61988 8.46586 1.88292 8.82691C2.8596 10.1675 5.07266 12.6663 7.99967 12.6663C10.9267 12.6663 13.1397 10.1675 14.1164 8.82691C14.3795 8.46586 14.511 8.28533 14.5224 7.98045C14.5338 7.67556 14.4201 7.49221 14.1928 7.12551C13.3554 5.77443 11.3751 3.33301 7.99967 3.33301Z" stroke="url(#paint0_linear)" strokeWidth="2"/>
      <circle cx="7.99967" cy="7.99967" r="2.66667" fill="url(#paint1_linear)"/>
      <defs>
      <linearGradient id="paint0_linear" x1="13.2628" y1="12.6663" x2="1.33301" y2="12.6663" gradientUnits="userSpaceOnUse">
      <stop stopColor="#96CF24"/>
      <stop offset="1" stopColor="#5AA62B"/>
      </linearGradient>
      <linearGradient id="paint1_linear" x1="10.1049" y1="10.6663" x2="5.33301" y2="10.6663" gradientUnits="userSpaceOnUse">
      <stop stopColor="#96CF24"/>
      <stop offset="1" stopColor="#5AA62B"/>
      </linearGradient>
      </defs>
      </svg>

  const eyesClose = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M10.6635 7.87554C10.6005 6.50162 9.49782 5.39894 8.1239 5.33594L10.6635 7.87554ZM5.53213 6.98681C5.40378 7.29912 5.33301 7.64118 5.33301 7.99976C5.33301 9.47252 6.52692 10.6664 7.99967 10.6664C8.35826 10.6664 8.70031 10.5957 9.01263 10.4673L5.53213 6.98681Z" fill="url(#paint0_linear)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M10.804 12.2585L9.29426 10.7488C8.86628 10.9095 8.43253 11 8.00012 11C7.16684 11 6.32853 10.6638 5.53623 10.1374C4.74828 9.61388 4.07153 8.94552 3.58252 8.39062C3.48037 8.2747 3.40578 8.1899 3.34432 8.11527C3.30156 8.06334 3.27365 8.02645 3.25519 8C3.27365 7.97355 3.30156 7.93666 3.34432 7.88473C3.40578 7.8101 3.48037 7.7253 3.58252 7.60938C3.93136 7.21353 4.37574 6.75995 4.88787 6.34241L3.46766 4.9222C2.91257 5.39138 2.44386 5.87648 2.08203 6.28706C2.05896 6.31324 2.03497 6.34012 2.01029 6.36776C1.68385 6.7335 1.23828 7.23271 1.23828 8C1.23828 8.76729 1.68385 9.2665 2.01029 9.63224L2.01039 9.63235C2.03503 9.65995 2.05899 9.6868 2.08203 9.71294C2.63741 10.3432 3.4446 11.1489 4.42947 11.8032C5.41 12.4547 6.63341 13 8.00012 13C9.03039 13 9.97922 12.6901 10.804 12.2585ZM6.12314 3.33503C6.70747 3.1284 7.33693 3 8.00012 3C9.36684 3 10.5903 3.54532 11.5708 4.19676C12.5557 4.85109 13.3628 5.65685 13.9182 6.28706C13.9413 6.31324 13.9653 6.34012 13.99 6.36776C14.3164 6.7335 14.762 7.23271 14.762 8C14.762 8.76729 14.3164 9.2665 13.99 9.63224L13.9899 9.63225C13.9653 9.65989 13.9413 9.68677 13.9182 9.71294C13.7197 9.93825 13.4889 10.186 13.2294 10.4413L11.8151 9.02698C12.0382 8.80815 12.2403 8.59192 12.4177 8.39062C12.5199 8.2747 12.5945 8.1899 12.6559 8.11527C12.6987 8.06334 12.7266 8.02645 12.7451 8C12.7266 7.97355 12.6987 7.93666 12.6559 7.88473C12.5945 7.8101 12.5199 7.7253 12.4177 7.60938C11.9287 7.05448 11.252 6.38612 10.464 5.86262C9.67172 5.33623 8.83341 5 8.00012 5C7.93172 5 7.86327 5.00227 7.79482 5.00672L6.12314 3.33503Z" fill="url(#paint1_linear)"/>
      <path d="M3.33301 1.33301L13.9997 11.9997" stroke="url(#paint2_linear)" strokeWidth="2"/>
      <defs>
      <linearGradient id="paint0_linear" x1="10.1024" y1="10.6664" x2="5.33301" y2="10.6664" gradientUnits="userSpaceOnUse">
      <stop stopColor="#96CF24"/>
      <stop offset="1" stopColor="#5AA62B"/>
      </linearGradient>
      <linearGradient id="paint1_linear" x1="13.3384" y1="13" x2="1.23828" y2="13" gradientUnits="userSpaceOnUse">
      <stop stopColor="#96CF24"/>
      <stop offset="1" stopColor="#5AA62B"/>
      </linearGradient>
      <linearGradient id="paint2_linear" x1="12.8769" y1="11.9997" x2="3.33301" y2="11.9997" gradientUnits="userSpaceOnUse">
      <stop stopColor="#96CF24"/>
      <stop offset="1" stopColor="#5AA62B"/>
      </linearGradient>
      </defs>
      </svg>


  return (
    <Page>
      <PageTitle>
        <div>
          <div className='title'>Pools</div>
          <div className='subtitle'>Just stake some tokens to earn.<br /> High APR, low risk</div>
        </div>
        <div className="">
          <CardWrap>
            <div className="card-top">
              <div className="title-card">LZ/BUSD LP Balance
                { !balanceDetails && <div onClick={() => toggleBalanceDetail(true)} className="eye-button">{eyesOpen}</div> }
                { balanceDetails && <div onClick={() => toggleBalanceDetail(false)} className="eye-button">{eyesClose}</div> }
              </div>
              {!balanceDetails && <div className="balance">{parseFloat(getBalanceNumber(stakeLPBalance).toFixed(4)).toLocaleString('en-US')}</div>}
              {balanceDetails && <div className="balance-close">******</div>}
              <div className={`total-locked ${theme}`}>Total Locked: {!balanceDetails ? '0 LZ' : '***'}</div>
            </div>
            <div className="card-bottom" onClick={onPresentShowLockedRewards}>
              <div className="address">
                {web3.account && <span>{web3.account.substr(0, 6)}...{web3.account.substr(web3.account.length - 4, web3.account.length)}</span>}
              </div>
              <div className="balance">
                {!balanceDetails ? parseFloat(getBalanceNumber(lzBalance).toFixed(4)).toLocaleString('en-US') : '***'} &nbsp;<img src="https://lzp.s3.ap-southeast-1.amazonaws.com/lz-logo.png" />
              </div>
            </div>
          </CardWrap>
        </div>
      </PageTitle>
      <Box className="mt-4">
        {!isBusy ? <FarmCards
            theme={theme}
            web3={web3}
            setVisibleWalletModal={setVisibleWalletModal}
            setVisibleUserWalletModal={setVisibleUserWalletModal} /> :
            <StyledLoadingWrapper>
              <Loader text="Loading ..." />
            </StyledLoadingWrapper>
        }
        <div className="box-bottom">
          {isShowLockedToken && <LockedRewards web3={web3} />}
          {web3.account && <div className="wrap-box-bottom">
            <div className="address" onClick={setVisibleUserWalletModal}>
              <img src="https://lzp.s3.ap-southeast-1.amazonaws.com/logo.png" />&nbsp;&nbsp; {web3.account && <span>{web3.account.substr(0, 6)}...{web3.account.substr(web3.account.length - 4, web3.account.length)}</span>}
            </div>
            <div className="menu" onClick={() => seIsShowLockedToken(!isShowLockedToken)}>
              {isShowLockedToken && <img src="https://lzp.s3.ap-southeast-1.amazonaws.com/menu-close.png" />}
              {!isShowLockedToken && <img src="https://lzp.s3.ap-southeast-1.amazonaws.com/menu.png" />}
            </div>
          </div>}
          {!web3.active && <div className="wrap-box-bottom">
            <div className="lz-button-container forced-dark" onClick={setVisibleWalletModal}>
              <div className="lz-button-text footer__connect-wallet-button">
                Connect Wallet
              </div>
            </div>
          </div>}
        </div>
      </Box>
    </Page>
  )
}

const CardWrap = styled.div`
  background: radial-gradient(100% 299.2% at 3.59% 3.24%, rgba(255, 255, 255, 0.49) 0%, rgba(255, 255, 255, 0.07) 100%);
  box-sizing: border-box;
  backdrop-filter: blur(28.7878px);
  border-radius: 20px;
  min-width: 380px;
  margin-top: 50px;

  @media (max-width: 768px) {
    min-width: 220px;
    margin-top: 20px;
  }

  .card-top {
    padding: 10px 20px;
    @media (max-width: 768px) {
      padding: 10px;
    }

    .title-card {
      font-size: 12px;
      line-height: 16px;
      display: flex;

      .eye-button {
          margin-left: 8px;
          cursor: pointer;
      }
    }

    .balance {
      font-style: italic;
      font-size: 36px;
      line-height: 43px;
    }

    .balance-close {
      font-size: 36px;
      line-height: 43px;
    }

    .total-locked {
      font-weight: 600;
      font-size: 14px;
      line-height: 25px;
    }
    .light {
      color: #535353;
    }
    .dark {
      color: #ffffff;
    }
  }
  .card-bottom {
    padding: 30px 20px;
    @media (max-width: 768px) {
      padding: 20px 10px;
    }
    border-radius: 0px 0px 20px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #FFFFFF;
    cursor: pointer;
    position: relative;
    height: 50px;

    .address {
      text-shadow: 0px 2px 2.39899px rgba(0, 0, 0, 0.25);
      position: absolute;
      z-index: 1;

      span {
        font-size: 14px;
      }
    }
    .balance {
      background: linear-gradient(270deg, #96CF24 10.53%, #5AA62B 100%);
      border-radius: 5px;
      padding: 3px 6px;
      display: flex;
      align-items: center;
      color: #FFFFFF;
      position: absolute;
      z-index: 1;
      right: 20px;
      font-size: 14px;
    }

  }
  .card-bottom::after {
    content: "";
    opacity: 0.6;
    background: linear-gradient(270deg,#96CF24 10.53%,#5AA62B 100%);
    max-width: 100%;
    position: absolute;
    z-index: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border-radius: 0px 0px 20px 20px;
  }
`

const PageTitle = styled.div`
  width: 1350px;
  max-width: 1350px;
  text-align: left;
  color: #96CF24;
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 0 100px;
  margin-top: 16px;

  .title {
    @media (max-width: 768px) {
      display: none;
    }
    font-size: 36px;
    font-weight: 900;
    line-height: 40px;
    background: linear-gradient(to right, #5AA62B 0%, #96CF24 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .subtitle {
    font-size: 36px;
    font-weight: 300;
    line-height: 40px;
    margin-top: 38px;
    background: linear-gradient(to right, #5AA62B 0%, #96CF24 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 768px) {
      font-size: 22px;
      line-height: 30px;
    }
  }
  @media (max-width: 768px) {
    width: 100vw;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
const Box = styled.div`
  width: 100%;
  z-index: 2;
  &.mt-4 {
      margin-top: 40px;
      @media (max-width: 767px) {
          margin-top: 38px;
          margin-bottom: 25px;
      }
  }
  .box-bottom {
    display: none;
  }
  .warning-text {
    color: #ff7570;
  }
  @media (max-width: 767px) {
    .box-bottom {
      display: block;
      width: 100%;
      background: #1B1D1C;
      position: fixed;
      bottom: 0;
      left: 0;
      .wrap-box-bottom {
        display: flex;
        justify-content: space-between;
        padding: 15px 25px;

        .address {
          display: flex;
          align-items: center;
          span {
            color: #9CA3AF;
          }
        }
        .menu {
          cursor: pointer;
        }

        .lz-button-container {
            border-radius: 5px;
            justify-content: center;
            display: flex;
            cursor: pointer;
            position: relative;
            border: 1px solid rgb(150, 207, 36);
        }
        .lz-button-container:before {
            content: "";
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            padding: 1px;
            border-radius: 5px;
            -webkit-mask: linear-gradient(270deg,#96cf24 10.53%,#5aa62b) content-box,linear-gradient(270deg,#96cf24 10.53%,#5aa62b);
            -webkit-mask-composite: destination-out;
            mask-composite: exclude;
        }
        .footer__connect-wallet-button {
            padding: 5px 15px;
            font-size: 14px;
        }
        .lz-button-text {
            padding: 5px 15px;
            font-size: 14px;
            background: linear-gradient(90deg,#5aa62b 0,#96cf24);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .lz-button-container:hover {
            background-image: linear-gradient(270deg,#96cf24 10.53%,#5aa62b),linear-gradient(90deg,#5aa62b 0,#96cf24);
        }
        .lz-button-container:hover .lz-button-text {
            background: #fff;
            -webkit-background-clip: text;
            background-clip: text;
        }
      }
    }
  }
`

const StyledLoadingWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
`

export default Home
