import { useEffect, useState } from "react";

const useServiceDetail = (serviceId) => {
  const [service, setService] = useState({});

  useEffect(() => {
    fetch(`https://evening-forest-22610.herokuapp.com/service/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [serviceId]);

  return [service];
};

export default useServiceDetail;
