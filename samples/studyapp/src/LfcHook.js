import React, { useRef }  from "react";
 
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

function LifecycleHooks () {
    let ref = useRef(0);
    ref.current = ref.current + 1;
    console.log(ref)
    const [state , dispatch] = React.useReducer(reducer,initialState);
    alert ('You clicked' + ref.current + "times")
    return (
        <div style={{marginLeft:'20px'}}>
            Count:{state.count}
            <br />
            <button onClick={()=>dispatch({ type:'INCREMENT'})}>Increase</button>
            <button onClick={()=>dispatch({ type:'DECREMENT'})}>Decrease</button>
        </div>
    )
}
 
export default LifecycleHooks;