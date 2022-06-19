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
  const Nquery = gql`
    mutation MyMutation(
      $orderId: String!
      $postageCost: String!
      $productCost: String!
      $postOfficeDestination: String!
      $productDetails: String!
      $productName: String!
      $trackingId: String!
      $address: String!
      $name: String!
      $ipsSourcePin: String!
      $productImage: String!
    ) {
      createOrder(
        data: {
          orderId: $orderId
          postageCost: $postageCost
          productCost: $productCost
          postOfficeDestination: $postOfficeDestination
          productDetails: $productDetails
          productName: $productName
          trackingId: $trackingId
          address: $address
          name: $name
          ipsSourcePin: $ipsSourcePin
          productImage: $productImage
        }
      ) {
        id
      }
    }
  `;

  const response = await request(graphqlAPI, Nquery, details);
  return response.order;
};

export const getAllOrders = async () => {
  const query = gql`
    query MyQuery {
      orders {
        address
        createdAt
        ipsSourcePin
        name
        orderId
        postOfficeDestination
        postageCost
        productCost
        productDetails
        productName
        trackingId
        productImage
      }
    }
  `;
  const response = await request(graphqlAPI, query);
  return response.orders;
};
