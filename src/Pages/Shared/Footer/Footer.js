import React from 'react';

const Footer = () => {
    return (
        <footer className='py-5'>
            <p className='text-center'><small>Copyright &copy; {new Date().getFullYear()}</small></p>
        </footer>
    );
};

export default Footer;