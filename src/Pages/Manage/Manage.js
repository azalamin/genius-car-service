import React from "react";
import useServices from "../../hooks/useServices";

const Manage = () => {
  const [services, setServices] = useServices();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/service/${id}`, {
        method: "DELETE",
      })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          const remaining = services.filter(service => service._id !== id);
          setServices(remaining);
        }
      })
    }
  };

  return (
    <div className="text-center py-5">
      <h1>Manage Your Services</h1>
      <div className="row mt-5 g-5">
        {services.map((service) => (
          <div className="col-md-4 mb-3" key={service._id}>
            <h5>{service.name}</h5>
            <button onClick={() => handleDelete(service._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Manage;
