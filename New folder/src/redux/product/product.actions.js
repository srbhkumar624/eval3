// Product actions here
import axios from "axios"
// import { GET_CART_ITEMS_SUCCESS } from "../cart/cart.types"
import { GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS } from "./product.types"
export const getProducts=()=>(dispatch)=>{
    dispatch({type:GET_PRODUCTS_LOADING});
    axios.get("http://localhost:8080/products").then((res)=>{
        return dispatch({type:GET_PRODUCTS_SUCCESS,payload:res.data})
    }).catch(()=>dispatch({type:GET_PRODUCTS_ERROR}))
        

}