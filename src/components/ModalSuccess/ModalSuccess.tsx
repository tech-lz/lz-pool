import React from 'react'
import styled from 'styled-components'
import Button from '../../components/Button'
import Spacer from '../../components/Spacer'
import Cup from '../../assets/img/Cup.svg'

interface SuccessProps {
  text: string
  amount: string
  symbol: string
  txhash: string
}
const ModalSuccess: React.FC<SuccessProps> = ({
    text,
    amount,
    symbol,
    txhash
}) => {
  return (
    <StyledSuccessWrap>
      <StyledModalSuccess>
        <Spacer size="md" />
        <StyleMaxText>Your deposit is done!</StyleMaxText>
        <Spacer size="md" />
        <StyleInfo>
            <StyleLabel>Amount:</StyleLabel>
            <StyleContent>{amount} {symbol}</StyleContent>
        </StyleInfo>
        {/* <Spacer size="md" />
        <StyleInfo>
            <StyleLabel>Tx hash:</StyleLabel>
            <StyledLink target="_blank" href={txhash}>{txhash}</StyledLink>
        </StyleInfo> */}
      </StyledModalSuccess>
    </StyledSuccessWrap>

  )
}

const StyledSuccessWrap = styled.div``

const StyledModalSuccess = styled.div`
  padding: ${(props) => props.theme.spacing[4]}px;
  text-align: center;
  // display: none;
`
const StyleMaxText = styled.div`
  color: #535353;
  font-size: 22px;
`
const StyleInfo = styled.div`
  display: flex;
  justify-content: space-between;
`
const StyleLabel = styled.div`
  color: #535353;
`
const StyleContent = styled.div`
  color: #535353;
`
const StyledLink = styled.a`
  color: #535353;
  &.other-stake{
    padding: 10px;
    background-color: ${(props) => props.theme.color.primary.main};
    display: block;
    border-radius: 12px;
    text-align: center;
    color: ${(props) => props.theme.color.grey[500]};
    text-decoration: none;
    font-weight: bold;
  }
`

export default ModalSuccess
