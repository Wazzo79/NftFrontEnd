import { inject } from "aurelia";
import detectEthereumProvider from "@metamask/detect-provider";
import { Toastr } from "./toastr";

@inject(Toastr)
export class Chain {
    public currentAccount: string;
    isConnected: boolean;
    provider: any;

    constructor(
        public toastr: Toastr
    ) {
        this.currentAccount = "";
        this.isConnected = false;
    }

    async attached() {
        this.provider = await detectEthereumProvider();
        if (this.provider) {
            this.initialize();
        } else {
            this.toastr.error("Please install Metamask to continue", "Error");
        }
    }

    connect() {
        let self = this;
        (window as any).ethereum
            .request({ method: 'eth_requestAccounts' })
            .then((accounts) => {
                if (accounts.length === 0) {
                    // MetaMask is locked or the user has not connected any accounts
                    this.toastr.error("Please create an account in Metamask", "Error");
                  } else if (accounts[0] !== self.currentAccount) {
                    self.currentAccount = accounts[0];
                    // Do any other work!
                  }
            })
            .catch((err) => {
                
            });
        
    }

    disconnect() {
        this.isConnected = false;
    }

    initialize() {
        if (this.provider !== window.ethereum) {
            this.toastr.error("Do you have multiple wallets installed?", "Error");
          }
    }
}