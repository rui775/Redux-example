export const ADD_ONE = 'ADD_ONE'
export const MINUS_ONE = 'MINUS_ONE'
export const ADD_USER = 'ADD_USER'


const addUser = (user) => {
    console.log('Here 1', user);
    return{
        type: ADD_USER,
        user: user
    }
}

export {addUser}
