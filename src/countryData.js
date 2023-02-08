import { useEffect,useState } from "react";
import Paginate from "./paginate";

export const useFetch=(url)=>{
    const [isLoading,setIsLoading] = useState(true);
    const [data,setData] = useState([]);
    const getProducts =async()=>{
    const response = await fetch(url);
    const data = await response.json();
    setData(Paginate(data));
    setIsLoading(false)
    }
    useEffect(()=>{
     getProducts();
    },[url])
    return {isLoading,data}
}