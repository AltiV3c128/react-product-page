import axios from 'axios';
import { ProductItem } from '../../model/products/product-item';
import { ProductItemList } from '../../model/products/product-item-list';
import { ServerResponse } from '../server-manager/server-response';
import { GetProductListResponse } from './dto/get-products-list-response';
export class ProductManager {
    public static getProductList() : Promise<ProductItemList> {
        return new Promise((resolve, reject) => {
            axios
                .get<GetProductListResponse>('https://assets.fc-dev.instore.oakley.com/assets/products/products.json')
                .then((productListResponse) => {
                    let items : ProductItem [] = [];
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