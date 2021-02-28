import React, { useEffect, useState } from "react";
import ProductListView from "../../components/product-list/product-list";
import { ProductItemList } from "../../model/products/product-item-list";
import { Constants } from "../../modules/constants/constants";
import { ProductManager } from "../../modules/product-manager/product-manager";
import './product-page.css';

const ProductPage: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [productLoaded, setProductLoaded] = useState(false);
    const [productList, setProductList] = useState(new ProductItemList());
    const [searchText, setSearchText] = useState('');
  
    useEffect(() => {
      if(!isLoading && !productLoaded) {
        setIsLoading(true);
        ProductManager.getProductList().then((result) => {
          setIsLoading(false);
          setProductLoaded(true);
          if(result.items != null && JSON.stringify(result.items) !== JSON.stringify(productList)) {
            setProductList(result);
          }
        });
      }
    });

    const updateSearchText = (_event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(_event.target.value);
    }

    return (
        <div className="product-page">
            <header className="header" style={{display: "flex"}}>
                <div className='logo-bar'>
                    <img src={Constants.url.logoImage} alt='Logo' />
                </div>
                <div className='menu-bar'>
                    <ul style={{display: "flex", listStyle: 'none', justifyContent: "space-between"}}>
                        <li>sunglasses</li>
                        <li>eyeglasses</li>
                        <li>lenses</li>
                    </ul>
                </div>
                <div className='search-bar'>
                    <input type='text' className='search-field' value={searchText} onChange={(event) => updateSearchText(event)} />
                    <button className='reset-search-field' onClick={(event) => setSearchText('')}>RESET</button>
                </div>
            </header>
            <ProductListView isLoading={isLoading} list={productList} filterSearchText={searchText} />
            <footer className="footer">
            <div>footer</div>
            </footer>
        </div>
    );
}

export default ProductPage;