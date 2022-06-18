import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

export const WishlistContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const WishlistProduct = styled.div`
  display: flex;
  width: 420px;
  border: 1px solid lightgray;
  border-radius: 8px;
  margin: 10px;
  padding: 14px;
`;

export const WishlistProductLeft = styled.div`
  margin-right: 14px;
`;

export const ProductImage = styled.img`
  height: 180px;
  width: 120px;
  object-fit: cover;
  cursor: pointer;
`;

export const WishlistProductRight = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  h4 {
    padding-bottom: 6px;
  }

  p {
    padding-bottom: 2px;
  }

  button {
    font-size: 14px;
    font-weight: bold;
    padding: 10px 40px;
    cursor: pointer;
    margin-top: auto;
    margin-right: auto;
    margin-left: auto;
  }
`;

export const WishlistProductCross = styled(CloseIcon)`
  cursor: pointer;
  font-size: 28px !important;
`;

export const EmptyWishlist = styled.div`
  display: flex;
  width: 100%;
  h1 {
    justify-content: center;
    margin: 10px auto;
  }
`;
