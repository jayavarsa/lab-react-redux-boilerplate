const initialstate = {
    count : 0,
};

const  counterReducer = (state=initialstate, action) =>{
     switch(action.type){
         case "INCREMENT":
             return {count: state.count +1}
         
         case "DECREMENT" :
            if(state.count === 0 ) {return state;}
            else {
                return {count: state.count -1 }
            }
             
         default: 
             return state;
     }
};
export default counterReducer;