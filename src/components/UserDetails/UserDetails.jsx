import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UserDetails = () => {
    let data=useLoaderData();
    const {name,username,id,address}=data;
    //useNavigate to back page or path set
    const navigate=useNavigate();
    let goBack=()=>{
        navigate(-1);
    }
    return (
        <div>
            <h1>Name :{name}</h1>
            <button onClick={goBack}>go back</button>
        </div>
    );
};

export default UserDetails;