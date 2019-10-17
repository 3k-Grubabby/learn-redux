export const incrment = (nr) =>{
    return{
        type: "INCREMENT",
        payload : nr
    }
}

export const decrment = () =>{
    return{
        type: "DECREMENT"
    }
}

export const login = () =>{
    return{
        type: "SIGN_IN"
    }
}