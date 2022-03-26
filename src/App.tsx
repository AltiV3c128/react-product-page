import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./container/product-page/product-page";
import RepositoryPage from "./container/repository-page/repository-page";
import MediaQueryBodyClass from "./theme/media";

const App: React.FC = () => {
  return (
    <>
      <MediaQueryBodyClass />
                        
      <BrowserRouter>
          <Routes>
              <Route index element={<ProductPage />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/repo" element={<RepositoryPage />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
