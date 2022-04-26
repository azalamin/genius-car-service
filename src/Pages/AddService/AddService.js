import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        fetch("https://evening-forest-22610.herokuapp.com/services", {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            toast("Added Product");
            reset();
            navigate('/home')
        })
    };
    return (
      <div>
        <h1>Please add service</h1>
        <form className='w-50 mx-auto d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
          <input className='mb-3 p-2' placeholder='Name' required {...register("name")} />
          <textarea className='mb-3 p-2' placeholder='Description' required {...register("description")} />
          <input className='mb-3 p-2' placeholder='Price' required type="number" {...register("price")} />
          <input className='mb-3 p-2' placeholder='Photo URL' required type="text" {...register("img")} />
          <input className='mb-3 p-2' value='Add Service' type="submit" />
        </form>
      </div>
    );
};

export default AddService;