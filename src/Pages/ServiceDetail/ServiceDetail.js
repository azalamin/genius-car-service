import React from 'react';
import { Link, useParams } from 'react-router-dom';
import PageTitle from '../Shared/PageTitle/PageTitle';

const ServiceDetail = () => {
    const { serviceId } = useParams();
   <PageTitle title="Service Details"></PageTitle>;
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