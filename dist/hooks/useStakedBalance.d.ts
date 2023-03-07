import BigNumber from 'bignumber.js';
declare const useStakedBalance: (pid: number, version: string, account: string) => BigNumber;
export default useStakedBalance;
