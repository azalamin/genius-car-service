import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import useToken from "../../../hooks/useToken";
import Loading from "../../Shared/Loading/Loading";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const [agree, setAgree] = useState(false);
  const [token] = useToken(user);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
     
  };

  useEffect( () => {
    if (token) {
      navigate("/home");
    }
  }, [token])
  
  if(loading || updating){
    return <Loading></Loading>
  }

  let errorElement;
  if (error) {
    errorElement = <p className="text-danger">{error?.message}</p>;
  }

  return (
    <div className="w-50 container mx-auto my-5">
      <PageTitle title="Register"></PageTitle>
      <h2 className="text-primary text-center">Please Register</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            type="text"
            placeholder="Enter Name"
            name="name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 d-flex" controlId="formBasicCheckbox">
          <Form.Check
            onClick={() => setAgree(!agree)}
            name="terms"
            type="checkbox"
            id="terms"
            className="me-2"
          />
          <label
          className="text-muted"
            htmlFor="terms"
          >
            Accept genius car terms and conditions
          </label>
        </Form.Group>
        <Button
          className="w-50 d-block mx-auto my-4 py-3"
          variant="primary"
          type="submit"
          disabled={!agree}
        >
          Register
        </Button>
      </Form>
      <p>
        Already have an account?{" "}
        <Link className="text-decoration-none" to={"/login"}>
          Login
        </Link>
      </p>
      {errorElement}
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
