import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        fetch("http://localhost:5000/services", {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
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