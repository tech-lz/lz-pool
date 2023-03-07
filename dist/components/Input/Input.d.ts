import React from 'react';
export interface InputProps {
    endAdornment?: React.ReactNode;
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
    placeholder?: string;
    startAdornment?: React.ReactNode;
    value: string;
    theme?: string;
}
declare const Input: React.FC<InputProps>;
export default Input;
