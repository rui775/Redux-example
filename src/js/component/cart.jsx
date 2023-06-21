import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_ONE, MINUS_ONE } from "./actions.js";

const Cart = () => {

    const state = useSelector((state) => state)
    const dispatch = useDispatch()                //dispatch any action
	console.log('state here ====>>>', state);


    return(
        <div>
            <h3 className="mb-2">Items inside cart: {state.numberOfItems} </h3>
            <button onClick={() => dispatch({type: ADD_ONE})}>Add items</button>
            <button disabled={state.numberOfItems === 0} onClick={() => dispatch({type: MINUS_ONE})}>Remove items</button>
        </div>
    )
}

export default Cart;