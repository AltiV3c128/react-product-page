import React from "react";
import { Price } from "../../model/price/price";
import { ProductItem } from "../../model/products/product-item";
import { Constants } from "../../modules/constants/constants";
import './product-item.css';

interface ProductProps {
  item: ProductItem 
}

const getFormattedPrice = (price: Price) => {
    const symbol = price.getCurrencySymbol();
    return (symbol!+' '+price.current.value); 
}

const ProductView: React.FC<ProductProps> = ({item}) => {
  return (
    <div className="product-view">
      <img className='product' src={Constants.url.productImage} alt='Product' />
      <div className='info' style={{backgroundColor: 'red'}}>
        <div>{ getFormattedPrice(new Price(item.price.current, item.price.currency)) }</div>
        <div>{item.name}</div>
      </div>
      <div className='related'>
        {item.variants && !!item.variants.length && item.variants.map((variant: ProductItem) => (<img className='variant' src={Constants.url.productImageVariant} />))}
      </div>
    </div>
  );
}

export default ProductView;