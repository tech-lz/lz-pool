declare const useClaimNft: (pid: number, version: string, account: string) => {
    onClaimNft: () => Promise<any>;
};
export default useClaimNft;
