const increment  = "INCREMENT";
const  decrement  = "DECREMENT";


export function incrementNum(){
    return {type:increment};

}

export  function decrementNum(){
    return{
        type : decrement
    }
}