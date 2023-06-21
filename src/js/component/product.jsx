import React from "react";
import { useDispatch } from "react-redux";
import { ADD_ONE } from "./actions.js";

const Product = () => {

    const dispatch = useDispatch()

    return(
        <button onClick={() => dispatch({type: ADD_ONE})}>Add item to Cart</button>
    )
}

export default Product;