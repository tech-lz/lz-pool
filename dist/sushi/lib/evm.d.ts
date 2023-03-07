export class EVM {
    constructor(provider: any);
    provider: any;
    setProvider(provider: any): void;
    /**
     * Attempts to reset the EVM to its initial state. Useful for testing suites
     *
     * @param provider a valid web3 provider
     * @returns null
     */
    resetEVM(resetSnapshotId?: string): Promise<void>;
    reset(id: any): Promise<any>;
    snapshot(): Promise<any>;
    evmRevert(id: any): Promise<any>;
    stopMining(): Promise<any>;
    startMining(): Promise<any>;
    mineBlock(): Promise<any>;
    increaseTime(duration: any): Promise<any>;
    callJsonrpcMethod(method: any, params: any): Promise<any>;
    send(args: any): Promise<any>;
    assertCertainError(error: any, expected_error_msg: any): void;
    expectThrow(promise: any, reason: any): Promise<void>;
    expectAssertFailure(promise: any): Promise<void>;
}
