declare const useConvert: () => {
    onConvert: (token0: string, token1: string) => Promise<void>;
};
export default useConvert;
