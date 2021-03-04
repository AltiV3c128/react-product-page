import axios from "axios";
import { ProductItemList } from "../../model/products/product-item-list";
import { Constants } from "../../shared/constants/constants";
import { GetProductListResponse } from "../product-manager/dto/get-products-list-response";
import { ServerResponse } from "./server-response";
export class ServerManager {

    public static getProductList() : Promise<ProductItemList> {
        return new Promise((resolve, reject) => {
            axios.get<GetProductListResponse>(Constants.url.dataSource).then((productListResponse) => {
                let list = new ProductItemList();
                let res = new ServerResponse<GetProductListResponse>(productListResponse);
                if (res.isOK() && res.hasPayload()) {
                    list.items = res.data;
                }
                resolve(list);
            }).catch((err) => {
                reject(err);
            });
        });
    }

}