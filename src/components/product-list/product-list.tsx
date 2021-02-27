import React from "react";
import { ProductListItem } from "../../model/products/product-list-item";
import './product-list.css';
import logo from '../../assets/logo.svg';

interface ProductListProps {
  items?: ProductListItem,
  isLoading?: boolean;
}

const ProductListView: React.FC<ProductListProps> = ({isLoading, items}) => {
  return (
    <div className="ProductListView">
      { isLoading && (
        <img src={logo} className="loading-logo" alt="logo" />)
      }
    </div>
  );
}

export default ProductListView;