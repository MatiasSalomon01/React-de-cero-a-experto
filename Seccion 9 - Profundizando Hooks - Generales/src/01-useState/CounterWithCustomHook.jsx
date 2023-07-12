import { useCounter } from "../hooks/useCounter"

const CounterWithCustomHook = () => {
    
    const { counter } = useCounter();
    
    return (
        <>
            <div>Counter with Hook: { counter }</div>
            <hr />

            <button className="btn btn-primary">+1</button>
            <button className="btn btn-primary">Reset</button>
            <button className="btn btn-primary">-1</button>
        </>
    )
}

export default CounterWithCustomHook