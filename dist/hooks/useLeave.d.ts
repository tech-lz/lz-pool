declare const useLeave: () => {
    onLeave: (amount: string) => Promise<void>;
};
export default useLeave;
