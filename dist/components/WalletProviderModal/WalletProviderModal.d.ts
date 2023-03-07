import React from 'react';
import { ModalProps } from '../Modal';
declare global {
    interface Window {
        ethereum: any;
        location: Location;
    }
}
declare const WalletProviderModal: React.FC<ModalProps>;
export default WalletProviderModal;
