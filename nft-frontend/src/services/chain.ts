import { inject } from "aurelia";
import { ITokenContract } from "../interfaces/ITokenContract";
import { Toastr } from "./toastr";

const CHAIN_ID = 4;
const CHAIN_ID_HEX = "0x4";

@inject(Toastr)
export class Chain {
    public currentAccount: string;
    public ethereum: any;
    public isConnected: boolean;
    public nftContract: ITokenContract;
    
    constructor(
        public toastr: Toastr
    ) {
        this.currentAccount = "";
        this.isConnected = false;
        this.ethereum = (window as any).ethereum;
        this.nftContract = {
            abi: [],
            address: "",
            currentSupply: 0,
            totalSupply: 0
        };
    }

    connect() {
        let self = this;
        this.ethereum
            .request({ method: 'eth_requestAccounts' })
            .then((accounts) => {
                if (accounts.length === 0) {
                    // MetaMask is locked or the user has not connected any accounts
                    this.toastr.error("Please create an account in Metamask", "Error");
                  } else if (accounts[0] !== self.currentAccount) {
                    self.currentAccount = accounts[0];
                    self.isConnected = true;
                    debugger;
                    if (self.ethereum.networkVersion != CHAIN_ID) {
                        self.ethereum
                            .request({method: 'wallet_switchEthereumChain', params: [{ chainId: CHAIN_ID_HEX}]});
                    }
                    self.ethereum.on('chainChanged', () => window.location.reload());
                  }
            })
            .catch((err) => {
                self.isConnected = false;
            });
        
    }
}