import React from 'react';
import './Product.css';
import { useContext } from 'react';
import { cartContext } from '../App';


export const Product = ({ props }) => {

    const {cart,setCart} = useContext(cartContext);
    const name = props.title.length > 19 ? props.title.substring(0,19)+"..." : props.title; 

    function addtoCart(){
        setCart([...cart,props]);
    }
    function removeCart(){
        setCart(cart.filter(items => items.id!==props.id));
    }

    return (
        <div className='product'>
            <div className="img">
                <img src={props.thumbnail} alt="Product Image" />
            </div>
            <div className="details">
                <h3>{name}</h3>
                <p>Price : {props.price}</p>
                {cart.includes(props) ? <button className='btnRemove' onClick={removeCart}>Remove from Cart</button> : <button onClick={addtoCart}>Add to Cart</button>}
            </div>
        </div>
    );
}
