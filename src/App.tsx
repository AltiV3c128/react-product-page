import React from "react";
import ProductPage from "./container/product-page/product-page";
import MediaQueryBodyClass from "./theme/media";

const App: React.FC = () => {
  return (
    <>
      <MediaQueryBodyClass />
      <ProductPage />
    </>
  );
}

export default App;
