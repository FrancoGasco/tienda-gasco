import React , {useState} from "react";

export const ItemCount = ({handleAdd , initialStock}) =>{
    
    const[count, setCount] = useState(0)
    
    const onAdd = () =>{
    setCount(count + 1)
    }
    const onDecrement = () =>{
    setCount(count - 1)
    }
    
    return(
        <div>
            
            <p>{count}</p>
            
            <button onClick={onAdd}>+</button>

            <button onClick={onDecrement}>-</button>

            <button onClick={handleAdd}>Agrega al carrito</button>




        </div>
    )
    
}