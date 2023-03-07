import BigNumber from 'bignumber.js'
import React, { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import Countdown, { CountdownRenderProps } from 'react-countdown'
import styled, { keyframes } from 'styled-components'
import { useWallet } from 'use-wallet'
import Button from '../../../components/Button'
import Card from '../../../components/Card'
import CardGray from '../../../components/CardGray'
import CardContent from '../../../components/CardContent'
import CardIcon from '../../../components/CardIcon'
import Loader from '../../../components/Loader'
import Spacer from '../../../components/Spacer'
import Status from '../../../components/Status'
import Value from '../../../components/Value'
import { Farm } from '../../../contexts/Farms'
import useAllStakedValue, { StakedValue } from '../../../hooks/useAllStakedValue'
import useFarms from '../../../hooks/useFarms'
import usePoolActive from '../../../hooks/usePoolActive'
import useRewardBalance from '../../../hooks/useRewardBalance'
import useEarnings from '../../../hooks/useEarnings'
import useNFTAmount from '../../../hooks/useNFTAmount'
import useSushi from '../../../hooks/useSushi'
import useAllowance from '../../../hooks/useAllowance'
import useApprove from '../../../hooks/useApprove'
import useModal from '../../../hooks/useModal'
import useStake from '../../../hooks/useStake'
import useUnstake from '../../../hooks/useUnstake'
import useReward from '../../../hooks/useReward'
import useClaimNft from '../../../hooks/useClaimNft'
import useTokenBalance from '../../../hooks/useTokenBalance'
import useStakedBalance from '../../../hooks/useStakedBalance'
import usePendingNft from '../../../hooks/usePendingNft'
import { NUMBER_BLOCKS_PER_YEAR, START_NEW_POOL_AT, PROJECTS, CONSTANT_APY, VERSIONS } from '../../../sushi/lib/constants'
import { getEarned, getNewRewardPerBlock, getLPTokenStaked } from '../../../sushi/utils'
import { bnToDec } from '../../../utils'
import { getBalanceNumber, getDisplayBalance } from '../../../utils/formatBalance'
import Autosuggest from 'react-autosuggest'
import DepositModal from './DepositModal'
import WithdrawModal from './WithdrawModal'
import { isMobile } from 'react-device-detect'

import CloseIcon from '../../../assets/img/close_icon.svg'
import OpenIcon from '../../../assets/img/open_icon.svg'

interface FarmWithStakedValue extends Farm {
  tokenAmount: BigNumber
  token2Amount: BigNumber
  totalToken2Value: BigNumber
  tokenPriceInToken2: BigNumber
  usdValue: BigNumber
  poolWeight: BigNumber
  rewardTokenPrice: BigNumber
  avaiableReward: BigNumber
}

interface FarmCardsProps {
  theme: string,
  web3: any,
  setVisibleWalletModal: any
  setVisibleUserWalletModal: any
}

const HEDER_HEIGHT = 370

const FarmCards: React.FC<FarmCardsProps> = ({theme, web3, setVisibleWalletModal, setVisibleUserWalletModal }) => {
  const [farms] = useFarms()
  const [farmsValue, setFarmsValue] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const stakedValue = useAllStakedValue()
  const [searchText, setSearchText] = useState('')
  const [farmDisplay, setFarmDisplay] = useState([])

  useEffect(() => {
    const farms_lp = Object.values(farms).filter((farm) => !farm.stake)
    setFarmDisplay(farms)
  }, [farms])

  const rows = farmDisplay.reduce<FarmWithStakedValue[][]>(
    (farmRows, farm, i) => {
      var sv = (stakedValue || []).find(e => {
        return parseInt(e.pid) == farm.pid && e.version == farm.version
      })
      const farmWithStakedValue: FarmWithStakedValue = {
        ...farm,
        tokenAmount: (sv || {}).tokenAmount || new BigNumber(0),
        token2Amount: (sv || {}).token2Amount || new BigNumber(0),
        totalToken2Value: (sv || {}).totalToken2Value || new BigNumber(0),
        tokenPriceInToken2: (sv || {}).tokenPriceInToken2 || new BigNumber(0),
        poolWeight: (sv || {}).poolWeight || new BigNumber(0),
        usdValue: (sv || {}).usdValue || new BigNumber(0),
        rewardTokenPrice: (sv || {}).rewardTokenPrice || new BigNumber(0),
        avaiableReward: (sv || {}).avaiableReward || new BigNumber(0)
      }
      const newFarmRows = [...farmRows]
      // if (newFarmRows[newFarmRows.length - 1].length === 3) {
      //   newFarmRows.push([farmWithStakedValue])
      // } else {
      //   newFarmRows[newFarmRows.length - 1].push(farmWithStakedValue)
      // }
      newFarmRows[newFarmRows.length - 1].push(farmWithStakedValue)
      return newFarmRows
    },
    [[]],
  )

  const renderer = (countdownProps: CountdownRenderProps) => {
    var { days, hours, minutes, seconds } = countdownProps
    const paddedSeconds = seconds < 10 ? `0${seconds}` : seconds
    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes
    // hours = days * 24 + hours
    const paddedHours = hours < 10 ? `0${hours}` : hours
    return (
      <span style={{ width: '100%', marginTop: '10px' }}>
        <NumberClock>{days}</NumberClock> D : <NumberClock>{hours}</NumberClock> H : <NumberClock>{minutes}</NumberClock> M
      </span>
    )
  }

  // Teach Autosuggest how to calculate suggestions for any given input value.
  const getSuggestions = (value: string) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : farms.filter(farm =>
      farm.name.toLowerCase().slice(0, inputLength) === inputValue
    );
  };

  // When suggestion is clicked, Autosuggest needs to populate the input
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
  const getSuggestionValue = (suggestion: any) => suggestion.name;

  // Use your imagination to render suggestions.
  const renderSuggestion = (suggestion: any) => (
    <div className="suggestions-container">
      <span className="suggestions-image">
        <img width="22" src={suggestion.icon} /> <img width="22" src={suggestion.icon2} />
      </span>
      <StyledLink to={`/farms/${suggestion.symbol}`}>
        <span className="suggestions-name"> {suggestion.name} (reward {suggestion.rewardToken.symbol})</span>
      </StyledLink>
    </div>
  );

  const onSuggestionsFetchRequested = (data: any) => {
    setFarmsValue(data.value)
    const sugs = getSuggestions(data.value)
    setSuggestions(sugs)
  }

  const onSuggestionsClearRequested = () => {
    setFarmsValue('')
  }

  const onChange = (event: any, data: any) => {
    setFarmsValue(data.value)
  }

  const inputProps = {
    placeholder: 'Search farm',
    value: farmsValue,
    onChange: onChange
  };

  const handleSearchFarm = (e: any) => {
    const farms_lp = Object.values(farms).filter((farm) => farm.addLiquidityLink !== '')
    if (e.target.value === '') {
      return setFarmDisplay(farms)
    }
    setSearchText(e.target.value)
    let searchResult = farms.filter((farm) => farm.name.toLowerCase().includes(e.target.value.toLowerCase()))
    setFarmDisplay(searchResult)
  }

  const innerHeight = window.innerHeight - HEDER_HEIGHT

  return (
    <FarmPageWrapper>
      <div className="actions-area">
        <div className='search-area'>
          <div className="wrap-search">
            <input
              type={`text`}
              className={`${theme}`}
              placeholder='Search pool'
              onChange={handleSearchFarm}
            />
            <img className="icon-search" src="https://lzp.s3.ap-southeast-1.amazonaws.com/search.png" />
          </div>
        </div>
      </div>
      <CardItem>
        <StyledCards maxHeight={`${innerHeight}px`}>
          {!!rows[0].length && (
            rows.map((farmRow, i) => (
              <StyledRow key={i}>
                {farmRow.map((farm, j) => (
                    <FarmCard theme={theme} web3={web3} setVisibleWalletModal={setVisibleWalletModal} key={j} farm={farm} />
                ))}
              </StyledRow>
            ))
          )}
        </StyledCards>
      </CardItem>
    </FarmPageWrapper>
  )
}

