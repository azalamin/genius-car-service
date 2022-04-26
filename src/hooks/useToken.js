import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;
    const getToken = async () => {
      if (email) {
        const { data } = await axios.post(
          `https://sleepy-sands-20583.herokuapp.com/login`,
          { email }
        );
        setToken(data?.accessToken);
        localStorage.setItem("accessToken", data.accessToken);
      }
    };
    getToken();
  }, [user]);
  return [token];
};

export default useToken;
