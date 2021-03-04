import React, { useEffect, useState } from "react";
import ProductListView from "../../components/product-list/product-list";
import { ProductItemList } from "../../model/products/product-item-list";
import { ProductManager } from "../../modules/product-manager/product-manager";
import './style.css';
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

const ProductPage: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [productLoaded, setProductLoaded] = useState(false);
    const [productList, setProductList] = useState(new ProductItemList());
    const [searchText, setSearchText] = useState('');
  
    useEffect(() => {
      if(!isLoading && !productLoaded) {
        setIsLoading(true);
        ProductManager.productList.then((result) => {
          setProductLoaded(true);
          window.setTimeout(() => setIsLoading(false), 1500);

          if(result.items != null && JSON.stringify(result.items) !== JSON.stringify(productList)) {
            setProductList(result);
          }  
        });
      }
    }, [isLoading, productLoaded, productList]);

    const updateSearchText = (_event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(_event.target.value);
    }

    return (
        <div className="product-page">
            <Header 
                searchText={searchText} 
				setSearchText={(s : string) => setSearchText(s)}
                updateSearchText={(event:React.ChangeEvent<HTMLInputElement>) => updateSearchText(event)}
            />
			<div className='container'>
				<ProductListView 
					isLoading={isLoading} 
					list={productList} 
					filterSearchText={searchText}
				/>
			</div>
            <Footer />
        </div>
    );
}

export default ProductPage;