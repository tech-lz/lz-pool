import React from 'react';
interface ButtonProps {
    children?: React.ReactNode;
    disabled?: boolean;
    href?: string;
    onClick?: () => void;
    size?: 'sm' | 'md' | 'lg';
    text?: string;
    to?: string;
    variant?: 'default' | 'secondary' | 'tertiary';
}
declare const Button: React.FC<ButtonProps>;
export default Button;
