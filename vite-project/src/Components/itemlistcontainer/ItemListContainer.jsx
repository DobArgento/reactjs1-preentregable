import React, { useState, useEffect } from 'react';

const ItemListContainer = ({ message }) => {
  const [products, setProducts] = useState([]);

  // Simulación de carga de productos desde una API
  useEffect(() => {
    // Aquí podrías realizar una llamada a una API para obtener los productos
    // Por ahora, simulamos la carga de productos después de 1 segundo
    const timer = setTimeout(() => {
      const dummyProducts = [
        { id: 1, name: 'Producto 1', price: 10 },
        { id: 2, name: 'Producto 2', price: 20 },
        { id: 3, name: 'Producto 3', price: 30 }
      ];
      setProducts(dummyProducts);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="item-list-container">
      <h2>{message}</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>Precio: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
