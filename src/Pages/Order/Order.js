import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import axiosPrivet from "../../api/axiosPrivet";
import auth from "../../firebase.init";

const Order = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const email = user.email;
    const url = `https://evening-forest-22610.herokuapp.com/order?email=${email}`;
    const getOrders = async () => {
      try {
        const { data } = await axiosPrivet.get(url);
        setOrders(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getOrders();
  }, [user]);

  return (
    <div className="text-center my-5 ">
      <h2>Your Orders: {orders.length}</h2>
      <div>
        {
          orders.map(order => <div key={order._id}>
            <p>{order.email} {order.service}</p>
          </div>)
        }
      </div>
    </div>
  );
};

export default Order;
