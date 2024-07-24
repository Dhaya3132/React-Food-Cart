import './App.css';
import { Header } from './Components/Header';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import {Home} from './Components/Home';
import {ViewCart} from './Components/ViewCart';
import { useState,createContext } from 'react';

export const cartContext = createContext();

function App() {
  const [cart,setCart] = useState([]);
  return (
    <cartContext.Provider value={{cart, setCart}}>
      <BrowserRouter>
        <Header cart={cart} />
        <div className='Container'>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Cart" element={<ViewCart />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </cartContext.Provider>
  )
}

export default App;
