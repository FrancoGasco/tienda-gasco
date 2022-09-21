import React from "react";
import { ItemCount } from "./ItemCount";
import './itemDetail.css';
import { useCartContext } from "../CartContext";
import React, {useState} from "react";
import { Link } from "react-router-dom";

export const ItemDetail = ({data}) => {

    const[goToCart, setGoToCArt] = useState(false)
    const{addProudct} = useCartContext ()

    const onAdd = (quantity) =>{
        setGoToCArt(true);
        addProudct(data, quantity)
    }


    return (
        <div className="container">
            <div className="detail">
                <img className='detail_image' src={data.image} alt=""/>
                <div className = " content ">
                    <h1>{data.title}</h1>
                    {
                        goToCart
                        ? <Link to='/Cart'>Terminar compra</Link>
                        : <ItemCount initial={3} stock={5} onAdd={onAdd}/>
                    }
                </div>
            </div>
        </div>
    );
} 

export default ItemDetail ;