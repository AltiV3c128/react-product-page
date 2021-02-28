import { ProductItemList } from "../../../model/products/product-item-list";
import { BasePayload } from "../../server-manager/base-payload";

export class GetProductListResponse extends BasePayload {
    public items? : ProductItemList;
}