import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./actions.js";


const AddUser = () => {

    const state = useSelector((state) => state)
    const dispatch = useDispatch()

    return(
        <div>
            <button onClick={() => dispatch(addUser('Rui'))}>Add user</button>
            <h1>{state.user}</h1>
        </div>
    )
}

export default AddUser