import React from 'react';
import { Helmet } from 'react-helmet-async';

const checkout = () => {
    return (
      <div className="container py-5 text-center">
        <Helmet>
          <title>Checkout</title>
        </Helmet>
        <h2>Please Checkout your booking</h2>
      </div>
    );
};

export default checkout;