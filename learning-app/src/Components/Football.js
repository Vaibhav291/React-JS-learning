import React from "react";

export default function FootBall() {
    const shoot = () => {
        alert("Great Shot");
    }

    return (
        <button onClick={shoot}> Take the shot!</button>
    );


}