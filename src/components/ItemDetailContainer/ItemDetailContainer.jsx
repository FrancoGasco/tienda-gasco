import React, {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail";

const remera = {id: 1, image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/106/550/products/760629-mla31662488528_082019-f-280de9dd625157c4c015925093776964-640-0.jpg" , title:"Jaguares" }

export const ItemDetailContainer = () => {
    const [data,setData] = useState({});

    useEffect(()=>{
    const getData = new Promise(resolve =>{
        setTimeout(()=>{
            resolve(remera);
        }, 3000);
    });
    getData.then(res => setData(res));
}, [])
    
return (
        <ItemDetail data={data}/>
    ) ;
} 

export default ItemDetailContainer ;