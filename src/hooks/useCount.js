import { useState } from "react";
export const useCount = (valInicial = 1, min, max) =>{
    
    if(valInicial < min || valInicial > max){
        valInicial = min
    }

    const [count, setCount] = useState(valInicial)

    const sum = () => count < max && setCount(count + 1)
    const res = () => count > min && setCount(count - 1)

    const reset = () => setCount(valInicial)

    return {count, sum, res, reset}
}