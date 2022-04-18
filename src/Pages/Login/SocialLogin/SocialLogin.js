import React from "react";
import {
    useSignInWithGithub,
    useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import facebook from "../../../images/Facebook.png";
import github from "../../../images/github.png";
import googleLogo from "../../../images/google-logo.png";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, userGithub, loadingGithub, errorGithub] =
    useSignInWithGithub(auth);

  const navigate = useNavigate();

  if (loading || loadingGithub) {
      return <Loading></Loading>
  }

  let errorElement;
  if (error || errorGithub) {
    errorElement = (
      <p className="text-danger">
        {error?.message} {errorGithub?.message}
      </p>
    );
  }

  if (user) {
    navigate("/home");
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "2px" }} className="bg-primary w-50 "></div>
        <p className="mb-0 mx-3">or</p>
        <div style={{ height: "2px" }} className="bg-primary w-50 "></div>
      </div>
      {errorElement}
      <div className="mt-4">
        <button
          onClick={() => signInWithGoogle()}
          className="mb-3 btn btn-info w-50 d-block mx-auto"
        >
          <img width={30} src={googleLogo} alt="" />
          <span className="ms-2">Google Sign In</span>
        </button>
        <button className="mb-3 btn btn-info w-50 d-block mx-auto">
          <img width={30} src={facebook} alt="" />
          <span className="ms-2">Facebook Sign In</span>
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="mb-3 btn btn-info w-50 d-block mx-auto"
        >
          <img width={30} src={github} alt="" />
          <span className="ms-2">Github Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
