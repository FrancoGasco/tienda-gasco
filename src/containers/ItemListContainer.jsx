import React , {useState, useEffect} from "react";
import { ItemCount } from "../components/ItemCount";
import ItemList from "../components/ItemList";
import './ItemListContainer.css'


export const ItemListContainer = ({greeting}) =>{
    
    const[data, setData] = useState([]);

    useEffect(() =>{
        const getData = new Promise(resolve => {
            setTimeout(()=> {
                resolve(remeras)
            }, 3000);
        });
        getData.then(res=> setData(res));

    }, [])

    const handleAdd = () =>{
        console.log("Se agrego al carrito")
    }

    return(
        <>
        
        <div className="greeting">{greeting}</div>
        
        <ItemCount handleAdd={handleAdd} initialStock={10}/>
        <ItemList data={data}/>
        
        </>
    )
}

const remeras = [
{id: 1, image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/106/550/products/760629-mla31662488528_082019-f-280de9dd625157c4c015925093776964-640-0.jpg" , title:"Jaguares" },
{id: 2, image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/018/676/products/camiseta_inglaterra_imago_21-removebg-preview1-2489192b419d0b97c616150476047432-640-0.png", title: "Inglaterra"},
{id: 3, image:"https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/bd77ab15-8062-48c7-b305-a29abb2ac129/pumas.jpg",title:"Pumas"},
];