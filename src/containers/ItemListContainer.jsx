import React , {useState, useEffect} from "react";
import ItemList from "./ItemList";
import './ItemListContainer.css'
import { useParams } from "react-router-dom";
import {getFirestore, collection, getDoc, query, where} from "firebase"


export const ItemListContainer = ({texto}) =>{
    
    const[data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() =>{
        const querydb = getFirestore();
        const queryCollection = collection(querydb, "products")
        if(categoriaId){
        const queryFilter = query(queryCollection, where("category", "==", categoriaId))
        getDoc(queryFilter)
        .then(res => setData(res.docs.map(product =>({id: product.id, ...product.data()})))) 
        }else{
            getDoc(queryCollection)
        .then(res => setData(res.docs.map(product =>({id: product.id, ...product.data()}))))
        }
        

    }, [categoriaId])


    return(
        <>
        
        <Title greeting={texto}/>
        <ItemList data={data}/>
        
        </>
    )
}

