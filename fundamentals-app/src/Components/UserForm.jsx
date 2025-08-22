import React, { useState } from "react";

function UserForm() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Your email is: ${email}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)} 
            />
            <button type="submit">Submit</button>
            <p>Your email is: {email}</p>
        </form>
    );
}

export default UserForm;