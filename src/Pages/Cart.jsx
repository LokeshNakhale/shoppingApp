

function Cart({cart,handleInc,handleDec, handleRemove}) {


  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <h3>{cart.length} items</h3>
   
        <p className="empty-msg">Carts</p>
    
      {cart.map((cartItem )=>(
        
          <div key={cartItem.id} className="cart-item">
            <img src={cartItem.image} alt="" />
            <div className="item-details">
              <h2>{cartItem.title}</h2>
              <p> {cartItem.price}Rs. </p>
              <div className="qty-controls">
                <button onClick={()=>handleDec(cartItem.id)}>-</button>
                <span> {cartItem.quantity} </span>
                <button onClick={()=>handleInc(cartItem.id)}>+</button>
              </div>
              <p className="item-total">Total:{Math.floor(cartItem.price*cartItem.quantity)}</p>
              <button style={{background:'red'}} className="cartBtn" onClick={()=>handleRemove(cartItem.id)} >remove</button> <button className="cartBtn" > Buy Now </button>
            </div>
          </div>
      ))}
     

    
        <div className="cart-summary">
          <h2>Total: ₹</h2>
        </div>
   
    </div>
  );
}

export default Cart;
