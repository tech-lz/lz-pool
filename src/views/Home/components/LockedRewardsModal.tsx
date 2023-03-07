import React, { useCallback, useMemo, useState } from 'react'
import styled from 'styled-components'
import Button from '../../../components/Button'
import Modal, { ModalProps } from '../../../components/Modal'
import ModalActions from '../../../components/ModalActions'
import ModalTitle from '../../../components/ModalTitle'
import LockedRewards from './LockedRewards'

interface LockedRewardsModalProps extends ModalProps {
  web3: any
  theme: string
}

const LockedRewardsModal: React.FC<LockedRewardsModalProps> = ({
  onDismiss,
  web3,
  theme
}) => {

  return (
    <Modal theme={theme}>
      <ModalTitle text={`Reward Tokens Locked`} />
      <LockedRewards web3={web3} />
      <ModalActions>
        <CloseButton onClick={onDismiss}>
          <div className="text">Close</div>
        </CloseButton>
      </ModalActions>
    </Modal>
  )
}

export default LockedRewardsModal

const CloseButton = styled.div`
  width: 100%;
  background: inherit;
  border: 1px solid #6ac92f;
  padding: 5px 30px;
  border-radius: 5px;
  cursor: pointer;
  .text {
    background: linear-gradient(270deg, #96CF24 10.53%, #5AA62B 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &:hover {
    background: linear-gradient(270deg, #96CF24 10.53%, #5AA62B 100%);
    .text {
      background: #fff;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`
