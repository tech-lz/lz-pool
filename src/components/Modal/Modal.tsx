import React from 'react'
import styled, { keyframes } from 'styled-components'

export interface ModalProps {
  onDismiss?: () => void
  theme?: string
}

const Modal: React.FC<ModalProps> = ({ children, theme = 'light' }) => {
  return (
    <StyledResponsiveWrapper className={`${theme}`}>
      <StyledModal className={`${theme}`}>{children}</StyledModal>
    </StyledResponsiveWrapper>
  )
}

const mobileKeyframes = keyframes`
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-100%);
  }
`

const StyledResponsiveWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  width: 100%;
  max-width: 400px;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    flex: 1;
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    height: 100%;
    // max-height: calc(100% - ${(props) => props.theme.spacing[4]}px);
    animation: ${mobileKeyframes} 0.3s forwards ease-out;
  }
`

const StyledModal = styled.div`
  padding: 20px 0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;

  &.light {
    background: #ffffff;
  }

  &.dark {
    background: #2A2C32;
  }
`

const StyledModalContent = styled.div``

export default Modal
