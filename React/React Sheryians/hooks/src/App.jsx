import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useReducer,
  useCallback,
  useMemo,
} from "react";

// Dummy context and provider
const MyContext = React.createContext("default-context-value");

// Dummy reducer + initial state
const reducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return { ...state, value: state.value + 1 };
    case "dec":
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
};
const initialState = { value: 0 };

// Dummy heavy function
const heavyFunction = (n) => n * 2;

export default function App() {
  // useState — local state
  const [count, setCount] = useState(0);

  // useEffect — runs once on mount (empty deps)
  useEffect(() => {
    console.log("Component mounted");
    // cleanup example (not necessary here)
    return () => console.log("Component will unmount");
  }, []);

  // useContext — consume value from provider
  const contextValue = useContext(MyContext);

  // useRef — DOM ref
  const inputRef = useRef(null);

  // useReducer — more complex state
  const [state, dispatch] = useReducer(reducer, initialState);

  // useCallback — memoized callback
  const increment = useCallback(() => setCount((c) => c + 1), []);

  // useMemo — memoized expensive computation
  const memoResult = useMemo(() => heavyFunction(count), [count]);

  return (
    <MyContext.Provider value={"provided-value"}>
      <div style={{ padding: 20 }}>
        <h2>Hooks Demo (error-free)</h2>

        <p>useState count: {count}</p>
        <button onClick={() => setCount((c) => c + 1)}>Increment state</button>
        <button onClick={() => setCount(0)}>Reset</button>

        <hr />

        <p>useReducer value: {state.value}</p>
        <button onClick={() => dispatch({ type: "inc" })}>Reducer +1</button>
        <button onClick={() => dispatch({ type: "dec" })}>Reducer -1</button>

        <hr />

        <p>useMemo result (heavyFunction): {memoResult}</p>
        <p>
          useCallback reference is stable (try to inspect in React devtools)
        </p>

        <hr />
        <button onClick={increment}>Increment</button>
        <hr />
        <p>useContext value: {contextValue}</p>

        <hr />

        <input ref={inputRef} placeholder="useRef input" />
        <button onClick={() => inputRef.current && inputRef.current.focus()}>
          Focus input
        </button>

        <hr />
        <p>useEffect logs appear in browser console</p>
      </div>
    </MyContext.Provider>
  );
}

