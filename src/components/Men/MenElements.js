import styled from "styled-components";

export const MensHeading = styled.div`
  display: flex;
  border-bottom: 1px solid lightgray;
  margin-bottom: 20px;
  h1 {
    background: url("https://i.pinimg.com/originals/38/17/6a/38176a8616f17d56ae5e2f8353de07fe.gif");
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 286px;
    margin: 0 auto;
  }
`;

export const ProductsGrid = styled.div`
  //   display: grid;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
