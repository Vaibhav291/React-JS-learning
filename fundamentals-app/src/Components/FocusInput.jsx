import React, { useRef } from "react";

function FocusInput() {
    const inputRef = useRef(null);
    return (
        <div>
            <input ref={inputRef} />
            <button onClick={() => inputRef.current.focus()}>Focus Input</button>
        </div>
    );
}

export default FocusInput;