import React from 'react';
export interface ModalProps {
    onDismiss?: () => void;
    theme?: string;
}
declare const Modal: React.FC<ModalProps>;
export default Modal;
