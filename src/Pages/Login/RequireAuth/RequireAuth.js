import {
  useAuthState,
  useSendEmailVerification
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification, sending, VerificationError] =
    useSendEmailVerification(auth);

  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }

  const handleSendVerification = async () => {
    await sendEmailVerification(user.email);
    toast("Sent Email");
  };

  if (user.providerData[0]?.providerId === "password" && !user.emailVerified) {
    return (
      <div className="p-5 m-5 container text-center">
        <ToastContainer />
        <h2 className="text-danger">Your email is not not verified</h2>
        <h5 className="text-success">Please verify your email address</h5>
        <button
          onClick={handleSendVerification}
          className="btn btn-primary mt-3"
        >
          Send Verification
        </button>
        <p className="text-danger">{VerificationError?.message}</p>
      </div>
    );
  }

  return children;
};

export default RequireAuth;