interface FarmCardProps {
  farm: FarmWithStakedValue,
  web3: any,
  setVisibleWalletModal: any,
  theme: string
}

const FarmCard: React.FC<FarmCardProps> = ({ farm, web3, setVisibleWalletModal, theme }) => {
  let poolActive = usePoolActive(farm.pid)
  const sushi = useSushi()
  const [newReward, setNewRewad] = useState<BigNumber>()
  const [isShowDetail, setIsShowDetail] = useState(false)
  const [pendingTx, setPendingTx] = useState(false)
  const [pendingTxNft, setPendingTxNft] = useState(false)
  const [pendingTxClaimNFT, setPendingTxClaimNFT] = useState(false)
  const [pendingEnableFarm, setPendingEnableFarm] = useState(false)
  const [totalStake, setTotalStake] = useState<BigNumber>()

  useEffect(() => {
      async function fetchData() {
          const data = await getLPTokenStaked(sushi, farm.pid, farm.version)
          setTotalStake(data)
      }
      if (sushi) {
          fetchData()
      }
  }, [sushi, setTotalStake])

  useEffect(() => {
    async function fetchData() {
      const supply = await getNewRewardPerBlock(sushi, farm.pid, farm.version, farm.rewardToken.address)
      setNewRewad(supply)
    }
    if (sushi && poolActive) {
      fetchData()
    }
  }, [sushi, setNewRewad, poolActive])

  const renderer = (countdownProps: CountdownRenderProps) => {
    var { days, hours, minutes, seconds } = countdownProps
    const paddedSeconds = seconds < 10 ? `0${seconds}` : seconds
    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes
    // hours = days * 24 + hours
    const paddedHours = hours < 10 ? `0${hours}` : hours
    return (
      <span style={{ width: '100%' }}>
        {days}D:{hours}H:{minutes}M
      </span>
    )
  }

  const startTime = START_NEW_POOL_AT
  let apy:any = newReward && farm.poolWeight && farm.rewardTokenPrice && farm.usdValue ?
    parseFloat(farm.rewardTokenPrice
      .times(NUMBER_BLOCKS_PER_YEAR)
      .times(newReward.div(new BigNumber(10).pow(farm.decimalsReward)))
      // .times(farm.poolWeight)
      .div(farm.usdValue)
      .times(100)
      .toFixed(2)) : 0

  const CardWrap = farm.old ? CardGray : Card
  const oldTile = farm.old ? 'OLD' : ''

  let earnings = useEarnings(farm.pid, farm.version, web3.account, farm.isConvertNft)
  let nftAmountConvert = useNFTAmount(farm.pid, farm.version, web3.account, farm.isConvertNft)
  let earningNFT = earnings.div(nftAmountConvert)

  let amountConvertNft = useNFTAmount(farm.pid, farm.version, web3.account, farm.isConvertNft)
  let earned = getBalanceNumber(earnings, farm.decimalsReward)

  let harvestDisable = earned < 1 && farm.isConvertNft ? 'disable' : ''

  const allowance = useAllowance(farm.lpContract, farm.version, web3.account)
  const { onApprove } = useApprove(farm.lpContract, farm.version, web3.account)
  const handleApprove = useCallback(async () => {
    try {
      const txHash = await onApprove()
    } catch (e) {
      console.log(e)
    }
  }, [onApprove])
  const tokenBalance = useTokenBalance(farm.lpContract.options.address, web3.account, web3.library && web3.library.provider)
  const stakedBalance = useStakedBalance(farm.pid, farm.version, web3.account)
  const pendingNFT = usePendingNft(web3.account, farm.pid)

  const { onStake } = useStake(farm.pid, farm.version, farm.decimals, web3.account)
  const { onUnstake } = useUnstake(farm.pid, farm.version, farm.decimals, web3.account)
  const [onPresentDeposit] = useModal(
    <DepositModal
      theme={theme}
      max={tokenBalance}
      onConfirm={onStake}
      tokenName={farm.lpToken.toUpperCase()}
      decimals={farm.decimals}
    />,
  )

  const [onPresentWithdraw] = useModal(
    <WithdrawModal
      theme={theme}
      max={stakedBalance}
      onConfirm={onUnstake}
      tokenName={farm.lpToken.toUpperCase()}
      decimals={farm.decimals}
    />,
  )

  var shareOfPool = 0

  if (totalStake && stakedBalance) {
    shareOfPool = stakedBalance.div(totalStake).toNumber()
  }
  const stakedVal = getBalanceNumber(stakedBalance, farm.decimals).toFixed(3)

  const { onReward } = useReward(farm.pid, farm.version, web3.account)
  const { onClaimNft } = useClaimNft(farm.pid, farm.version, web3.account)

  const handleHarvest = useCallback(async () => {
    if (harvestDisable) {
      return
    }
    try {
      const txHash = await onReward()
    } catch (error) {
      console.log(error)
    }
  }, [onReward, harvestDisable])

  const handleClaimNFT = useCallback(async () => {
    if (pendingNFT > 0) {
      try {
        const txHash = await onClaimNft()
      } catch (error) {
        console.log(error)
      }
    }
  }, [onClaimNft, pendingNFT])

  var claimButtonStyle = pendingNFT > 0 ? 'btn-nft-default' : 'btn-nft-disable'

  if (isMobile) {
    return (
      <span style={{ width: '100%' }}>
        <FarmDetail className={`mobile ${theme}`}
          onClick={() => setIsShowDetail(!isShowDetail)}
        >
          {!farm.stake && <div className='farm-icon' style={{ display: 'flex', alignItems: 'center' }}>
            <img style={{ height: '32px', borderRadius: '50%' }} src={farm.icon} alt='' />
            <img style={{ height: '19px', borderRadius: '50%', marginLeft: '-10px', background: '#DCDCDC' }} src={farm.icon2} alt='' />
          </div>}
          {farm.stake && <div className='farm-icon' style={{ display: 'flex', alignItems: 'center' }}>
            <img style={{ height: '32px', borderRadius: '50%' }} src={farm.icon} alt='' />
          </div>}
          <div className={`farm-name ${theme}`}>
            {farm.name}
          </div>
          <div className='farm-title farm-earned'>
            <div className='subtitle'>{farm.isConvertNft ? 'Earned NFT' : 'Earned'}</div>
            <div className={`value ${theme}`}><Value value={earned} /> {!farm.isConvertNft && farm.rewardToken.symbol}</div>
          </div>
          <div className='farm-title farm-APR'>
            <div className='subtitle'>APY</div>
            <div className='value'>{apy ? `${apy.toLocaleString('en-US')}%` : '~'}</div>
          </div>
          <div className='farm-detail'>
            <img src={isShowDetail ? 'https://lzp.s3.ap-southeast-1.amazonaws.com/arrow-up.svg' : 'https://lzp.s3.ap-southeast-1.amazonaws.com/arrow-down.svg'} alt='' />
          </div>
        </FarmDetail>
        <MoreDetails className={`mobile ${!isShowDetail ? 'detail-hidden' : 'detail-open'}`}>
          <div className='harvest'>
            <div className='content'>
              <div className='reward-info'>
                <div className="title">Available:&nbsp;</div>
                {!farm.isConvertNft && <div><Value value={earned}/></div>}
                {farm.isConvertNft && <div><Value value={earned}/></div>}
              </div>
              {!farm.isConvertNft && <div className='reward-info'>
                <div className="title">Locked:</div>
                <div><Value value={0} /></div>
              </div>}
              {farm.isConvertNft && <div className='reward-info'>
                <div className="title">Pending NFT: </div>
                <div>&nbsp;&nbsp;&nbsp;<span className="padding-nft">{pendingNFT}</span></div>
              </div>}
            </div>
            {!web3.account && <div className='btn btn-harvest' onClick={setVisibleWalletModal}>Harvest</div>}
            {web3.account && <div><div className={`btn btn-harvest ${harvestDisable}`} onClick={
              async () => {
                setPendingTx(true)
                await handleHarvest()
                setPendingTx(false)
              }
            }>
              <span>{pendingTx ? 'Collecting...' : 'Harvest'}</span>
            </div>
            {farm.isConvertNft && <div className={`${claimButtonStyle}`} onClick={
              async () => {
                setPendingTxClaimNFT(true)
                await handleClaimNFT()
                setPendingTxClaimNFT(false)
              }
            } >
              {pendingTxClaimNFT ? 'Claim...' : 'Claim NFT'}
            </div>}
            </div>}
          </div>
          {!web3.account && <div className='enable-farm'>
            <div className='btn' onClick={setVisibleWalletModal} >{'Enable Farm'}</div>
          </div>}
          {web3.account && <div className='enable-farm'>
            {
              !allowance.toNumber() ?
                <div className='btn' onClick={
                  async () => {
                    setPendingEnableFarm(true)
                    await handleApprove()
                    setPendingEnableFarm(false)
                  }
                } >{pendingEnableFarm ? 'Enable...' : 'Enable Farm'}</div> :
                <div className='stake-unstake'>
                  <div>
                    <div className='token-info'>
                      <div className="title">Tokens Staked:&nbsp; </div>
                    <div>
                      <ValueStyled> {stakedVal}</ValueStyled>
                    </div>
                    </div>
                    <div className='token-info'>
                      <div className="title">Share of Pool:&nbsp; </div>
                      <div>{(shareOfPool * 100).toFixed(5)}%</div>
                    </div>
                  </div>
                  <div className="stake-action">
                    <div className='btn approved btn-stake' onClick={onPresentDeposit}>Stake LP</div>
                    <div className='unstake' onClick={onPresentWithdraw}> - </div>
                  </div>
                </div>
            }
          </div>}
          <div className='more-info'>
            <div className='token-info'>
              <div className='link-area'>
                <div className='item'>
                  <a target="_blank" href={farm.addLiquidityLink}>Get {farm.lpToken}</a>
                </div>
                <div className='item'>
                  <a
                    href={`https://bscscan.com/address/${farm.lpTokenAddress}`}
                    target="_blank"
                  >View contract</a>
                </div>
              </div>
            </div>
            <div className='farm-info'>
              <div className='farm-title farm-liquidity'>
                <div className='subtitle'>TVL</div>
                <div className='value'>
                  {farm.usdValue &&
                    <div>${parseFloat(farm.usdValue.toFixed(0)).toLocaleString('en-US')}</div>
                  }
                </div>
              </div>
              <div className='farm-title farm-mutiplier'>
                <div className='subtitle'>Reward</div>
                {!farm.isConvertNft && <div className='value'>{newReward ? `${getBalanceNumber(newReward, farm.decimalsReward).toFixed(2)} ${farm.rewardToken.symbol} / Block` : '~'}</div>}
                {farm.isConvertNft && <div className='value'>{newReward ? `${getBalanceNumber(newReward, farm.decimalsReward).toFixed(5)} / Block` : '~'}</div>}
              </div>
            </div>
          </div>

        </MoreDetails>
      </span>
    )
  }
  return (
    <span style={{ width: '100%' }}>
    <WrapFarmDetail className={`${theme}`}>
      <span>
      <FarmDetail
        onClick={() => setIsShowDetail(!isShowDetail)}
      >
        {!farm.stake && <div className='farm-icon' style={{ display: 'flex', alignItems: 'center' }}>
          <img style={{ height: '40px', borderRadius: '50%' }} src={farm.icon} alt='' />
          <img style={{ height: '30px', borderRadius: '50%', marginLeft: '-10px', background: '#DCDCDC' }} src={farm.icon2} alt='' />
        </div>}
        {farm.stake && <div className='farm-icon' style={{ display: 'flex', alignItems: 'center' }}>
          <img style={{ height: '32px', borderRadius: '50%' }} src={farm.icon} alt='' />
        </div>}
        <div className={`farm-name ${theme}`}>
          {farm.name}
        </div>
        <div className='farm-title farm-earned farm-earned-desktop'>
          <div>
            <img style={{ height: '23px', borderRadius: '50%', marginRight: '10px' }} src={farm.rewardLogo} alt='' />
          </div>
          <div>
            <div className='subtitle'>{farm.isConvertNft ? 'Earned NFT' : 'Earned'}</div>
            <div className={`value ${theme}`}><Value value={earned} /> {!farm.isConvertNft && farm.rewardToken.symbol}</div>
          </div>
        </div>
        <div className='farm-title farm-APR'>
          <div className='subtitle'>APY</div>
          <div className='value'>{apy ? `${apy.toLocaleString('en-US')}%` : '~'}</div>
        </div>
        <div className='farm-title farm-liquidity'>
          <div className='subtitle'>TVL</div>
          <div className={`value ${theme}`}>
            {farm.usdValue &&
              <span className="tvl-value">${parseFloat(farm.usdValue.toFixed(0)).toLocaleString('en-US')}</span>
            }
          </div>
        </div>
        <div className='farm-title farm-mutiplier'>
          <div className='subtitle'>Reward</div>
          {!farm.isConvertNft && <div className='value-reward'>{newReward ? `${getBalanceNumber(newReward, farm.decimalsReward).toFixed(2)} ${farm.rewardToken.symbol} / Block` : '~'}</div>}
          {farm.isConvertNft && <div className='value-reward'>{newReward ? `${getBalanceNumber(newReward, farm.decimalsReward).toFixed(5)} / Block` : '~'}</div>}

        </div>
        <div className='farm-detail'>
          <div className='text'>Detail</div>
          <img src={isShowDetail ? 'https://lzp.s3.ap-southeast-1.amazonaws.com/arrow-up.svg' : 'https://lzp.s3.ap-southeast-1.amazonaws.com/arrow-down.svg'} alt='' />
        </div>
      </FarmDetail>
      </span>
    </WrapFarmDetail>
    <WrapMoreDetails>
      <span className={`${!isShowDetail ? 'detail-hidden' : 'detail-open'}`} style={{ width: '100%', maxWidth: '1200px' }}>
      <MoreDetails>
        <div className='link-area'>
          <div className='item'>
            <a target="_blank" href={farm.addLiquidityLink}>Get {farm.lpToken}</a>
          </div>
          <div className='item'>
            <a
              href={`https://bscscan.com/address/${farm.lpTokenAddress}`}
              target="_blank"
            >View contract</a>
          </div>
        </div>
        <div className='harvest'>
          <div className='content'>
            <div className='reward-info'>
              <div className="title">Available:&nbsp;</div>
              {!farm.isConvertNft && <div><Value value={earned}/></div>}
              {farm.isConvertNft && <div><Value value={earned}/></div>}
            </div>
            {!farm.isConvertNft && <div className='reward-info'>
              <div className="title">Locked:</div>
              <div><Value value={0} /></div>
            </div>}
            {farm.isConvertNft && <div className='reward-info'>
              <div className="title">Pending NFT: </div>
              <div>&nbsp;&nbsp;&nbsp;<span>{pendingNFT}</span></div>
            </div>}
          </div>
          {!web3.account && <div className='btn' onClick={setVisibleWalletModal}>Harvest</div>}
          {web3.account && <div>
            <div className={`btn ${harvestDisable}`} onClick={
              async () => {
                setPendingTx(true)
                await handleHarvest()
                setPendingTx(false)
              }
            }>
              <span>{pendingTx ? 'Collecting...' : 'Harvest'}</span>
            </div>
            {farm.isConvertNft && <div className={`${claimButtonStyle}`} onClick={
              async () => {
                setPendingTxClaimNFT(true)
                await handleClaimNFT()
                setPendingTxClaimNFT(false)
              }
            } >
              {pendingTxClaimNFT ? 'Claim...' : 'Claim NFT'}
            </div>}
          </div>}
        </div>
        <div></div>
        {!web3.account && <div className='enable-farm'>
          <div className='btn' onClick={setVisibleWalletModal} >{'Enable Farm'}</div>
        </div>}
        {web3.account && <div className='enable-farm'>
          {
            !allowance.toNumber() ?
              <div className='btn' onClick={
                async () => {
                  try {
                    setPendingEnableFarm(true)
                    await handleApprove()
                    setPendingEnableFarm(false)
                  } catch(e) {
                    console.log(e)
                  }
                }
              } >{pendingEnableFarm ? 'Enable...' : 'Enable Farm'}</div> :
              <div className='stake-unstake'>
                <div>
                  <div className='token-info'>
                    <div className="title">Tokens Staked:&nbsp; </div>
                    <div>
                      <ValueStyled> {stakedVal}</ValueStyled>
                    </div>
                  </div>
                  <div className='token-info'>
                    <div className="title">Share of Pool:&nbsp; </div>
                    <div>{(shareOfPool * 100).toFixed(5)}%</div>
                  </div>
                </div>
                <div className="stake-action">
                  <div className='btn approved' onClick={onPresentDeposit}>Stake LP</div>
                  <div className='unstake' onClick={onPresentWithdraw}> - </div>
                </div>
              </div>
          }
        </div>}
      </MoreDetails>
      </span>
    </WrapMoreDetails>
    </span>
  )
}

