import React from "react";
import './product-list.css';
import logo from '../../assets/logo.svg';
import { ProductItemList } from "../../model/products/product-item-list";
import ProductView from "../product-item/product-item";

interface ProductListProps {
  list?: ProductItemList,
  isLoading?: boolean;
}

const ProductListView: React.FC<ProductListProps> = ({isLoading, list}) => {
  const items = list?.items;
  return (
    <div className="product-list-view">
      { isLoading && ( <img src={logo} className="loading-logo" alt="logo" />) }
      
      {items && items.map((item) => <ProductView item={item} />)}
    </div>
  );
}

export default ProductListView;