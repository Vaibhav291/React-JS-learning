import React, { useReducer } from "react";

function reducer(state, action){
    switch(action.type){
        case 'increment' : return {count: state.count + 1};
        case 'decrement' : return {count: state.count > 0 ? state.count - 1 : 0};
        default : return state;
    }
}

function reducerComponent() {
    const [state, dispatch] = useReducer(reducer, {count: 0});
    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
        </div>
    );
}
export default reducerComponent;