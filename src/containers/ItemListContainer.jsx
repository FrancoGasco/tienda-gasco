import React from "react";
import { ItemCount } from "../components/ItemCount";
import './ItemListContainer.css'


export const ItemListContainer = ({greeting}) =>{
    
    const handleAdd = () =>{
        console.log("Se agrego al carrito")
    }

    return(
        <>
        
        <div className="greeting">{greeting}</div>
        
        <ItemCount handleAdd={handleAdd} initialStock={10}/>
        
        </>
    )
}