import React, { useEffect, useState } from "react";
import ProductListView from "../../components/product-list/product-list";
import { ProductItemList } from "../../model/products/product-item-list";
import { Constants } from "../../modules/constants/constants";
import { ProductManager } from "../../modules/product-manager/product-manager";
import './style.css';

const Menu: React.FC = () => {
    return (
        <div className='menu-bar'>
            <ul>
                <li className='active'>{Constants.labels.sunglasses}</li>
                <li>{Constants.labels.eyeglasses}</li>
                <li>{Constants.labels.lenses}</li>
            </ul>
        </div>
    );
}

export default Menu;