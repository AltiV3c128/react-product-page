import axios from 'axios';
import { ProductItemList } from '../../model/products/product-item-list';
import { Constants } from '../constants/constants';
import { ServerResponse } from '../server-manager/server-response';
import { GetProductListResponse } from './dto/get-products-list-response';

export class ProductManager {

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