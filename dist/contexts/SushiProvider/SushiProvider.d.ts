import React from 'react';
import { Sushi } from '../../sushi';
export interface SushiContext {
    sushi?: typeof Sushi;
}
export declare const Context: React.Context<SushiContext>;
declare global {
    interface Window {
        sushisauce: any;
    }
}
interface SushiProps {
    provider: any;
}
declare const SushiProvider: React.FC<SushiProps>;
export default SushiProvider;
