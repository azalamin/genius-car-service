import React from "react";
import notFoundImg from "../../../images/notFound-img.jpeg";

const NotFound = () => {
  return (
    <div className="text-center">
      <h1 className="text-danger py-5">Mechanic is Sleeping</h1>
      <img className="w-50" src={notFoundImg} alt="" />
    </div>
  );
};

export default NotFound;
