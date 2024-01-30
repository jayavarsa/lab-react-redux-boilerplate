import { useState } from "react";
import counterReducer from "./Reducer"
import { decrementNum, incrementNum } from "./Actions";
import {createStore}  from 'redux'

const store = createStore(counterReducer)

export default function LikeCounter(){

    const [count,setcount ] = useState(0)


    store.subscribe(() =>{
        setcount(store.getState().count)
    })

    
    return(
        <>
            <div>
                <h1>{count}</h1>
                <button onClick={()=>{store.dispatch(incrementNum())}}>Like</button>
                <button onClick={()=>{store.dispatch(decrementNum())}}>Unlike</button>
            </div>
        </>
    )
}