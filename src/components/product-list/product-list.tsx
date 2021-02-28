import React from "react";
import './product-list.css';
import logo from '../../assets/logo.svg';
import { ProductItemList } from "../../model/products/product-item-list";

interface ProductListProps {
  list?: ProductItemList,
  isLoading?: boolean;
}

const ProductListView: React.FC<ProductListProps> = ({isLoading, list}) => {
  return (
    <div className="ProductListView">
      { isLoading && ( <img src={logo} className="loading-logo" alt="logo" />) }
      { !isLoading && !!list?.items?.length && ( <div>{JSON.stringify(list?.items)}</div>) }
    </div>
  );
}

export default ProductListView;