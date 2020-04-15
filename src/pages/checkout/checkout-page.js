import React from "react";
import "./checkout-page.scss";
import CheckoutHeader from "../../components/checkout-header/checkout-header.component";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import NavigationBar from "../../components/navigation-bar/navigation-bar.component";
import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { useAuth0 } from "../../react-auth0-spa";

const CheckoutPage = ({ cartItems, cartTotal }) => {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <React.Fragment>
      <NavigationBar />
      <div className="checkout-page-container">
        <h1 className="checkout-title">shopping cart</h1>
        <CheckoutHeader />
        {cartItems.length
          ? cartItems.map((cartItem) => (
              <CheckoutItem key={cartItem.id} item={cartItem} />
            ))
          : null}
        <h1 className="cart-total">{`Total: ${cartTotal}`}</h1>
        <button className="checkout-button">checkout</button>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
