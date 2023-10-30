import React  from "react";

const initialState = {count: 0};

function reducer (state, action) {
    switch(action.type){
        case 'INCREMENT':   
        return{ count : state.count +1}
        case 'DECREMENT':
            return{count: state.count -1 }
        default:
            return state;
    }
}

function CounterRed () {
    const [state , dispatch] = React.useReducer(reducer,initialState);
    return (
        <div>
            Count:{state.count}
            <button onClick={()=>dispatch({ type:'INCREMENT'})}>Increase</button>
            <button onClick={()=>dispatch({ type:'DECREMENT'})}>Decrease</button>
        </div>
    )
}

export default CounterRed;