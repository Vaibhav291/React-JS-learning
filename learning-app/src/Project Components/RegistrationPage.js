import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function RegistrationPage() {
   
    const [formData, setFormData] = useState({
        FirstName: '',
        LastName: '',
        MobileNumber: '',
        Email: '',
        Password: '',
        ConfirmPassword: '',
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

        const response = await fetch("https://localhost:7071/api/Registration/register", {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = response.json();
        console.log(result);
      }



    return(
        <div class="row justify-content-md-center p-5">
           <div class="col-md-4 col-md-offset-6 border border-black border-5 rounded">
           <Form className="sm-3 center p-4" onSubmit={handleSubmit}>
           <Form.Group className="mb-3 row">
            <Form.Control
             type='text'  
             name="FirstName" 
             value={formData.FirstName} 
             onChange={handleInputChange}
             placeholder='First Name'/>
           </Form.Group>
           <Form.Group className="mb-3 row">
            <Form.Control
             type='text'  
             name="LastName" 
             value={formData.LastName} 
             onChange={handleInputChange}
             placeholder='Last Name'/>
           </Form.Group>
           <Form.Group className="mb-3 row">
            <Form.Control
             type='text'  
             name="MobileNumber" 
             value={formData.MobileNumber} 
             onChange={handleInputChange}
             placeholder='Mobile Number'/>
           </Form.Group>
           <Form.Group className="mb-3 row">
            <Form.Control
             type='email'  
             name="Email" 
             value={formData.Email} 
             onChange={handleInputChange}
             placeholder='Email Address'/>
           </Form.Group>
           <Form.Group className="mb-3 row">
            <Form.Control
             type='password' 
             name="Password" 
             value={formData.Password} 
             onChange={handleInputChange}
             placeholder='Password'/>
           </Form.Group>
           <Form.Group className="mb-3 row">
            <Form.Control
             type='password'  
             name="ConfirmPassword" 
             onChange={handleInputChange}
             value={formData.ConfirmPassword} 
             placeholder='Confirm Password'/>
           </Form.Group>
           <Form.Group className="mb-3 row">
            <Button variant="primary" type="submit">
            Register
           </Button>
        </Form.Group>
           </Form>
           </div>
        </div>
    );
}