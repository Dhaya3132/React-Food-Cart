import Data from '../assets/Products.json';
import { useState } from 'react';
import { Product } from './Product';
import './Home.css'

export const Home = () => {
  const [Products] = useState(Data);
  return (
    <div className="Product-Container">
      {Products.map((item) => (
        <Product key={item.id} props={item}/>
      )
    )}
    </div>
  );
}
