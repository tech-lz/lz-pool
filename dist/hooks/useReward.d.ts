declare const useReward: (pid: number, version: string, account: string) => {
    onReward: () => Promise<any>;
};
export default useReward;
