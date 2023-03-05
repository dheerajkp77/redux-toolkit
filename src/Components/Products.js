import React, { useEffect } from "react";
// import {useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Store/cartSlice";
import { fetchProduct, STATUS } from "../Store/productSlice";

const Products = () => {
//   const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  const { data: product, status } = useSelector((state)=>state.product);

  useEffect(() => {
    // const fetchProducts = async () => {
    //   const resp = await fetch("https://fakestoreapi.com/products");
    //   const data = await resp.json();
    //   setProduct(data);
    // };
    // fetchProducts();
    dispatch(fetchProduct())

  }, []);  

  const handleAdd = (product) =>{
    dispatch(add(product));
  }

  if(status === STATUS.LOADING){
    return <h4>Loading ....</h4>
  }

  if(status === STATUS.ERROR){
    return <h4>Something Wrong</h4>
  }

  return (
    <div className="productsWrapper">
      {product.map((product) => {
        return (
          <div className="card" key={product.id}>
            <img src={product.image} alt="" />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button onClick = {()=>handleAdd(product)} className="btn">Add to cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
