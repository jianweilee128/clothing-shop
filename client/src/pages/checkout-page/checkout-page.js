import React from "react";
import "./checkout-page.scss";
import CheckoutHeader from "../../components/checkout-header/checkout-header.component";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";

import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

const CheckoutPage = ({ cartItems, cartTotal }) => {
  return (
    <React.Fragment>
      <div className="checkout-page-container">
        <h1 className="checkout-title">shopping cart</h1>
        <CheckoutHeader />
        {cartItems.length
          ? cartItems.map((cartItem) => (
              <CheckoutItem key={cartItem.id} item={cartItem} />
            ))
          : null}
        <h1 className="cart-total">{`Total: ${cartTotal}`}</h1>
        <div className="test-warning">
          *Please use the following test credit card for payment*
          <br />
          4242 4242 4242 4242 - Exp: 01/25 - CVV:123
        </div>
        {/* Test Cards For Stripe: https://stripe.com/docs/testing */}
        <div className="checkout-button">
          <StripeCheckoutButton price={cartTotal} />
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
