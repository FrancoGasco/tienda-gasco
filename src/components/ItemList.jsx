import Item from "./Item";
import React from "react";

const ItemList = ({data = []}) =>{
    return(
        data.map(remera => <Item key={remera.id} info={remera}/>)
    );
}

export default ItemList;