import React, { useState } from 'react';

const CartWidget = () => {
  // Estado para la cantidad de ítems en el carrito
  const [itemCount, setItemCount] = useState(0);

  // Función para simular agregar un ítem al carrito
  const addToCart = () => {
    setItemCount(itemCount + 1);
  };

  return (
    <div className="cart-widget" onClick={addToCart}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M20 6h-4.8l-2.4-4H6L3.2 6H0v2h2l3.7 10.4c.2.6.8 1 1.4 1H18v-2H8.2l-.6-1.6h10.8c.4 0 .7-.3.8-.7l1.4-5c.1-.2.1-.5 0-.7L20 6zm-8 13c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
      </svg>
      {itemCount > 0 && <span className="item-count">{itemCount}</span>}
    </div>
  );
}

export default CartWidget;

