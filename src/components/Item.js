import { useState } from "react";

function Item({ name, category }) {
  const [isIncart, setIsInCart] = useState(false)

  function handleInCart() {
    setIsInCart(!isIncart)
  }
  
const appClass = isIncart ? 'in-cart' : ''

const cartLabel = isIncart ? 'Remove from Cart' : 'Add to Cart'

  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleInCart} className="add">{cartLabel}</button>
    </li>
  );
}

export default Item;


























// import React, {useState }from "react";

// function Item({ name, category }) {
//   const [isIncart, setIsInCart] = useState(false)

//   function handleClick() {
// setIsInCart(!isIncart)
//   }

//   const appClass = isIncart ? 'in-cart' : ''

//   return (
//     <li className={appClass}>
//       <span>{name}</span>
//       <span className="category">{category}</span>
//       <button onClick={handleClick} className="add">{isIncart ? 'Remove from Cart' : 'Add to Cart'}</button>
//     </li>
//   );
// }

// export default Item;
