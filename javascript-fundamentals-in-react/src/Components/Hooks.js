import { useState, useEffect } from "react";

export default function UseState(){
    const [color,setColor] = useState("red"); // useState
    const [car, setCar] = useState({  
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    });
    const updateColor = () => {
        setCar(previousState => {
            return { ...previousState, color: "blue" }
        });
    }
    
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
    useEffect(() => {
        setCalculation(() => count * 1)
    }, [count]);
    return (
        <>
         <h1>--------USESTATE--------</h1>
         <h1>My favorite color is {color}!</h1>
         <button
           type="button"
           onClick={() => setColor("blue")}
         >
            Blue
         </button>
         <h1>My {car.brand}</h1>
         <p>
            It s a {car.color} {car.model} from {car.year}.
         </p>
         <button
           type="button"
           onClick={updateColor}
         >Blue</button>

         <h1>----------USESTATE and USEEFFECT</h1>
         <p>Count: {count}</p>
         <button onClick={() => setCount((c) => c+ 1)}>+</button>
         <p>Calculation: {calculation}</p>
        </>
    );
}