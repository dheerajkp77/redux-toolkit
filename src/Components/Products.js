import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../Store/cartSlice";

const Products = () => {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const resp = await fetch("https://fakestoreapi.com/products");
      const data = await resp.json();
      setProduct(data);
    };
    fetchProducts();
  }, []); 

  const handleAdd = (product) =>{
    dispatch(add(product));
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
