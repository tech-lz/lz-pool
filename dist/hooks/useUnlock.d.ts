declare const useUnlock: (account: string) => {
    onUnlock: () => Promise<any>;
};
export default useUnlock;
