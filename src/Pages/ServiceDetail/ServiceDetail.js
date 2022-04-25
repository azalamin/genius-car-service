import React from "react";
import { Link, useParams } from "react-router-dom";
import useServiceDetail from "../../hooks/useServiceDetail";
import PageTitle from "../Shared/PageTitle/PageTitle";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);

  <PageTitle title="Service Details"></PageTitle>;
  return (
    <div>
      <h2 className="text-center">You are about to book: {service.name}</h2>
      <div className="container py-5 text-center">
        <Link to={`/checkout/${serviceId}`} className="btn btn-primary btn-lg">
          Checkout Now
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
