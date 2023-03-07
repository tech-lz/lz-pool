import React from 'react';
interface DialProps {
    children?: React.ReactNode;
    color?: 'primary' | 'secondary';
    disabled?: boolean;
    size?: number;
    value: number;
}
declare const Dial: React.FC<DialProps>;
export default Dial;
