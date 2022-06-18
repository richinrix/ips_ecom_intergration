import styled from "styled-components";
export const Banners = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: 0 auto;
  // border: 1px solid black;
`;

export const BannerOne = styled.img`
  width: 100%;
  cursor: pointer;
  margin: 0 auto;
  margin-bottom: 10px;
`;

export const BannerTwo = styled(BannerOne)`
  // max-width: 100vw;
  // cursor: pointer;
`;
