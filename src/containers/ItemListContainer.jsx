import React , {useState, useEffect} from "react";
import ItemList from "./ItemList";
import './ItemListContainer.css'
import { useParams } from "react-router-dom";


export const ItemListContainer = ({texto}) =>{
    
    const[data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() =>{
        const getData = new Promise(resolve => {
            setTimeout(()=> {
                resolve(remeras)
            }, 1000);
        });
        if(categoriaId){
            getData.then(res=> setData(res.filter(remeras => remeras.category === categoriaId)));
        }else{
            getData.then(res=> setData(res));
        }
        

    }, [categoriaId])


    return(
        <>
        
        <Title greeting={texto}/>
        <ItemList data={data}/>
        
        </>
    )
}

const remeras = [
{id: 1, price:2000, image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/106/550/products/760629-mla31662488528_082019-f-280de9dd625157c4c015925093776964-640-0.jpg" , category:"remeras",title:"Jaguares" },
{id: 2, price:3000, image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/018/676/products/camiseta_inglaterra_imago_21-removebg-preview1-2489192b419d0b97c616150476047432-640-0.png", category:"remeras", title: "Inglaterra"},
{id: 3, price:4000, image:"https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/bd77ab15-8062-48c7-b305-a29abb2ac129/pumas.jpg", category:"remeras",title:"Pumas"},
{id: 4, price:5000, image:"https://http2.mlstatic.com/D_NQ_NP_915099-MLA49012432783_022022-V.jpg", category:"Shorts", title:"Short Irlanda"},
{id: 5, price:6000, image:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/220/451/products/swag-giveaway-2021-10-14t205022-4141-f93e4618d653bef87d16377095607817-1024-1024.png", category:"Shorts",title:"Short Pumas"},
];