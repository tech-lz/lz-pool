import React from 'react';
import { ModalProps } from '..//Modal';
interface DisclaimerModal extends ModalProps {
    onConfirm: () => void;
}
declare const DisclaimerModal: React.FC<DisclaimerModal>;
export default DisclaimerModal;
