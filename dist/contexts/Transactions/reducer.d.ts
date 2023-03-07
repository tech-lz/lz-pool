import { TransactionReceipt } from 'web3-core';
import { Transaction, TransactionsMap } from './types';
declare const ADD_TRANSACTION = "ADD_TRANSACTION";
declare const RECEIVE_TX_RECEIPT = "RECEIVE_TX_RECEIPT";
declare const SET_TRANSACTIONS = "SET_TRANSACTIONS";
interface AddTransactionAction {
    type: typeof ADD_TRANSACTION;
    transaction: Transaction;
}
interface ReceiveTxReceiptAction {
    type: typeof RECEIVE_TX_RECEIPT;
    txHash: string;
    receipt: TransactionReceipt;
}
interface SetTransactionsAction {
    type: typeof SET_TRANSACTIONS;
    transactions: TransactionsMap;
}
declare type TransactionsActions = AddTransactionAction | ReceiveTxReceiptAction | SetTransactionsAction;
export interface TransactionsState {
    initialized: boolean;
    transactions: TransactionsMap;
}
export declare const addTransaction: (transaction: Transaction) => AddTransactionAction;
export declare const receiveTxReceipt: (txHash: string, receipt: TransactionReceipt) => ReceiveTxReceiptAction;
export declare const setTransactions: (transactions: TransactionsMap) => SetTransactionsAction;
export declare const initialState: TransactionsState;
declare const reducer: (state: TransactionsState, action: TransactionsActions) => TransactionsState;
export default reducer;
