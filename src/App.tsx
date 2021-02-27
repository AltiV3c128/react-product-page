import React from "react";

import ProductListView from "./components/product-list/product-list";

const App: React.FC = () => {
  return (
    <div className="Product page">
      <header className="header">
        <div>menu</div>
      </header>
      <ProductListView isLoading /*items={list : ProductListItem}*/ />
      <footer className="footer">
        <div>footer</div>
      </footer>
    </div>
  );
}

export default App;
