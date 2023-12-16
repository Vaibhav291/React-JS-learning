import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";

export default function LoginPage(){
    return(
    <div class="row justify-content-md-center p-5">
        <div class="col-md-4 col-md-offset-6 border border-black border-5 rounded">
        <Form className="sm-3 center p-4">
        <Form.Group className="mb-3 row">
            <Form.Control type="email" className="form-control" placeholder="Email"/>
            <Form.Text className="text-muted">
               We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 row">
            <Form.Control type="password" className="form-control" placeholder="Password"/>
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