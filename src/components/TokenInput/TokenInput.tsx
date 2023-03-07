import React from 'react'
import styled from 'styled-components'

import Button from '../Button'
import Input, { InputProps } from '../Input'

interface TokenInputProps extends InputProps {
  max: number | string,
  symbol: string,
  onSelectMax?: () => void,
  theme?: string
}

const TokenInput: React.FC<TokenInputProps> = ({
  max,
  symbol,
  onChange,
  onSelectMax,
  value,
  theme = 'light'
}) => {
  return (
    <StyledTokenInput>
        <Box className={`${theme}`}>
            <StyleBox>
                <StyleLabel className={`${theme}`}>Amount</StyleLabel>
                <StyledMaxText className={`${theme}`}>Balance: {max.toLocaleString('en-US')}</StyledMaxText>
            </StyleBox>
            <BoxInput>
                <Input
                    endAdornment={(
                    <StyledTokenAdornmentWrapper>
                        <div className='max' onClick={onSelectMax}>Max</div>
                        <StyledSpacer />
                        <StyledTokenSymbol className={`${theme}`}>{symbol}</StyledTokenSymbol>
                    </StyledTokenAdornmentWrapper>
                    )}
                    onChange={onChange}
                    placeholder="0"
                    value={value}
                    theme={theme}
                />
            </BoxInput>
        </Box>
    </StyledTokenInput>
  )
}

const StyleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const StyleLabel = styled.div`
  color: #535353;
  font-weight: 500;
  width: 40%;

  &.light {
    color: #535353;
  }
  &.dark {
    color: #ffffff;
  }
`
const StyledTokenInput = styled.div`
  padding: 24px;
`
const Box = styled.div`
  border-radius: 10px;
  padding: 10px 20px;

  &.light {
    background: #F5F5F9;
  }
  &.dark {
    background: #3E414B;
  }
`
const StyledSpacer = styled.div`
  width: ${props => props.theme.spacing[3]}px;
`

const StyledTokenAdornmentWrapper = styled.div`
  align-items: center;
  display: flex;

  .max {
    font-size: 14px;
    cursor: pointer;
    background: linear-gradient(270deg, #96CF24 10.53%, #5AA62B 100%);
    border-radius: 3px;
    color: #fff;
    padding: 6px 10px;
  }
`

const StyledMaxText = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  font-weight: 500;
  height: 44px;
  justify-content: flex-end;
  &.light {
    color: #535353;
  }
  &.dark {
    color: #ffffff;
  }
`

const StyledTokenSymbol = styled.span`
  font-weight: 500;
  &.light {
    color: #535353;
  }
  &.dark {
    color: #ffffff;
  }
`

const BoxInput = styled.div`
  input {
      width: 40%;
  }
`



export default TokenInput
