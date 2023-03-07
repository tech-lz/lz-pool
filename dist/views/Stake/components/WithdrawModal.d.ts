import BigNumber from 'bignumber.js';
import React from 'react';
import { ModalProps } from '../../../components/Modal';
interface WithdrawModalProps extends ModalProps {
    max: BigNumber;
    onConfirm: (amount: string) => void;
    tokenName?: string;
}
declare const WithdrawModal: React.FC<WithdrawModalProps>;
export default WithdrawModal;
