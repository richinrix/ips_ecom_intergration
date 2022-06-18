import React, { useState } from "react";
import {
  AddToCart,
  BrandName,
  CardContainer,
  CardImage,
  CardWishlist,
  Description,
  Price,
  SizeInfo,
  WishlistIcon,
} from "./ProductCardElements";

import { useDispatch } from "react-redux";
import { addToCart, addToWishlist } from "../../redux";

const ProductCard = (props) => {
  const [hover, setHover] = useState(false);
  const { imgUrl, brandName, description, size, price, unavailable } = props;
  const dispatch = useDispatch();
  // <h2>Cart: {props.productInfoInComponent}</h2>
  // <button onClick={() => props.addToCart("-123-")}>
  //   Click to add '-123-'
  // </button>

  const changeHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <CardContainer onMouseEnter={changeHover} onMouseLeave={changeHover}>
        {/* later add carousel and stuff to it */}
        <CardImage src={imgUrl} />

        {hover ? (
          <>
            <CardWishlist
              onClick={() => {
                dispatch(
                  addToWishlist({
                    imgUrl: imgUrl,
                    brandName: brandName,
                    description: description,
                    size: size,
                    price: price,
                  })
                );
                console.log("Dispatched to Wishlist:", [
                  imgUrl,
                  brandName,
                  description,
                  size,
                  price,
                ]);
                alert("Product added to Wishlist!");
              }}
            >
              <WishlistIcon />
              <h4>WISHLIST</h4>
            </CardWishlist>
          </>
        ) : (
          <>
            <BrandName>{brandName}</BrandName>
          </>
        )}
        {hover ? (
          <>
            <SizeInfo>Sizes: {size}</SizeInfo>
          </>
        ) : (
          <>
            <Description>{description}</Description>
          </>
        )}

        <Price>{price}</Price>
        {/* also add ADD TO CART after frontend basic done */}
        <AddToCart
          className=" w-3/4 mx-auto my-3 border-2 border-gray-500 hover:bg-gray-500 hover:text-white cursor-pointer"
          onClick={() => {
            dispatch(
              addToCart({
                imgUrl: imgUrl,
                brandName: brandName,
                description: description,
                size: size,
                price: price,
                unavailable: unavailable,
              })
            );
            // props.addToCart([imgUrl, brandName, description, size, price]);
            // console.log("Products Now:", props.productInfoInComponent);
            console.log("Dispatched to cart:", [
              imgUrl,
              brandName,
              description,
              size,
              price,
            ]);
            alert("Product added to Cart!");
          }}
        >
          Add To Cart
        </AddToCart>
      </CardContainer>
    </>
  );
};

export default ProductCard;

// const mapStateToProps = (state) => {
//   return {
//     productInfoInComponent: state.cartReducer.productsInCart,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addToCart: (product) => dispatch(addToCart(product)),
//   };
// };

// export default connect(mapStateToProps)(ProductCard);
