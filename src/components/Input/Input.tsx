import React from 'react'
import styled from 'styled-components'

export interface InputProps {
  endAdornment?: React.ReactNode,
  onChange: (e: React.FormEvent<HTMLInputElement>) => void,
  placeholder?: string,
  startAdornment?: React.ReactNode,
  value: string,
  theme?: string,
}

const Input: React.FC<InputProps> = ({
  endAdornment,
  onChange,
  placeholder,
  startAdornment,
  value,
  theme = 'light'
}) => {
  return (
    <StyledInputWrapper className={`${theme}`}>
      {!!startAdornment && startAdornment}
      <StyledInput className={`${theme}`} placeholder={placeholder} value={value} onChange={onChange} />
      {!!endAdornment && endAdornment}
    </StyledInputWrapper>
  )
}

const StyledInputWrapper = styled.div`
  align-items: center;
  border-radius: ${props => props.theme.borderRadius}px;
  display: flex;
  height: 48px;

  &.light {
    background: #F5F5F9;
  }
  &.dark {
    background: #3E414B;
  }
`

const StyledInput = styled.input`
  background: none;
  border: 0;
  font-size: 18px;
  font-weight: 500;
  flex: 1;
  height: 48px;
  margin: 0;
  padding: 0;
  outline: none;
  max-width: 225px;

  &.light {
    color: #535353;
  }
  &.dark {
    color: #ffffff;
  }
`

export default Input
