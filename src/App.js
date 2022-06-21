import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./redux/store";
import HomePage from "./pages";
import MenPage from "./pages/men";
import WomenPage from "./pages/women";
import CartPage from "./pages/cart";
import WishlistPage from "./pages/wishlist";
import TrackOrder from "./pages/trackOrder";
import { useEffect, useState } from "react";
import Login from "./components/Login";
import { connect } from "react-redux";

function App(props) {
  const [login, setLogin] = useState(true);
  console.log("username in App:", props.usernameInComponent);

  useEffect(() => {
    if (props.usernameInComponent.length > 0) {
      setLogin(false);
    }
  }, [props.usernameInComponent]);

  return (
    // <Provider store={store}>
    <Router>
      {/* {login ? (
        <Login />
      ) : ( */}
      <div className="app">
        <Navbar />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/men" component={MenPage} exact />
          <Route path="/women" component={WomenPage} exact />
          <Route path="/cart" component={CartPage} exact />
          <Route path="/wishlist" component={WishlistPage} exact />
          <Route path="/track" component={TrackOrder} exact />
        </Switch>
      </div>
      {/* )} */}
    </Router>
    // </Provider>
  );
}

export const mapStateToProps = (state) => {
  return {
    usernameInComponent: state.loginUserReducer.username,
  };
};

export default connect(mapStateToProps)(App);
