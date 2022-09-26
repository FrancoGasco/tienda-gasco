import React from 'react';
import { FaOpencart } from 'react-icons/fa';
import './CartWidget.css'
import { useCartContext } from '../CartContext';

export const CartWidget = () =>{
    const {totalProducts} = useCartContext;
    return(
        <>
        <i className='widget-cart'></i>
        <span>{totalProducts()|| ''}</span>
        </>
        
    )
}

export default CartWidget;