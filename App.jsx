import './App.css';
import { useReducer } from 'react';

function App() {

  const initialState = { count: 0 }

  const [state, dispatch] = useReducer(reducer, initialState)

  function reducer(state, action) {
switch (action.type) {
  case "INCREMENT":
    return { count: state.count + 1 };

  case "DECREMENT":
    return { count: state.count - 1 };

  default:
    return state;
}
  }

const callbackIncrement = () => {
  dispatch({type: "INCREMENT"})
}

const callbackDecrement = () => {
  dispatch({type: "DECREMENT"})
}

  return (
    <div className="App">

<h1>Count: {state.count}</h1>

<button onClick={callbackIncrement}>Increment</button>
<button onClick={callbackDecrement}>Decrement</button>

    </div>
  );
}

export default App;
