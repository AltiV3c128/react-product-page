import { Availability } from "../availability/availability";
import { Price } from "../price/price";
export class ProductItem {
    public UPC : number;
    public name : string;
    public price: Price;
    public availability : Availability;
    public variants?: ProductItem[];

    constructor(UPC: number, name: string, price: Price, availability: Availability, variants?: ProductItem[]) {
        this.UPC = UPC;
        this.name = name;
        this.price = price;
        this.availability = availability;
        this.variants = variants;
    }
}