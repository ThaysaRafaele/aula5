import { useState, useMemo, useEffect, useCallback } from "react";
import List from "./List";

const Button = () => {

    const [count, setCount] = useState(0);

    const incrementar = useCallback(() => {
        setCount(prevCount => prevCount + 1);
        console.log('count incrementar: ', count);
    }, [count]);

    return (
        <div>
            <List item={count}/>
            <button onClick={incrementar}>+1</button>
        </div>
    );

}

export default Button;