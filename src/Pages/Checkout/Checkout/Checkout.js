import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import useServiceDetail from "../../../hooks/useServiceDetail";
import PageTitle from "../../Shared/PageTitle/PageTitle";
const axios = require("axios").default;

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  const [user] = useAuthState(auth);

  // const [user, setUser] = useState({
  //   name: 'Shamchul Alom',
  //   email: 'samchul@gmail.com',
  //   phone: '017988888888',
  //   address: 'New market, Md.pur'
  // })

  // const handleAddressChange = (event) => {
  //   const {address, ...rest} = user;
  //   const newAddress = event.target.value;
  //   const newUser = { address: newAddress, ...rest };
  //   setUser(newUser);
  //   console.log(newUser);
  // }

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const order = {
      name: user.displayName,
      email: user.email,
      service: service.name,
      serviceId: serviceId,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };

    // Send a POST request
    axios
      .post("https://sleepy-sands-20583.herokuapp.com/order", order)
      .then((res) => {
        const data = res.data;
        if (data.insertedId) {
          toast(`Your order id #${data.insertedId}`);
          event.target.reset(); 
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container py-5 text-center">
      <PageTitle title="Checkout"></PageTitle>
      <div className="w-50 mx-auto">
        <h2>Please Checkout your booking- {service.name}</h2>
        <form onSubmit={handlePlaceOrder}>
          <input
            className="w-100 mb-2 py-2 px-2"
            type="text"
            name="name"
            placeholder="Name"
            value={user?.displayName}
            readOnly
            required
          />
          <br />
          <input
            className="w-100 mb-2 py-2 px-2"
            type="email"
            name="email"
            placeholder="Email"
            value={user?.email}
            disabled
            readOnly
            required
          />
          <br />
          <input
            className="w-100 mb-2 py-2 px-2"
            value={service.name}
            type="text"
            name="service"
            placeholder="Service Name"
            readOnly
            required
          />
          <br />
          <input
            className="w-100 mb-2 py-2 px-2"
            type="text"
            name="address"
            placeholder="Address"
            autoComplete="off"
            required
          />
          <br />
          <input
            className="w-100 mb-2 py-2 px-2"
            type="text"
            name="phone"
            placeholder="Phone"
            autoComplete="off"
            required
          />
          <br />
          <input
            className="btn btn-primary"
            type="submit"
            value="Place Order"
          />
        </form>
      </div>
    </div>
  );
};

export default Checkout;
