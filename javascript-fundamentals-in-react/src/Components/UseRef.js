import { useState, useEffect, useRef } from "react";

export default function UseRef(){
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");

    useEffect(() => {
        previousInputValue.current = inputValue;
    }, [inputValue]);

    return(
        <>
         <input 
           type="number"
           value={inputValue}
           onChange={(e) => setInputValue(e.target.value)}
         />
         <h2>Current Value: {inputValue}</h2>
         <h2>Previous Value: {previousInputValue.current}</h2>
        </>
    );
}