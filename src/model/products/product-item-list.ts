import { ProductItem } from "./product-item";

export class ProductItemList {
    public items?: ProductItem [];

    constructor(items? : ProductItem[]) {
        this.items = items;
    }
}