import React from 'react';
interface IconButtonProps {
    children?: React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;
    to?: string;
}
declare const IconButton: React.FC<IconButtonProps>;
export default IconButton;
