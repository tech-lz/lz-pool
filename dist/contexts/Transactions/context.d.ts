/// <reference types="react" />
import { Transaction, TransactionsMap } from './types';
interface TransactionsContext {
    transactions: TransactionsMap;
    onAddTransaction: (tx: Transaction) => void;
}
declare const _default: import("react").Context<TransactionsContext>;
export default _default;
