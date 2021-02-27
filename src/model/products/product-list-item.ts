import { ProductItem } from "./product-item";

export class ProductListItem {
    public items: ProductItem [];

    constructor (items: ProductItem []) {
        this.items = items;
    }
}