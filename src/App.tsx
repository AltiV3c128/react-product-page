import React, { useEffect, useState } from "react";

import ProductListView from "./components/product-list/product-list";
import { ProductItemList } from "./model/products/product-item-list";
import { ProductManager } from "./modules/product-manager/product-manager";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [productList, setProductList] = useState(new ProductItemList());

  useEffect(() => {
    if(!isLoading && !productList.items) {
      setIsLoading(true);
      ProductManager.getProductList().then((result) => {
        setIsLoading(false);
        if(result.items != null && JSON.stringify(result.items) !== JSON.stringify(productList)) {
          setProductList(result);
        }
      });
    }
  });

  return (
    <div className="Product page">
      <header className="header">
        <div>menu</div>
      </header>
      <ProductListView isLoading={isLoading} list={productList} />
      <footer className="footer">
        <div>footer</div>
      </footer>
    </div>
  );
}

export default App;
