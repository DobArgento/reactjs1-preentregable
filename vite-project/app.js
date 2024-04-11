import React from 'react';
import Navbar from './src/Components/Navbar/Navbar';
import ItemListContainer from './src/Components/itemlistcontainer/ItemListContainer';

const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer mensajeBienvenida="¡Bienvenido a nuestra tienda en línea!" />
    </div>
  );
}

export default App;
