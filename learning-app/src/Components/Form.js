import { useState } from "react";
import  ReactDOM  from "react-dom/client";

export default function Form(){
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.prventDefault();
        alert('The name you entered was: ${name}');
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </label>
            <input type="submit" />
        </form>
    )

}