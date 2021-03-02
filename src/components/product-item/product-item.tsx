import React from "react";
import { Price } from "../../model/price/price";
import { ProductItem } from "../../model/products/product-item";
import { Constants } from "../../modules/constants/constants";
import './style.css';

interface ProductProps {
  key : number,
  item: ProductItem 
}

const getFormattedPrice = (price: Price) => {
    const symbol = price.getCurrencySymbol();
    return (symbol!+' '+price.current.value); 
}

const ProductView: React.FC<ProductProps> = ({key, item}) => {
  return (
    <div key={key} className="product-view">
      <img className='product' src={Constants.url.productImage} alt='Product' />
      <div className='info'>
        <div>{ getFormattedPrice(new Price(item.price.current, item.price.currency)) }</div>
        <div>{item.name.toLowerCase()}</div>
      </div>
      <div className='related'>
        <div className='variant-container'>
          {item.variants && !!item.variants.length && item.variants.map((variant: ProductItem) => (
            <div className='variant'>
              <img src={Constants.url.productImageVariant} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductView;