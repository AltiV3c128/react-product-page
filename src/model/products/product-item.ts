import { Availability } from "../availability/availability";
import { Price } from "../price/price";
import { ProductItemList } from "./product-item-list";

export class ProductItem {
    public UPC : number;
    public name : string;
    public price: Price;
    public availability : Availability;
    public variants?: ProductItemList;

    constructor(UPC: number, name: string, price: Price, availability: Availability, variants?: ProductItemList) {
        this.UPC = UPC;
        this.name = name;
        this.price = price;
        this.availability = availability;
        this.variants = variants;
    }
}