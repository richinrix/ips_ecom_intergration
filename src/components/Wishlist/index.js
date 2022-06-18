import React from "react";
import { connect, useDispatch } from "react-redux";
import {
  WishlistProduct,
  WishlistProductCross,
  WishlistProductLeft,
  WishlistProductRight,
  ProductImage,
  WishlistContainer,
  EmptyWishlist,
} from "./WishlistElements";
import { addToCart } from "../../redux";

const Wishlist = (props) => {
  const dispatch = useDispatch();
  //   console.log("Products in Wishlist:", props.wishlistInComponent);
  return (
    <WishlistContainer>
      {props.wishlistInComponent.length > 0 ? (
        <>
          {props.wishlistInComponent.map((product) => {
            return (
              <WishlistProduct>
                <WishlistProductLeft>
                  <ProductImage
                    src={product?.imgUrl}
                    alt="Product Image"
                  ></ProductImage>
                </WishlistProductLeft>
                <WishlistProductRight>
                  <h4>{product?.brandName}</h4>
                  <p>{product?.description}</p>
                  <p>Sold By Abhiram Satpute</p>
                  <p>Sizes: {product?.size}</p>
                  <p>{product?.price}</p>
                  <button
                    onClick={() => {
                      dispatch(
                        addToCart({
                          imgUrl: product?.imgUrl,
                          brandName: product?.brandName,
                          description: product?.description,
                          size: product?.size,
                          price: product?.price,
                        })
                      );
                      alert("Product added to Cart!");
                    }}
                  >
                    Add To Cart
                  </button>
                </WishlistProductRight>
                <WishlistProductCross onClick={() => alert("Coming Soon!")} />
              </WishlistProduct>
            );
          })}
        </>
      ) : (
        <>
          <EmptyWishlist>
            <h1>Your Wishlist is Empty! Make a Wish ;)</h1>
          </EmptyWishlist>{" "}
        </>
      )}
    </WishlistContainer>
  );
};

const mapStateToProps = (state) => {
  return { wishlistInComponent: state.wishlistReducer.productsInWishlist };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addToWishlist: () => dispatch(addToWishlist({
//         imgUrl: imgUrl,
//         brandName: brandName,
//         description: description,
//         size: size,
//         price: price,
//       })),
//   };
// };

export default connect(mapStateToProps)(Wishlist);
