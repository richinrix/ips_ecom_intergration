import styled from "styled-components";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 380px;
  width: 256px;
  // border: 1px solid black;
  margin: 10px 40px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.15);
  }
`;

export const CardImage = styled.img`
  height: 220px;
  object-fit: cover;
  margin-bottom: auto;
`;

export const CardWishlist = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid lightgray;
  padding: 10px 0;
  margin: 0 10px;
  cursor: pointer;

  &:hover {
    border: 1px solid gray;
  }
`;
export const WishlistIcon = styled(FavoriteBorderIcon)``;

export const BrandName = styled.h3`
  margin: 5px;
`;

export const Description = styled.p`
  margin: 5px;
`;

export const SizeInfo = styled.p`
  margin: 5px;
`;

export const Price = styled.h3`
  margin: 5px;
`;

export const AddToCart = styled.button`
  font-size: 14px;
  font-weight: bold;
  padding: 10px 0;
  cursor: pointer;
`;
