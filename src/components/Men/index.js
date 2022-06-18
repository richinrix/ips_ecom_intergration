import React from "react";
import { MensData } from "../../Data";
import ProductCard from "../ProductCard";
import { MensHeading, ProductsGrid } from "./MenElements";

const Men = () => {
  const menData = MensData;
  return (
    <>
      <MensHeading>
        <h1>MEN</h1>
      </MensHeading>
      <ProductsGrid>
        {menData.map((product) => {
          return (
            <ProductCard
              imgUrl={product.imgUrl}
              brandName={product.brandName}
              description={product.description}
              price={product.price}
              size={product.size}
              unavailable={product.unavailable}
            />
          );
        })}
      </ProductsGrid>
    </>
  );
};

export default Men;
