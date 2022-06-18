import React from "react";
import { connect } from "react-redux";
import {
  Bag,
  NavbarContainer,
  NavbarLeft,
  NavbarPersonal,
  NavbarRight,
  NavbarRoute,
  NavbarSearch,
  NavbarSearchIcon,
  NavbarSearchInput,
  NavH3,
  Profile,
  Wishlist,
} from "./NavbarElements";

const Navbar = (props) => {
  return (
    <NavbarContainer>
      <NavbarLeft>
        <NavbarRoute to="/">
          <img
            src="https://www.freepnglogos.com/uploads/logo-myntra-png/myntra-logo-m-png-3.png"
            alt="Myntra Logo"
          />
        </NavbarRoute>
        <NavbarRoute to="/men">
          <NavH3 borderColor="orange">Men</NavH3>
        </NavbarRoute>
        <NavbarRoute to="/women">
          <NavH3 borderColor="pink">Women</NavH3>
        </NavbarRoute>
        {/* <NavbarRoute>
          <h3>Kids</h3>
        </NavbarRoute>
        <NavbarRoute>
          <h3>Home & Living</h3>
        </NavbarRoute> */}
        <NavbarRoute to="/cart">
          <NavH3 borderColor="green">Cart</NavH3>
        </NavbarRoute>
      </NavbarLeft>
      <NavbarRight>
        <NavbarSearch>
          <NavbarSearchIcon />
          <NavbarSearchInput placeholder="Search for products, brands and more"></NavbarSearchInput>
        </NavbarSearch>
        {/* make it as a resuable component later, profile wishlist heart, bag */}
        <NavbarPersonal>
          <Profile />
          {props.usernameInComponent
            ? props.usernameInComponent.slice(0, 10)
            : "Profile"}
        </NavbarPersonal>
        <NavbarPersonal>
          <NavbarRoute to="/wishlist">
            <Wishlist />
            Wishlist
          </NavbarRoute>
        </NavbarPersonal>
        <NavbarPersonal>
          <NavbarRoute to="/cart">
            <Bag />
            Bag
          </NavbarRoute>
        </NavbarPersonal>
      </NavbarRight>
    </NavbarContainer>
  );
};

export const mapStateToProps = (state) => {
  return {
    usernameInComponent: state.loginUserReducer.username,
  };
};

export default connect(mapStateToProps)(Navbar);
