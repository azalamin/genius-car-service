import React from "react";
import useServices from "../../../hooks/useServices";
import Service from "../Service/Service";
import './Services.css';

const Services = () => {
  const [services] = useServices();

  return (
    <div id="services" className="pt-5">
      <h1 className="services-title py-5">Our Services</h1>
      <div className="services-container container">
        {services.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
