import { Chain } from "../services/chain";
import { inject, IRouteViewModel, Params } from "aurelia";
import { INft } from "../interfaces/INft";

@inject(Chain)
export class Mint {
    nfts: INft[];

    constructor(public chain: Chain) {
        
    }
}