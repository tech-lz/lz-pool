declare const useUnstake: (pid: number, version: string, decimals: number, account: string) => {
    onUnstake: (amount: string) => Promise<void>;
};
export default useUnstake;
