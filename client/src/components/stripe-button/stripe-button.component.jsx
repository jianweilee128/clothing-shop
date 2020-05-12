import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./stripe-button.scss";
import { clearCart } from "../../redux/cart/cart.actions";

const StripeCheckoutButton = ({ price, clearCart, history }) => {
  const priceForStripe = price * 100;
  const publishableKey = process.env.REACT_APP_PUBLISHED_KEY;

  const onToken = (token) => {
    axios({
      url: " payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((res) => {
        alert(
          "Payment successful! You will be redirected back to homepage soon..."
        );
        setTimeout(() => {
          clearCart();
          return history.push("/");
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
        alert(
          "There was an issue with your payment. Please provide the right credentials."
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Clothing Shop"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    >
      <button className="btn-stripe">pay now</button>
    </StripeCheckout>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});

export default withRouter(
  connect(null, mapDispatchToProps)(StripeCheckoutButton)
);
