import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div id="services" className="pt-5">
      <h1 className="services-title py-5">Our Services</h1>
      <div className="services-container container">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;