import React from 'react';
interface WalletCardProps {
    icon: React.ReactNode;
    onConnect: () => void;
    title: string;
}
declare const WalletCard: React.FC<WalletCardProps>;
export default WalletCard;