const MoreDetails = styled.div`
  padding: 15px 20px;
  width: 100%;
  z-index: 1;
  display: grid;
  grid-template-columns: 25% 30% 3% 35%;

  .btn-nft-default {
    margin-top: 10px;
    border: 1px solid #96CF24;
    padding: 3px 12px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px !important;
    color: #96CF24;
    font-family: UniviaPro-Light;
  }

  .btn-nft-disable {
    margin-top: 10px;
    border: 1px solid rgb(205 212 190);
    padding: 3px 12px;
    border-radius: 5px;
    cursor: not-allowed;
    font-size: 14px !important;
    color: #9CA3AF;
    font-family: UniviaPro-Light;
  }

  .link-area {
    display: grid;
    .item {
      display: flex;
      align-items: center;
      a {
        font-size: 14px;
        font-weight: 500;
        line-height: 23px;
        background: linear-gradient(to right, #5AA62B 0%, #96CF24 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        cursor: pointer;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    @media (max-width: 767px) {
      .item {
        margin-bottom: 10px;
        a {
          font-size: 12px;
          line-height: 14px;
        }
      }
    }
  }
  .enable-farm {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    border: 1px solid rgba(128,128,128,0.4);
    border-radius: 15px;
    justify-content: center;

    .stake-action {
      display: flex;
      align-items: center;
    }

    .btn {
      background: linear-gradient(270deg, #96CF24 10.53%, #5AA62B 100%);
      border-radius: 5px;
      color: #FFFFFF;
      font-size: 14px;
      font-weight: 500;
      line-height: 30px;
      width: 180px;
      text-align: center;
      padding: 0 40px;
      cursor: pointer;
      height: 32px;
      max-width: 200px;

      &.approved {
        width: 90px;
        padding: 0 10px;
      }
    }    
    .unstake {
      border-radius: 5px;
      color: #96CF24;
      font-size: 28px;
      line-height: 27px;
      padding: 0 10px;
      cursor: pointer;
      font-weight: 600 !important;
      border: 1px solid #96CF24;
      margin-left: 5px;
      height: 32px;
    }
    .stake-unstake {
      display: flex;
      justify-content: space-between;
      width: 100%;

      .token-info {
        display: flex;
        .title {
          font-size: 14px !important;
          font-weight: 300;
          color: #9CA3AF;
          min-width: 100px;
          font-weight: 600;
        }
      }
    }
  }
  .harvest {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    border: 1px solid rgba(128, 128, 128, 0.4);
    border-radius: 15px;
    .padding-nft {
      font-size: 16px;
    }
    .content {
      .label {
        color: #535353;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        span {
          color: #50E3C2;
        }
      }
      .value {
        color: #535353;
        font-size: 18px;
        font-weight: 500;
      }
      .reward-info {
        font-size: 14px;
        display: flex;
        .title {
          font-size: 14px !important;
          color: #9CA3AF;
          min-width: 70px;
          font-weight: 600;
        }
      }
    }
    .btn {
      background: linear-gradient(270deg, #96CF24 10.53%, #5AA62B 100%);
      border-radius: 5px;
      color: #FFFFFF;
      font-size: 14px;
      font-weight: 500;
      line-height: 30px;
      text-align: center;
      padding: 0 10px;
      cursor: pointer;
      height: 32px;
    }

    .disable {
      cursor: not-allowed;
      background: #9CA3AF;
    }
  }
  @media (max-width: 768px) {
    padding: 0px 0px;
    &.detail-hidden {
      max-height: 0px;
      overflow: hidden;
      transition: max-height 0.15s ease-out;
    }

    &.detail-open {
      padding: 15px 20px;
      max-height: 292px;
      transition: max-height 0.25s ease-in;
    }
  }
  &.mobile {
    grid-template-columns: none;
    .harvest {
      margin-bottom: 10px;
      .btn-harvest {
        width: 90px;
        height: 32px;
      }

      .disable {
        cursor: not-allowed;
        background: #9CA3AF;
      }
    }
    .enable-farm {
      .btn, .stake-unstake {
        width: 100%;
        .btn {
          margin-bottom: 0;
        }
      }
      .btn-stake {
        width: 90px;
        height: 32px;
        margin-left: 10px;
      }
    }
    .more-info {
      margin-top: 10px;
      display: grid;
      grid-template-columns: 50% 50%;
      .farm-info {
        .farm-title {
          text-align: right;
          color: #535353;
          .subtitle {
            font-size: 12px;
            line-height: 23px;
            color: #9CA3AF;
          }
          .value {
            font-size: 14px;
            font-weight: 500;
            @media (max-width: 767px) {
              font-size: 12px;
              line-height: 14px;
            }
          }
        }
      }
    }
  }
`

