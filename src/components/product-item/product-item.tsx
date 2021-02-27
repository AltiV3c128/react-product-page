import React from "react";
import { ProductItem } from "../../model/products/product-item";
import './product-item.css';

interface ProductProps {
  item: ProductItem 
}

const ProductView: React.FC<ProductProps> = () => {
  return (
    <div className="ProductView">
      
    </div>
  );
}

export default ProductView;