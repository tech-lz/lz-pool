declare const useTransactionAdder: () => {
    onAddTransaction: (tx: import("../contexts/Transactions/types").Transaction) => void;
};
export default useTransactionAdder;
