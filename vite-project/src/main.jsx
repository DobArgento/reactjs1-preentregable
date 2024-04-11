import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/itemlistcontainer/ItemListContainer';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Navbar />
    <ItemListContainer />
  </React.StrictMode>,
)
