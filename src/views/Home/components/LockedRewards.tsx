import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import React, { useCallback, useMemo, useState } from 'react'
import useTokenLocked from '../../../hooks/useTokenLocked'
import useTokenLockedWithPID from '../../../hooks/useTokenLockedWithPID'
import useTotalLocked from '../../../hooks/useTotalLocked'
import useCanUnlockAmount from '../../../hooks/useCanUnlockAmount'
import useCanUnlockZD from '../../../hooks/useCanUnlockZD'
import useUnlock from '../../../hooks/useUnlock'
import useUnlockZD from '../../../hooks/useUnlockZD'
import { getBalanceNumber } from '../../../utils/formatBalance'

interface LockedRewadsProps {
    web3: any
}

const LockedRewards: React.FC<LockedRewadsProps> = ({web3}) => {
  const totalUserLocked = useTokenLocked(web3 && web3.account)
  const totalRewardLocked = useTotalLocked(web3 && web3.account)
  const canUnlockAmount = useCanUnlockAmount(web3 && web3.account)
  const lockedPool0 = useTokenLockedWithPID(web3 && web3.account, 0, 'TOOLS')
  const lockedPool1 = useTokenLockedWithPID(web3 && web3.account, 1, 'TOOLS')

  const lockedPoolXPO28 = useTokenLockedWithPID(web3 && web3.account, 28, 'XPO')
  const lockedPoolXPO29 = useTokenLockedWithPID(web3 && web3.account, 29, 'XPO')
  const lockedPoolXPO30 = useTokenLockedWithPID(web3 && web3.account, 30, 'XPO')
  const lockedPoolXPO31 = useTokenLockedWithPID(web3 && web3.account, 31, 'XPO')

  const lockedPoolXPO0 = useTokenLockedWithPID(web3 && web3.account, 0, 'XPO')
  const lockedPoolXPO1 = useTokenLockedWithPID(web3 && web3.account, 1, 'XPO')

  const lockedZDPool0 = useTokenLockedWithPID(web3 && web3.account, 0, '')
  const lockedZDPool1 = useTokenLockedWithPID(web3 && web3.account, 1,  '')
  const lockedZDPool2 = useTokenLockedWithPID(web3 && web3.account, 2,  '')
  const lockedZDPool3 = useTokenLockedWithPID(web3 && web3.account, 3,  '')
  const lockedZDPool4 = useTokenLockedWithPID(web3 && web3.account, 4,  '')
  const lockedZDPool5 = useTokenLockedWithPID(web3 && web3.account, 5,  '')
  const lockedZDPool6 = useTokenLockedWithPID(web3 && web3.account, 6,  '')
  const lockedZDPool7 = useTokenLockedWithPID(web3 && web3.account, 7,  '')
  const lockedZDPool8 = useTokenLockedWithPID(web3 && web3.account, 8,  '')
  const lockedZDPool9 = useTokenLockedWithPID(web3 && web3.account, 9,  '')
  
  const unlockAmount0 = useCanUnlockZD(web3 && web3.account, 0, 'TOOLS')
  const unlockAmount1 = useCanUnlockZD(web3 && web3.account, 1, 'TOOLS')

  const unlockAmountXPO28 = useCanUnlockZD(web3 && web3.account, 28, 'XPO')
  const unlockAmountXPO29 = useCanUnlockZD(web3 && web3.account, 29, 'XPO')
  const unlockAmountXPO30 = useCanUnlockZD(web3 && web3.account, 30, 'XPO')
  const unlockAmountXPO31 = useCanUnlockZD(web3 && web3.account, 31, 'XPO')

  const unlockAmountXPO0 = useCanUnlockZD(web3 && web3.account, 0, 'XPO')
  const unlockAmountXPO1 = useCanUnlockZD(web3 && web3.account, 1, 'XPO')

  const unlockAmountZD0 = useCanUnlockZD(web3 && web3.account, 0, '')
  const unlockAmountZD1 = useCanUnlockZD(web3 && web3.account, 1, '')
  const unlockAmountZD2 = useCanUnlockZD(web3 && web3.account, 2, '')
  const unlockAmountZD3 = useCanUnlockZD(web3 && web3.account, 3, '')
  const unlockAmountZD4 = useCanUnlockZD(web3 && web3.account, 4, '')
  const unlockAmountZD5 = useCanUnlockZD(web3 && web3.account, 5, '')
  const unlockAmountZD6 = useCanUnlockZD(web3 && web3.account, 6, '')
  const unlockAmountZD7 = useCanUnlockZD(web3 && web3.account, 7, '')
  const unlockAmountZD8 = useCanUnlockZD(web3 && web3.account, 8, '')
  const unlockAmountZD9 = useCanUnlockZD(web3 && web3.account, 9, '')

  let cacheValue = localStorage.getItem('CACHE_usePrice_value')
  let prices = JSON.parse(cacheValue)

  const getAmountInUSD = (amount: any, project: string) => {
    let price = 0
    switch (project) {
      case "LZ":
          price = prices.lz
          break;
      case "BSCX":
          price = prices.bscx
          break;
    }

    let usdAmount = amount.times(price)

    return usdAmount
  }

  let totalAmountInUsd = new BigNumber(0)
  let amountInUsdBSCX = getAmountInUSD(totalUserLocked, 'BSCX')
  totalAmountInUsd = totalAmountInUsd.plus(amountInUsdBSCX)
  const [pendingTx, setPendingTx] = useState(false)

  const { onUnlock } = useUnlock(web3 && web3.account)
  const { onUnlockZD } = useUnlockZD(web3 && web3.account)
  const handleUnlock = useCallback(async () => {
    try {
      const txHash = await onUnlock()
    } catch (e) {
      console.log(e)
    }
  }, [onUnlock])

  const handleUnlockZD = useCallback(async (pid, token) => {
    try {
      const txHash = await onUnlockZD(pid, token)
    } catch (e) {
      console.log(e)
    }
  }, [onUnlockZD])

  return (
    <LockedRewardsStyle>
      <BoxItemScroll>
        <Row className='row-claim'>
            <Col className="col-12">
                <TextMin>
                    Pool: 1
                </TextMin>
                <TextMedium>
                    {totalUserLocked ? `${parseFloat(getBalanceNumber(lockedPool0).toFixed(2)).toLocaleString('en-US')} TOOLS` : '~'}<br />Can unlock: {unlockAmount0 ? `${parseFloat(getBalanceNumber(unlockAmount0).toFixed(2)).toLocaleString('en-US')} TOOLS` : '0'}
                </TextMedium>
            </Col>
            <ReleaseButton onClick={
                async () => {
                setPendingTx(true)
                await handleUnlockZD(0, 'TOOLS')
                setPendingTx(false)
                }
            }>{pendingTx ? 'Release...' : 'Release'}</ReleaseButton>
        </Row>
        <Row className='row-claim'>
            <Col className="col-12">
                <TextMin>
                    Pool: 2
                </TextMin>
                <TextMedium>
                    {totalUserLocked ? `${parseFloat(getBalanceNumber(lockedPool1).toFixed(2)).toLocaleString('en-US')} TOOLS` : '~'}<br />Can unlock: {unlockAmount1 ? `${parseFloat(getBalanceNumber(unlockAmount1).toFixed(2)).toLocaleString('en-US')} TOOLS` : '0'}
                </TextMedium>
            </Col>
            <ReleaseButton onClick={
                async () => {
                setPendingTx(true)
                await handleUnlockZD(1, 'TOOLS')
                setPendingTx(false)
                }
            }>{pendingTx ? 'Release...' : 'Release'}</ReleaseButton>
        </Row>
        <Row className='row-claim'>
            <Col className="col-12">
                <TextMin>
                    Pool: 3
                </TextMin>
                <TextMedium>
                    {totalUserLocked ? `${parseFloat(getBalanceNumber(lockedPoolXPO0).toFixed(2)).toLocaleString('en-US')} TOOLS` : '~'}<br />Can unlock: {unlockAmountXPO0 ? `${parseFloat(getBalanceNumber(unlockAmountXPO0).toFixed(2)).toLocaleString('en-US')} TOOLS` : '0'}
                </TextMedium>
            </Col>
            <ReleaseButton onClick={
                async () => {
                setPendingTx(true)
                await handleUnlockZD(0, 'XPO')
                setPendingTx(false)
                }
            }>{pendingTx ? 'Release...' : 'Release'}</ReleaseButton>
        </Row>
        <Row className='row-claim'>
            <Col className="col-12">
                <TextMin>
                    Pool: 4
                </TextMin>
                <TextMedium>
                    {totalUserLocked ? `${parseFloat(getBalanceNumber(lockedPoolXPO1).toFixed(2)).toLocaleString('en-US')} TOOLS` : '~'}<br />Can unlock: {unlockAmountXPO1 ? `${parseFloat(getBalanceNumber(unlockAmountXPO1).toFixed(2)).toLocaleString('en-US')} TOOLS` : '0'}
                </TextMedium>
            </Col>
            <ReleaseButton onClick={
                async () => {
                setPendingTx(true)
                await handleUnlockZD(1, 'XPO')
                setPendingTx(false)
                }
            }>{pendingTx ? 'Release...' : 'Release'}</ReleaseButton>
        </Row>
        <Row className='row-claim'>
            <Col className="col-12">
                <TextMin>
                    Pool: 5
                </TextMin>
                <TextMedium>
                    {totalUserLocked ? `${parseFloat(getBalanceNumber(lockedPoolXPO28).toFixed(2)).toLocaleString('en-US')} XPO` : '~'}<br />Can unlock: {unlockAmountXPO28 ? `${parseFloat(getBalanceNumber(unlockAmountXPO28).toFixed(2)).toLocaleString('en-US')} XPO` : '0'}
                </TextMedium>
            </Col>
            <ReleaseButton onClick={
                async () => {
                setPendingTx(true)
                await handleUnlockZD(28, 'XPO')
                setPendingTx(false)
                }
            }>{pendingTx ? 'Release...' : 'Release'}</ReleaseButton>
        </Row>
        <Row className='row-claim'>
            <Col className="col-12">
                <TextMin>
                    Pool: 6
                </TextMin>
                <TextMedium>
                    {totalUserLocked ? `${parseFloat(getBalanceNumber(lockedPoolXPO29).toFixed(2)).toLocaleString('en-US')} XPO` : '~'}<br />Can unlock: {unlockAmountXPO29 ? `${parseFloat(getBalanceNumber(unlockAmountXPO29).toFixed(2)).toLocaleString('en-US')} XPO` : '0'}
                </TextMedium>
            </Col>
            <ReleaseButton onClick={
                async () => {
                setPendingTx(true)
                await handleUnlockZD(29, 'XPO')
                setPendingTx(false)
                }
            }>{pendingTx ? 'Release...' : 'Release'}</ReleaseButton>
        </Row>
        <Row className='row-claim'>
            <Col className="col-12">
                <TextMin>
                    Pool: 7
                </TextMin>
                <TextMedium>
                    {totalUserLocked ? `${parseFloat(getBalanceNumber(lockedPoolXPO30).toFixed(2)).toLocaleString('en-US')} XPO` : '~'}<br />Can unlock: {unlockAmountXPO30 ? `${parseFloat(getBalanceNumber(unlockAmountXPO30).toFixed(2)).toLocaleString('en-US')} XPO` : '0'}
                </TextMedium>
            </Col>
            <ReleaseButton onClick={
                async () => {
                setPendingTx(true)
                await handleUnlockZD(30, 'XPO')
                setPendingTx(false)
                }
            }>{pendingTx ? 'Release...' : 'Release'}</ReleaseButton>
        </Row>
        <Row className='row-claim'>
            <Col className="col-12">
                <TextMin>
                    Pool: 8
                </TextMin>
                <TextMedium>
                    {totalUserLocked ? `${parseFloat(getBalanceNumber(lockedPoolXPO31).toFixed(2)).toLocaleString('en-US')} XPO` : '~'}<br />Can unlock: {unlockAmountXPO31 ? `${parseFloat(getBalanceNumber(unlockAmountXPO31).toFixed(2)).toLocaleString('en-US')} XPO` : '0'}
                </TextMedium>
            </Col>
            <ReleaseButton onClick={
                async () => {
                setPendingTx(true)
                await handleUnlockZD(31, 'XPO')
                setPendingTx(false)
                }
            }>{pendingTx ? 'Release...' : 'Release'}</ReleaseButton>
        </Row>
        {/* <Row className='row-claim'>
            <Col className="col-12">
                <TextMin>
                    Pool: 1
                </TextMin>
                <TextMedium>
                    {totalUserLocked ? `${parseFloat(getBalanceNumber(totalUserLocked).toFixed(2)).toLocaleString('en-US')} BSCX` : '~'}<br />Can unlock: {canUnlockAmount ? `${parseFloat(getBalanceNumber(canUnlockAmount).toFixed(5)).toLocaleString('en-US')} BSCX` : '0'}
                </TextMedium>
            </Col>
            <ReleaseButton onClick={
                  async () => {
                    setPendingTx(true)
                    await handleUnlock()
                    setPendingTx(false)
                  }
                }>{pendingTx ? 'Release...' : 'Release'}</ReleaseButton>
        </Row> */}
        <Row className='row-claim'>
            <Col className="col-12">
                <TextMin>
                    Pool: 1
                </TextMin>
                <TextMedium>
                    {totalUserLocked ? `${parseFloat(getBalanceNumber(lockedZDPool0).toFixed(2)).toLocaleString('en-US')} zSEED` : '~'}<br />Can unlock: {unlockAmountZD0 ? `${parseFloat(getBalanceNumber(unlockAmountZD0).toFixed(5)).toLocaleString('en-US')} zSEED` : '0'}
                </TextMedium>
            </Col>
            <ReleaseButton onClick={
                  async () => {
                    setPendingTx(true)
                    await handleUnlockZD(0, '')
                    setPendingTx(false)
                  }
                }>{pendingTx ? 'Release...' : 'Release'}</ReleaseButton>
        </Row>
        <Row className='row-claim'>
            <Col className="col-12">
                <TextMin>
                    Pool: 2
                </TextMin>
                <TextMedium>
                    {totalUserLocked ? `${parseFloat(getBalanceNumber(lockedZDPool1).toFixed(2)).toLocaleString('en-US')} zSEED` : '~'}<br />Can unlock: {unlockAmountZD1 ? `${parseFloat(getBalanceNumber(unlockAmountZD1).toFixed(5)).toLocaleString('en-US')} zSEED` : '0'}
                </TextMedium>
            </Col>
            <ReleaseButton onClick={
                  async () => {
                    setPendingTx(true)
                    await handleUnlockZD(1, '')
                    setPendingTx(false)
                  }
                }>{pendingTx ? 'Release...' : 'Release'}</ReleaseButton>
        </Row>
        <Row className='row-claim'>
            <Col className="col-12">
                <TextMin>
                    Pool: 3
                </TextMin>
                <TextMedium>
                    {totalUserLocked ? `${parseFloat(getBalanceNumber(lockedZDPool2).toFixed(2)).toLocaleString('en-US')} zSEED` : '~'}<br />Can unlock: {unlockAmountZD2 ? `${parseFloat(getBalanceNumber(unlockAmountZD2).toFixed(5)).toLocaleString('en-US')} zSEED` : '0'}
                </TextMedium>
            </Col>
            <ReleaseButton onClick={
                  async () => {
                    setPendingTx(true)
                    await handleUnlockZD(2, '')
                    setPendingTx(false)
                  }
                }>{pendingTx ? 'Release...' : 'Release'}</ReleaseButton>
        </Row>
        <Row className='row-claim'>
            <Col className="col-12">
                <TextMin>
                    Pool: 4
                </TextMin>
                <TextMedium>
                    {totalUserLocked ? `${parseFloat(getBalanceNumber(lockedZDPool3).toFixed(4)).toLocaleString('en-US')} zSEED` : '~'}<br />Can unlock: {unlockAmountZD3 ? `${parseFloat(getBalanceNumber(unlockAmountZD3).toFixed(5)).toLocaleString('en-US')} zSEED` : '0'}
                </TextMedium>
            </Col>
            <ReleaseButton onClick={
                  async () => {
                    setPendingTx(true)
                    await handleUnlockZD(3, '')
                    setPendingTx(false)
                  }
                }>{pendingTx ? 'Release...' : 'Release'}</ReleaseButton>
        </Row>
        <Row className='row-claim'>
            <Col className="col-12">
                <TextMin>
                    Pool: 5
                </TextMin>
                <TextMedium>
                    {totalUserLocked ? `${parseFloat(getBalanceNumber(lockedZDPool4).toFixed(3)).toLocaleString('en-US')} zSEED` : '~'}<br />Can unlock: {unlockAmountZD4 ? `${parseFloat(getBalanceNumber(unlockAmountZD4).toFixed(5)).toLocaleString('en-US')} zSEED` : '0'}
                </TextMedium>
            </Col>
            <ReleaseButton onClick={
                  async () => {
                    setPendingTx(true)
                    await handleUnlockZD(4, '')
                    setPendingTx(false)
                  }
                }>{pendingTx ? 'Release...' : 'Release'}</ReleaseButton>
        </Row>
        {/* <Row className='row-claim'>
            <Col className="col-12">
                <TextMin>
                    Pool: 6
                </TextMin>
                <TextMedium>
                    {totalUserLocked ? `${parseFloat(getBalanceNumber(lockedZDPool5).toFixed(3)).toLocaleString('en-US')} ZD` : '~'}<br />Can unlock: {unlockAmountZD5 ? `${parseFloat(getBalanceNumber(unlockAmountZD5).toFixed(5)).toLocaleString('en-US')} ZD` : '0'}
                </TextMedium>
            </Col>
            <ReleaseButton onClick={
                  async () => {
                    setPendingTx(true)
                    await handleUnlockZD(5, '')
                    setPendingTx(false)
                  }
                }>{pendingTx ? 'Release...' : 'Release'}</ReleaseButton>
        </Row> */}
        {/* <Row className='row-claim'>
            <Col className="col-12">
                <TextMin>
                    Pool: 7
                </TextMin>
                <TextMedium>
                    {totalUserLocked ? `${parseFloat(getBalanceNumber(lockedZDPool6).toFixed(3)).toLocaleString('en-US')} ZD` : '~'}<br />Can unlock: {unlockAmountZD6 ? `${parseFloat(getBalanceNumber(unlockAmountZD6).toFixed(5)).toLocaleString('en-US')} ZD` : '0'}
                </TextMedium>
            </Col>
            <ReleaseButton onClick={
                  async () => {
                    setPendingTx(true)
                    await handleUnlockZD(6, '')
                    setPendingTx(false)
                  }
                }>{pendingTx ? 'Release...' : 'Release'}</ReleaseButton>
        </Row> */}
        {/* <Row className='row-claim'>
            <Col className="col-12">
                <TextMin>
                    Pool: 8
                </TextMin>
                <TextMedium>
                    {totalUserLocked ? `${parseFloat(getBalanceNumber(lockedZDPool7).toFixed(3)).toLocaleString('en-US')} ZD` : '~'}<br />Can unlock: {unlockAmountZD7 ? `${parseFloat(getBalanceNumber(unlockAmountZD7).toFixed(5)).toLocaleString('en-US')} ZD` : '0'}
                </TextMedium>
            </Col>
            <ReleaseButton onClick={
                  async () => {
                    setPendingTx(true)
                    await handleUnlockZD(7, '')
                    setPendingTx(false)
                  }
                }>{pendingTx ? 'Release...' : 'Release'}</ReleaseButton>
        </Row> */}
        {/* <Row className='row-claim'>
            <Col className="col-12">
                <TextMin>
                    Pool: 9
                </TextMin>
                <TextMedium>
                    {totalUserLocked ? `${parseFloat(getBalanceNumber(lockedZDPool8).toFixed(3)).toLocaleString('en-US')} ZD` : '~'}<br />Can unlock: {unlockAmountZD8 ? `${parseFloat(getBalanceNumber(unlockAmountZD8).toFixed(5)).toLocaleString('en-US')} ZD` : '0'}
                </TextMedium>
            </Col>
            <ReleaseButton onClick={
                  async () => {
                    setPendingTx(true)
                    await handleUnlockZD(8, '')
                    setPendingTx(false)
                  }
                }>{pendingTx ? 'Release...' : 'Release'}</ReleaseButton>
        </Row> */}
        {/* <Row className='row-claim'>
            <Col className="col-12">
                <TextMin>
                    Pool: 10
                </TextMin>
                <TextMedium>
                    {totalUserLocked ? `${parseFloat(getBalanceNumber(lockedZDPool9).toFixed(3)).toLocaleString('en-US')} ZD` : '~'}<br />Can unlock: {unlockAmountZD9 ? `${parseFloat(getBalanceNumber(unlockAmountZD9).toFixed(5)).toLocaleString('en-US')} ZD` : '0'}
                </TextMedium>
            </Col>
            <ReleaseButton onClick={
                  async () => {
                    setPendingTx(true)
                    await handleUnlockZD(9, '')
                    setPendingTx(false)
                  }
                }>{pendingTx ? 'Release...' : 'Release'}</ReleaseButton>
        </Row> */}
        <TextMin>
        </TextMin>
        {/*Object.entries(totalRewardLocked).map(([key, reward]) => {
            let rewardN = Number(reward)
            let amount = new BigNumber(rewardN || 0)
            let amountInUsd = getAmountInUSD(amount, key)
            totalAmountInUsd = totalAmountInUsd.plus(amountInUsd)

            return (
            <Row key={key}>
                <Col className="col-12">
                    <TextMedium>
                        {amount ? `${parseFloat(getBalanceNumber(amount).toFixed(3)).toLocaleString('en-US')} ${key}` : '~'}
                    </TextMedium>
                </Col>
                <ReleaseButtonDisable
                    disabled={true}
                >{'Release'}</ReleaseButtonDisable>
            </Row>
        )})*/}
        {/* <BoxItem>
            <TextMin>
                Total Value Locked
            </TextMin>
            <TextMedium>
               <b>${totalAmountInUsd ? `${parseFloat(getBalanceNumber(totalAmountInUsd).toFixed(2)).toLocaleString('en-US')}` : '~'}</b>
            </TextMedium>
        </BoxItem> */}
      </BoxItemScroll>
    </LockedRewardsStyle>
  )
}