const FarmDetail = styled.div`
  padding: 10px 10px;
  z-index: 1;
  display: grid;
  column-gap: 8px;
  grid-template-columns: 68px 200px 226px 180px 200px 215px 65px;
  cursor: pointer;
  &.mobile {
    border-bottom: 1px solid rgba(128, 128, 128, 0.2);
    grid-template-columns: 12% 30% 32% 15% 0%;
    padding: 10px 20px;
  }
  &.light {
    background: #ffffff;
  }
  &.dark {
    background: #1B1D1C;
  }
  .farm-name {
    display: flex;
    align-items: center;
    font-size: 16px;
    line-height: 19px;
    font-weight: 500;
    @media (max-width: 767px) {
      font-size: 14px;
      line-height: 16px;
    }

    &.light {
      color: #535353;
    }
    &.dark {
      color: #ffffff;
    }
  }
  .farm-title {
    .tvl-value {
      font-size: 16px;
      font-weight: 600;
    }
    .subtitle {
      color: #9CA3AF;
      font-size: 14px;
      line-height: 12px;
      font-weight: 400;
      margin-bottom: 10px;

      @media (max-width: 767px) {
        font-size: 12px;
        line-height: 14px;
      }
    }
    .light {
      color: #535353;
    }
    .dark {
      color: #ffffff;
    }
    .value {
      font-size: 16px;
      line-height: 17px;
      @media (max-width: 767px) {
        font-size: 14px;
        line-height: 14px;
        font-weight: 600;

        span {
          font-size: 14px;
          font-weight: 600;
        }
      }
    }
    &.farm-earned{
      .value {
        @media (max-width: 767px) {
          font-weight: 600;
        }
        &.light {
          color: #535353;
        }
        &.dark {
          color: #FFFFFF;
        }
      }
    }
    &.farm-earned-desktop {
      display: flex;
      align-items: center;
    }
    &.farm-APR {
      .value {
        background: linear-gradient(to right,#5AA62B 0%,#96CF24 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        @media (max-width: 767px) {

          span {

          }
        }
      }
    }
  }
  .farm-detail {
    display: flex;
    align-items: center;
    cursor: pointer;
    .text {
      font-size: 14px;
      font-weight: 500;
      line-height: 14px;
      padding-right: 8px;
      background: linear-gradient(to right,#5AA62B 0%,#96CF24 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .value-reward {
    font-weight: 600;
    font-size: 16px;
  }
`

