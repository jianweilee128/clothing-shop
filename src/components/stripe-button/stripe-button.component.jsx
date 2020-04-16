import React from "react";
import StripeCheckout from "react-stripe-checkout";
import "./stripe-button.scss";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = process.env.REACT_APP_PUBLISHABLE_KEY;

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
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

export default StripeCheckoutButton;