const LockedRewardsStyle = styled.div`
  padding: 30px 35px 10px;
`
const BoxItemScroll = styled.div`
    margin-bottom: 10px;
    height: 250px;
    overflow: hidden;
    overflow-y: scroll;

    &:last-child {
        margin-bottom: 0px;
    }
`
const Row = styled.div`
    display: flex;
    margin-left: -15px;
    margin-right: -15px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #96cf24;
    padding: 7px 0px;
    &.align-center {
        align-items: center;
    }
`
const BoxItem = styled.div`
    margin-bottom: 10px;
    &:last-child {
        margin-bottom: 0px;
    }
    .pool-warning {
        font-size: 12px;
        color: #ffc800;
    }
`
const ReleaseButton = styled.button`
    color: #5d533f;
    background: #5aa62b;
    border: 1px solid #5d533f;
    cursor: pointer;
    margin-right: 20px;
    border-radius: 2px;
    padding: 2px 10px;
    transition: 0.3s all;
    height: 22px;
    margin-top: 5px;
    &:hover {
        background: #fabc450d
    }
`

const ReleaseButtonDisable = styled.button`
    color: #5d533f;
    background: #fabc450d;
    border: 1px solid #5d533f;
    cursor: no-drop;
    margin-left: 10px;
    border-radius: 2px;
    padding: 2px 10px;
    transition: 0.3s all;
    height: 22px;
    margin-top: 5px;
    &:hover {
        background: #fabc450d
    }
`

const Col = styled.div`
    padding-right: 15px;
    padding-left: 15px;
`
const TextMedium = styled.div`
    font-weight: 500;
    font-size: 12px;
    color: #96CF24;
    word-break: break-word;
    strong {
        font-size: 12px;
    }
    span {
        font-size: 12px;
        margin-left: 5px;
    }
    .st-link {
        color: #5aa62b;
        text-decoration: none;
        font-size: 12px;
        margin-left: 10px;
    }
`
const TextMin = styled.div`
    font-weight: 500;
    font-size: 14px;
    color: #9CA3AF;
    margin-bottom: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    align-items: center;
    img {
        margin-left: 5px;
    }
`

export default LockedRewards
