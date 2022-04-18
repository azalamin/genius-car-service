import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithEmailAndPassword, user1, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [user] = useAuthState(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const from = location.state?.from?.pathname || "/";
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate(from, { replace: true });
    console.log(user);
  }

  let errorElement;
  if (error) {
    errorElement = <p className="text-danger">{error?.message}</p>;
  }

  const errorEmail = <p className="text-danger">Please enter your email address </p>;
  const resetPassword = async () => {
    const email = emailRef.current.value;
     if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent Email");
    } else{
      toast(errorEmail);
    }
  };

  return (
    <div className="w-50 container mx-auto my-5">
      <PageTitle title="Login"></PageTitle>
      <h2 className="text-primary text-center">Please Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button
          className="w-50 d-block mx-auto my-4 py-3"
          variant="primary"
          type="submit"
        >
          Login
        </Button>
      </Form>
      <p>
        New to Genius Car?
        <Link className="text-decoration-none ms-2" to={"/register"}>
          Create a account
        </Link>
      </p>
      <p>
        Forget Password?
        <span
          onClick={resetPassword}
          style={{ cursor: "pointer" }}
          className="text-primary ms-2"
        >
          Reset Password
        </span>
      </p>
      {errorElement}
      <ToastContainer />
      <SocialLogin> </SocialLogin>
    </div>
  );
};

export default Login;
