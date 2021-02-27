import { Availability } from "../availability/availability";
import { Price } from "../price/price";
import { ProductListItem } from "./product-list-item";

export class ProductItem {
    public UPC : number;
    public name : string;
    public price: Price;
    public availability : Availability;
    public variants?: ProductListItem;

    constructor(UPC: number, name: string, price: Price, availability: Availability, variants?: ProductListItem) {
        this.UPC = UPC;
        this.name = name;
        this.price = price;
        this.availability = availability;
        this.variants = variants;
    }
}