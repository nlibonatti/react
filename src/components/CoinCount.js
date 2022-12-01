import React from 'react'
import { useState , useEffect} from 'react';

const CoinCount = ({ stock = 0, initial = 1,  onAdd }) => { 
    
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[]);
    
    const sumar = () =>  {
        if (count < stock) {setCount(count + 1)}}

    const restar = () => {
        if (count > initial+1) {setCount(count - 1)}}

    return (
    <>
    <nav><button onClick={sumar}>+</button><button onClick={restar}>-</button></nav>
        <div>{count}</div>
            {
                stock && count
                ? <button onClick={() => onAdd(count)}>Add to Cart</button>
                : <button class=" btn disabled">Add to Cart</button>
            }

    </>
    )
    
    }
    
    export default CoinCount;
