import React from 'react';
import { ModalProps } from '../../../components/Modal';
interface LockedRewardsModalProps extends ModalProps {
    web3: any;
    theme: string;
}
declare const LockedRewardsModal: React.FC<LockedRewardsModalProps>;
export default LockedRewardsModal;
