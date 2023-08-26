import { useReducer } from "react"


function counter(state,val) {
    console.log(state,val)
    return state+val
}


function UseReducer() {

    const [state, dispatch] = useReducer(counter,0)


    return(
        <div>
            <button onClick={()=> {
                dispatch(-1)
            }}>-</button>
            <h1>{state}</h1>
            <button onClick={()=> {
                dispatch(1)
            }}>+</button>
        </div>
    )
}

export default UseReducer;