import StripeCheckout from "react-stripe-checkout"

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey =
    "pk_test_51KgjTWHuRtTNQ9781VoYUmxHV1i6OinykVukvKq3WYBLxObHfgDOBkGNyM6wo324Kartyx9Qe7XVOeoywKlt9Y8L00k5smSFPy"
  const onToken = (token) => {
    console.log(token)
    alert("payment successful")
  }
  return (
    <StripeCheckout
      lable="Pay now"
      billingAddress
      shippingAddress
      name="CRWN Clothing Ltd."
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeButton
