import BigNumber from 'bignumber.js'
import React, { useCallback, useMemo, useState } from 'react'
import Button from '../../../components/Button'
import Modal, { ModalProps } from '../../../components/Modal'
import ModalActions from '../../../components/ModalActions'
import ModalTitle from '../../../components/ModalTitle'
import TokenInput from '../../../components/TokenInput'
import { getFullDisplayBalance } from '../../../utils/formatBalance'
import ModalSuccess from '../../../components/ModalSuccess'
import Spacer from '../../../components/Spacer'

interface DepositModalProps extends ModalProps {
  max: BigNumber
  onConfirm: (amount: string) => void
  tokenName?: string
  decimals: number
  theme?: string
}

const DepositModal: React.FC<DepositModalProps> = ({
  max,
  onConfirm,
  onDismiss,
  tokenName = '',
  decimals,
  theme = 'light'
}) => {
  const [val, setVal] = useState('')
  const [pendingTx, setPendingTx] = useState(false)
  const [successTx, setSuccessTx] = useState(false)

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
      <ModalTitle text={successTx ? '' : `Deposit ${tokenName} Tokens`} />
      {!successTx && <span>
        <TokenInput
          value={val}
          onSelectMax={handleSelectMax}
          onChange={handleChange}
          max={fullBalance}
          symbol={tokenName}
          theme={theme}
        />
        <ModalActions>
          <Button text="Cancel" variant="default" onClick={onDismiss} />
          <Button
            variant="secondary"
            disabled={pendingTx}
            text={pendingTx ? 'Pending Confirmation...' : 'Confirm'}
            onClick={async () => {
              if (val && parseFloat(val) > 0) {
                setPendingTx(true)
                var tx : any = await onConfirm(val)
                setPendingTx(false)
                if (tx) {
                  setSuccessTx(true)
                }
                else {
                  if (onDismiss) onDismiss()
                }
              }
            }}
          />
        </ModalActions>
      </span>}
      {successTx &&
        <span>
          <ModalSuccess
            amount={val}
            symbol={tokenName}
            txhash="4f95c6770c75ddd3388f525" text="deposit"/>
          <ModalActions>
            <Button text="Close" variant="default" onClick={onDismiss} />
          </ModalActions>
        </span>
      }
    </Modal>
  )
}

export default DepositModal
