import BigNumber from 'bignumber.js'
import React, { useCallback, useMemo, useState } from 'react'
import Button from '../../../components/Button'
import Modal, { ModalProps } from '../../../components/Modal'
import ModalActions from '../../../components/ModalActions'
import ModalTitle from '../../../components/ModalTitle'
import TokenInput from '../../../components/TokenInput'
import { getFullDisplayBalance } from '../../../utils/formatBalance'
import ModalSuccess from '../../../components/ModalSuccess'

interface WithdrawModalProps extends ModalProps {
  max: BigNumber
  onConfirm: (amount: string) => void
  tokenName?: string
  decimals: number
  theme?: string
}

const WithdrawModal: React.FC<WithdrawModalProps> = ({
  onConfirm,
  onDismiss,
  max,
  tokenName = '',
  decimals,
  theme = 'light'
}) => {
  const [val, setVal] = useState('')
  const [pendingTx, setPendingTx] = useState(false)

  const fullBalance = useMemo(() => {
    return getFullDisplayBalance(max, decimals)
  }, [max])

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setVal(e.currentTarget.value)
    },
    [setVal],
  )

  const handleSelectMax = useCallback(() => {
    setVal(fullBalance)
  }, [fullBalance, setVal])

  return (
    <Modal theme={theme}>
      <ModalTitle text={`Withdraw ${tokenName}`} />
      <TokenInput
        onSelectMax={handleSelectMax}
        onChange={handleChange}
        value={val}
        max={fullBalance}
        symbol={tokenName}
        theme={theme}
      />
      <ModalActions>
        <Button text="Cancel" variant="default" onClick={onDismiss} />
        <Button
          variant="secondary"
          disabled={pendingTx}
          text={pendingTx ? 'Pending Confirmation' : 'Confirm'}
          onClick={async () => {
            if (val && parseFloat(val) > 0) {
              setPendingTx(true)
              await onConfirm(val)
              setPendingTx(false)
              onDismiss()
            }
          }}
        />
      </ModalActions>
    </Modal>
  )
}

export default WithdrawModal