const RainbowLight = keyframes`

	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

interface StyledCardsProps {
  maxHeight: string
}
const StyledCards = styled.div<StyledCardsProps>`
  width: 100%;

  @media (max-width: 768px) {
    width: 100vw;
    margin: 0 auto;
    max-height: 100%;
  }
`

const NumberClock = styled.span`
  background: #40444F;
  border-radius: 10px;
  padding: 5px 10px;
`

const WrapFarmDetail = styled.span`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgba(128, 128, 128, 0.2);

  &.light {
    background: #ffffff;
  }

  &.dark {
    background: #1B1D1C;
  }
`

const WrapMoreDetails = styled.span`
  width: 100%;
  display: flex;
  justify-content: center;

  .detail-hidden {
    max-height: 0px;
    overflow: hidden;
    transition: max-height 0.15s ease-out;
  }

  .detail-open {
    max-height: 120px;
    transition: max-height 0.25s ease-in;
  }
`

const CardHeader = styled.div`
  margin-bottom: 6px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 30px;

  @media (max-width: 768px) {
    display: block;
    padding: 0px;
  }
`

const CardHeaderLeft = styled.div`

`

const CardTextShow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  color: #CECDBA;
  font-weight: 500;
  padding: 5px 0px;
`

const CardHeaderRight = styled.div`
  min-width: 300px;
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`

