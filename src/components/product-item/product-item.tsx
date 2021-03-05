import React from "react";
import { useMedia } from "react-media";
import { Price } from "../../model/price/price";
import { ProductItem } from "../../model/products/product-item";
import { Constants } from "../../shared/constants/constants";
import RelatedContainer from "../related-container/related-container";
import './style.css';
interface ProductProps {
  item: ProductItem 
}

const getFormattedPrice = (price: Price) => {
    const symbol = price.getCurrencySymbol();
    return (symbol!+' '+price.current.value); 
}

const ProductView: React.FC<ProductProps> = ({item}) => {
  const mediaquery = { verySmallViewport: "(max-width: 320px)" };
  const matches = useMedia({ queries: mediaquery });
  
  return (
    <div id={item.UPC.toString()} className="product-view">
      <img className='product' alt='Product' src={matches.verySmallViewport ? Constants.url.smallProductImage : Constants.url.productImage } />
      <div className='info'>
        <div>{ getFormattedPrice(new Price(item.price.current, item.price.currency)) }</div>
        <div>{item.name.toLowerCase()}</div>
      </div>
      <RelatedContainer item={item} />
    </div>
  );
}

export default ProductView;