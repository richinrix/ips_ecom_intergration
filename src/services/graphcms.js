import { request, gql } from "graphql-request";
const graphqlAPI =
  "https://api-ap-south-1.graphcms.com/v2/cl4f58kw91c6t01z47w0d26fk/master";

export const getOrders = async () => {
  const query = gql`
    query MyQuery {
      orders {
        orderId
        postageCost
        productCost
        trackingId
      }
    }
  `;
  const response = await request(graphqlAPI, query);
  return response.order;
};

export const postOrder = async (details) => {
  console.log(details);
  const { orderId, postageCost, productCost } = details;
  console.log(details);
  const Nquery = gql`
    mutation MyMutation(
      $orderId: String!
      $postageCost: String!
      $productCost: String!
    ) {
      createOrder(
        data: {
          orderId: $orderId
          postageCost: $postageCost
          productCost: $productCost
        }
      ) {
        id
      }
    }
  `;
  const query = gql`
    mutation MyMutation(

    ) {
      createOrder(
        data: { orderId: "565656666", postageCost: "6512", productCost: "4145156" }
      ) {
        id
      }
    }
  `;
  const response = await request(graphqlAPI, Nquery, details);
  return response.order;
};