declare const useUnlockZD: (account: string) => {
    onUnlockZD: (pid: number, token: string) => Promise<any>;
};
export default useUnlockZD;
