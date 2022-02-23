import { IAttribute } from "./IAttribute";

export interface INft {
    attributes: IAttribute[];
    description: string;
    image: string;
    title: string;
    tokenId: number;
}