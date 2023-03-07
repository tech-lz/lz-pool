import React from 'react';
import { InputProps } from '../Input';
interface TokenInputProps extends InputProps {
    max: number | string;
    symbol: string;
    onSelectMax?: () => void;
    theme?: string;
}
declare const TokenInput: React.FC<TokenInputProps>;
export default TokenInput;
