import styled from "styled-components";

export const LoginContainer = styled.div`
  height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
`;

export const LoginBox = styled.div`
  height: 480px;
  width: 640px;
  display: flex;
  flex-direction: column;
  // border: 1px solid red;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow: 0px 0px 5px 5px lightgray;

  h3 {
    font-size: 32px;
    margin-bottom: 30px;
  }

  input {
    font-size: 18px;
    padding: 10px 8px;
    width: 40%;
    margin-bottom: 10px;
    outline: none;
    border-radius: 4px;
  }

  button {
    font-size: 18px;
    // font-weight: bold;
    padding: 14px 5px;
    width: 20%;
    margin-top: 30px;
    color: green;
    background-color: whitesmoke;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.15s ease-in-out;

    &:hover {
      border-color: green;
      color: white;
      background-color: green;
    }
  }

  p {
    padding-top: 60px;
  }
`;
