import React, { useState, useEffect } from 'react';
import './App.css';
import { data } from './Components/Data';

// A reusable arrow function component with props and destructing
const UserCard =  ({ name, age, hobbies }) => {
  return (
    <div className="card">
      <h3>{name} ({age} yrs)</h3>
      <ul>
        {hobbies.map((hobby, index) => <li key={index}>{hobby}</li>) }
      </ul>
    </div>
  );
};

const Fundamentals = () => {
  // useState with array of users
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  //Add user form state
  const [newUser, setNewUser] = useState({
    name: "",
    age: "",
    hobbies:""
  });
  
  //Simuldate API call with asynce/await
  useEffect(() => {
    const fetchUsers = async () => {
      setUsers(data);
    };
    fetchUsers();
  }, []);

  //Event handler using arrow function
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prev =>({
      ...prev,
      [name]: value
    }));
  };

  const handleAddUser = (e) => {
    e.preventDefault();

    //validation
    if(!newUser.name || !newUser.age || !newUser.hobbies){
      alert("Please fill all fields");
      return;
    }

    const newUserObject = {
      id: users.length + 1,
      name: newUser.name.trim(),
      age: parseInt(newUser.age),
      hobbies: newUser.hobbies.split(',').map(h => h.trim())
    };
    setUsers(prevUsers => [...prevUsers, newUserObject]);

    // clear form
    setNewUser({ name: "", age: "", hobbies: "" });
  };

  //Using filter (ES6), destructing , template literals
  const filteredUsers = users.filter(({name}) =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  //Using reduce to count total age
  const totalAge = users.reduce((acc, curr) => acc + curr.age, 0);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>React + JS Fundamentals</h1>

      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={handleSearch} 
      />

      <h2>Total Age: {totalAge}</h2>

      <form onSubmit={handleAddUser} style={{ marginTop: "1rem" }}>
        <h3>Add New user</h3>
        <input 
         type='text'
         name='name'
         placeholder='Name'
         value={newUser.name}
         onChange={handleInputChange}
         required
        />
        <input 
         type='number'
         name='age'
         placeholder='Age'
         value={newUser.age}
         onChange={handleInputChange}
         required
        />
        <input 
         type='text'
         name='hobbies'
         placeholder='Hobbies (comma-separated)'
         value={newUser.hobbies}
         onChange={handleInputChange}
         required
        />
        <button type='submit'>Add User</button>
      </form>

      {/* Conditional Rendering */}
      {filteredUsers.length > 0 ? (
        filteredUsers.map((user) => (
          <UserCard
           key = {user.id}
           {...user} // Spread operator to pass props 
          />
        ))
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default Fundamentals;