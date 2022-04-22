import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PageTitle from '../Shared/PageTitle/PageTitle';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service, setService ] = useState({});
    
    useEffect( () => {
        fetch(`http://localhost:5000/service/${serviceId}`)
    .then(res => res.json())
    .then(data => setService(data));
    },[serviceId]);

    <PageTitle title="Service Details"></PageTitle>;
    return (
        <div>
            <h2 className='text-center'>You are about to book: {service.name}</h2>
            <div className='container py-5 text-center'>
                <Link to={'/checkout'} className='btn btn-primary btn-lg'>Checkout Now</Link>
            </div>
        </div>
    );
};

export default ServiceDetail;