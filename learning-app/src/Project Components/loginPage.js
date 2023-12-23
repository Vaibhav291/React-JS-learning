import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";

export default function LoginPage(){

    const [formData, setFormData] = useState({
        Email: '',
        Password: '',
      });

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
       try{
        const response = await fetch("https://localhost:7071/api/Login/login", {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        // });
        // const result = response.json();
        // console.log(result);    
        });
            if(response.ok){
                console.log('Status code:', response.status);
                const data = await response.json(); 
                console.log(data)
            } else {
                console.log('Error Status code:', response.status);
                const errorData = await response.json();
                console.error('Error:',errorData);
            }
    }
    catch(error){
        console.error('Fetch Error:',error);
    }
      }

    return(
    <div class="row justify-content-md-center p-5">
        <div class="col-md-4 col-md-offset-6 border border-black border-5 rounded">
        <Form className="sm-3 center p-4" onSubmit={handleSubmit}>
        <Form.Group className="mb-3 row">
            <Form.Select name="Type" value={formData.Type} onChange={handleInputChange}>
                <option>admin</option>
                <option>user</option>
            </Form.Select>
            </Form.Group>
        <Form.Group className="mb-3 row">
            <Form.Control
             type="email" 
             className="form-control"
             name="Email" 
             value={formData.Email} 
             onChange={handleInputChange} 
             placeholder="Email"/>
            <Form.Text className="text-muted">
               We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 row">
            <Form.Control
             type="password"
             className="form-control"
             name="Password" 
             value={formData.Password} 
             onChange={handleInputChange} 
             placeholder="Password"/>
        </Form.Group>
        <Form.Group className="mb-3 row">
            <Button variant="primary" type="Login">
            Login
           </Button>
        </Form.Group>
        </Form>
        </div>
    </div>
    );
}