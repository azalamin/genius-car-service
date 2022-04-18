import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    <Helmet>
      <title>Service Details</title>
    </Helmet>
    return (
        <div>
            <h2 className='text-center'>Welcome to service detail {serviceId}</h2>
            <div className='container py-5 text-center'>
                <Link to={'/checkout'} className='btn btn-primary btn-lg'>Checkout Now</Link>
            </div>
        </div>
    );
};

export default ServiceDetail;