import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function RegistrationPage() {
    return(
        <div class="row justify-content-md-center p-5">
           <div class="col-md-4 col-md-offset-6 border border-black border-5 rounded">
           <Form className="sm-3 center p-4">
           <Form.Group className="mb-3 row">
            <Form.Control type='text' placeholder='First Name'/>
           </Form.Group>
           <Form.Group className="mb-3 row">
            <Form.Control type='text' placeholder='Last Name'/>
           </Form.Group>
           <Form.Group className="mb-3 row">
            <Form.Control type='number' placeholder='Mobile Number'/>
           </Form.Group>
           <Form.Group className="mb-3 row">
            <Form.Control type='email' placeholder='Email Address'/>
           </Form.Group>
           <Form.Group className="mb-3 row">
            <Form.Control type='password' placeholder='Password'/>
           </Form.Group>
           <Form.Group className="mb-3 row">
            <Form.Control type='password' placeholder='Confirm Password'/>
           </Form.Group>
           <Form.Group className="mb-3 row">
            <Button variant="primary" type="Login">
            Register
           </Button>
        </Form.Group>
           </Form>
           </div>
        </div>
    );
}