import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './Action';
import { removeFromCart } from './Action';


function Product(props) {
  // const dispatch = useDispatch();
  

  // function handleAddToCart() {
  //   dispatch(addToCart(props.product));
  // }
  // function handleRemove()
  // {
  //   dispatch(removeFromCart(props.product))
  // }

  return (
    <>
    {/* <div>
      <h2>{props.product.name}</h2>
      <p>{props.product.description}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <button onClick={handleRemove}>Remove to Cart</button>
    </div> */}
    </>
  );
}

export default Product;
