import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

export const CartContainer = styled.div`
  display: flex;
  width: 100vw;
  margin: 0 auto;
  max-width: 1024px;
`;

export const CardContainerLeft = styled.div`
  flex: 0.7;
  display: flex;
  flex-direction: column;
  margin: 0 14px;
`;

export const CardContainerRight = styled.div`
  flex: 0.3;
  display: flex;
  flex-direction: column;
  padding: 14px;
  border: 1px solid lightgray;
  border-radius: 8px;

  h4 {
    padding: 14px 0;
  }

  p {
    padding: 10px 0;
  }

  h3 {
    padding: 18px 0;
    border-top: 1px solid lightgray;
  }

  button {
    font-size: 14px;
    font-weight: bolder;
    padding: 14px 0;
    background: #ff3f6c;
    color: white;
    outline: none;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
`;

export const CartProduct = styled.div`
  display: flex;
  border: 1px solid lightgray;
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 14px;
`;

export const CartProductLeft = styled.div`
  margin-right: 14px;
`;

export const ProductImage = styled.img`
  height: 180px;
  width: 120px;
  object-fit: cover;
  cursor: pointer;
`;

export const CartProductRight = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const CartProductCross = styled(CloseIcon)`
  cursor: pointer;
  font-size: 28px !important;
`;

export const EmptyCart = styled.div`
  display: flex;
  width: 100%;
  h1 {
    justify-content: center;
    margin: 10px auto;
  }
`;
