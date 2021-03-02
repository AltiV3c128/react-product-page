import React, { useEffect, useState } from "react";
import Menu from "../../components/menu/menu";
import ProductListView from "../../components/product-list/product-list";
import SearchBar from "../../components/search-bar/search-bar";
import { ProductItemList } from "../../model/products/product-item-list";
import { Constants } from "../../modules/constants/constants";
import { ProductManager } from "../../modules/product-manager/product-manager";
import './style.css';

const ProductPage: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [productLoaded, setProductLoaded] = useState(false);
    const [productList, setProductList] = useState(new ProductItemList());
    const [searchText, setSearchText] = useState('');
  
    useEffect(() => {
      if(!isLoading && !productLoaded) {
        setIsLoading(true);
        ProductManager.getProductList().then((result) => {
          setProductLoaded(true);
          window.setTimeout(() => setIsLoading(false),1000);

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
            <header className="header">
                <div className='logo-bar'>
                    <img src={Constants.url.logoImage} alt='Logo' />
                </div>
                <Menu />
                <SearchBar 
                    searchText={searchText} 
                    onChange={(event:React.ChangeEvent<HTMLInputElement>) => updateSearchText(event)}
                    setSearchText={() => setSearchText('')} 
                />
            </header>
            <ProductListView isLoading={isLoading} list={productList} filterSearchText={searchText} />
            <footer className="footer">
                <div>footer</div>
            </footer>
        </div>
    );
}

export default ProductPage;