const CardCountDown = styled.div`
  text-align: center;
  color: #CECDBA;
  font-size: 14px;
  margin-top: 10px;
`

const CardStatus = styled.div`
  border: 1px solid #2FF37D;
  box-sizing: border-box;
  border-radius: 10px;
  color: #2FF37D;
  width: 100px;
  text-align: center;
  text-transform: capitalize;
`

const CardItem = styled.div`
  margin-top: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const ProjectName = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color: #CECDBA;
`

const StyledLoadingWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
`

const StyledRow = styled.div`
  display: flex;
  // margin-bottom: ${(props) => props.theme.spacing[4]}px;
  flex-flow: row wrap;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`

const StyledTitle = styled.h4`
  color: ${(props) => props.theme.color.white};
  font-size: 20px;
  font-weight: 700;
  margin: ${(props) => props.theme.spacing[2]}px 0 0;
  padding: 0;
`

const ValueStyled = styled.span`
  font-size: 1.6rem;
`
const FarmPageWrapper = styled.div`
  .actions-area {
    padding: 0 100px;
    display: flex;
    width: 100%;
    justify-content: center;

    .search-area {
      justify-content: flex-end;
      width: 100%;
      max-width: 1200px;
      display: flex;

      .wrap-search {
        position: relative;
        .icon-search {
          position: absolute;
          right: 5px;
          top: 3px;
        }
      }

      .label {
        margin-left: 20px;
        color: #535353;
        font-size: 14px;
        font-weight: 500;
      }
      .light {
        background: #FFFFFF;
      }
      .dark {
        background: #2A2C32;
      }
      input {
        border-radius: 15px;
        color: #9CA3AF;
        font-size: 14px;
        font-weight: 500;
        padding: 5px 10px;
        width: 280px;
        border: none;
        font-weight: 600;
        &:focus {
          outline: none;
        }
      }
    }
  }
`

export default FarmCards
