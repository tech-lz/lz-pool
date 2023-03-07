declare const useStake: (pid: number, version: string, decimals: number, account: string) => {
    onStake: (amount: string) => Promise<any>;
};
export default useStake;
