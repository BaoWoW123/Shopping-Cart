const Cart = (props) => {
  const cart = props.cart.cart;

  const checkout = () => {
    const items = document.querySelector(".cartItems");
    if (items.childElementCount === 0)
      return; //prevents checking out empty cart
    else window.location.href = "https://github.com/BaoWoW123/Shopping-Cart";
  };
  return (
    <div className="cart visuallyHidden hidden">
      <h1>Cart</h1>
      <div className="cartItems">
        {cart.map((item, i) => {
          return (
            <div className="cartItem" key={i}>
              <div>
                {item.name} {item.size ? <div>Size:{item.size}</div> : null}
              </div>
              <div>Quantity:{item.amount}</div>
            </div>
          );
        })}
      </div>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
};

export default Cart;
