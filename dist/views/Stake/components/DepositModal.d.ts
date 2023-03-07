import BigNumber from 'bignumber.js';
import React from 'react';
import { ModalProps } from '../../../components/Modal';
interface DepositModalProps extends ModalProps {
    max: BigNumber;
    onConfirm: (amount: string) => void;
    tokenName?: string;
}
declare const DepositModal: React.FC<DepositModalProps>;
export default DepositModal;
