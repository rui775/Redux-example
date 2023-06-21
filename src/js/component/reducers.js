import { ADD_ONE, MINUS_ONE, ADD_USER } from "./actions.js";

const initialState = {
    numberOfItems: 0,
    user: ''
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ONE:
            return {
                ...state,
                numberOfItems: state.numberOfItems + 1
            }
        case MINUS_ONE:
            return {
                ...state,
                numberOfItems: state.numberOfItems - 1
            }
        case ADD_USER:
            return {
                ...state,
                user: action.user,
            }
        default:
            return state;
    }
}

export default reducer;