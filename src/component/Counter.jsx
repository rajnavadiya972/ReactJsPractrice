// import { useSelector, useDispatch } from "react-redux"
// import { increment, decrement } from "../state/reducers/counterSlice"
import { useContext } from "react";
import { countContext } from "../context/countContext";

const Counter = () => {
    // const dispatch = useDispatch()
    // const count = useSelector((state) => state.counter.count)
    const { count, setCount } = useContext(countContext);

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    // onClick={() => dispatch(increment())}
                    onClick={() => setCount(count + 1)}
                >
          Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    // onClick={() => dispatch(decrement())}
                    onClick={() => setCount(count - 1)}
                >
          Decrement
                </button>
            </div>
        </div>
    );
};

export default Counter;
