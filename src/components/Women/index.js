import React from "react";
import { WomensData } from "../../Data";
import ProductCard from "../ProductCard";
import { ProductsGrid, WomensHeading } from "./WomenElements";

const Women = () => {
  const womenData = WomensData;
  return (
    <>
      <WomensHeading>
        <h1>WOMEN</h1>
      </WomensHeading>
      <ProductsGrid>
        {womenData.map((product) => {
          return (
            <ProductCard
              imgUrl={product.imgUrl}
              brandName={product.brandName}
              description={product.description}
              price={product.price}
              size={product.size}
            />
          );
        })}
      </ProductsGrid>
    </>
  );
};

export default Women;
