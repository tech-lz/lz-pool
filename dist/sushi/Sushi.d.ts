export class Sushi {
    constructor(provider: any, networkId: any, testing: any, options: any);
    web3: Web3;
    testing: EVM;
    snapshot: Promise<any>;
    contracts: Contracts;
    sushiAddress: any;
    masterChefAddress: any;
    wethAddress: any;
    xSushiAddress: any;
    makerAddress: any;
    resetEVM(): Promise<void>;
    addAccount(address: any, number: any): void;
    setProvider(provider: any, networkId: any): void;
    setDefaultAccount(account: any): void;
    getDefaultAccount(): string;
    loadAccount(account: any): void;
    toBigN(a: any): any;
}
import Web3 from "web3";
import { EVM } from "./lib/evm.js";
import { Contracts } from "./lib/contracts.js";
