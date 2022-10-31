import React,{useEffect} from "react";
import { useDispatch ,useSelector} from "react-redux";
import { getProducts } from "../../redux/product/product.actions";
import Product from "./Product/Product";

const Products = () => {
  const dispatch=useDispatch();
  const {loading,error,data}=useSelector((state)=>state.product);
  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch]);
  if(loading)return<div>Loading...</div>
  else if(error) return<div>...</div>
  return <div>
    <h1>Products</h1>
    <div>
      {data.map((product)=>(
        <Product key={product.id}{...product}/>
      ))}
    </div>
  </div>;
};

export default Products;
